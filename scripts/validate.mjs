import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react';
const root=path.resolve(import.meta.dirname,'..');
const projects=JSON.parse(await fs.readFile(path.join(root,'src/data/projects.json'),'utf8'));
const expected=['traffic-signs','fish-ann','image-compression','coin-edges','eduroom','line-follower','obstacle-avoidance','farmers-market','fashion-cnn','crop-yield','weather-app'];
assert.deepEqual(projects.map(p=>p.id),expected);
const verifiedNewLinks={"line-follower":"https://github.com/chiaseedss/robopuff-line-follower","obstacle-avoidance":"https://github.com/chiaseedss/fuzzy-obstacle-avoidance","fashion-cnn":"https://github.com/chiaseedss/fashion-mnist-optimizer-comparison","crop-yield":"https://github.com/chiaseedss/climate-based-crop-yield-estimation"};
for(const [id,url] of Object.entries(verifiedNewLinks))assert.equal(projects.find(p=>p.id===id).repositoryUrl,url);
assert(!projects.some(p=>p.id.startsWith('dip-')||p.activities?.length||['assembly-todo','3d-modelling','c-lexer','api-regression','nlp-ps3','nlp-ps4'].includes(p.id)));
assert(!projects.some(p=>p.id==='c-biobert'));
const crop=projects.find(p=>p.id==='crop-yield');assert(crop.results.some(s=>s.includes('0.3003')));assert(crop.limitations.some(s=>s.includes('StandardScaler')));
const weather=projects.find(p=>p.id==='weather-app');assert.equal(weather.subject,'Application Development');assert.equal(weather.repositoryUrl,'https://github.com/chiaseedss/cccs106-projects/tree/main/mod6_labs/weather_app');
assert(projects.find(p=>p.id==='farmers-market').attribution.includes('Sean Xander B. Aquino'));
for(const id of ['line-follower','obstacle-avoidance'])for(const name of ['Tischia Ann Olivares','Michelle Tercero','Rona Mae Quite'])assert(projects.find(p=>p.id===id).attribution.includes(name));
for(const p of projects){assert(p.repositoryUrl?.startsWith('https://github.com/chiaseedss/'));assert(p.attribution.length>20);const doc=await fs.readFile(path.join(root,'public-approved',p.documentationUrl.slice(2)),'utf8');assert(doc.startsWith('# '+p.title));}
assert(projects[1].results.some(s=>s.includes('0.9364')));assert(projects[1].results.some(s=>s.includes('0.9375')));
assert(projects[3].results.every(s=>!s.includes('99%')));
const server=await createServer({root,server:{middlewareMode:true},appType:'custom'});
try{const utils=await server.ssrLoadModule('/src/project-utils.ts');
assert.equal(utils.filterProjects(projects,'All projects','').length,11);
assert.equal(utils.filterProjects(projects,'Computer Vision & Digital Image Processing','').length,4);
for(const category of utils.categories)assert(utils.filterProjects(projects,category,'').every(p=>p.categories.includes(category)));
assert.equal(utils.filterProjects(projects,'Software Development','EduROOM').length,1);
assert.equal(utils.filterProjects(projects,'Robotics','').length,2);
assert.equal(utils.filterProjects(projects,'All projects','no-such-project').length,0);
assert.deepEqual(utils.sections,['Featured Projects','Collaborative Projects','Other Coursework']);
assert.equal(utils.filterProjects(projects,'All projects','','Featured Projects').length,4);assert.equal(utils.filterProjects(projects,'All projects','','Collaborative Projects').length,4);assert.equal(utils.filterProjects(projects,'All projects','','Other Coursework').length,3);assert.equal(utils.filterProjects(projects,'Robotics','fuzzy','Collaborative Projects').length,1);assert.equal(utils.filterProjects(projects,'Robotics','','Featured Projects').length,0);
const app=await server.ssrLoadModule('/src/App.tsx');globalThis.location={hash:'#/'};const home=renderToStaticMarkup(createElement(app.default));assert.equal((home.match(/class="project-card"/g)||[]).length,11);assert(home.includes('Learning Portfolio'));assert(home.includes('View Project'));
for(const p of projects){globalThis.location={hash:'#/projects/'+p.id};assert.equal(utils.resolveRoute(location.hash).id,p.id);const html=renderToStaticMarkup(createElement(app.default));for(const heading of ['Overview','Objectives','Technologies used','Methodology','Results','Contributors','Project resources'])assert(html.includes(heading));assert(html.includes(p.repositoryUrl));assert(html.includes('View Repository'));if(p.imageUrl)assert(html.includes(p.imageUrl));if(p.datasetNote)assert(html.includes('Dataset'));if(p.demonstrationUrl)assert(html.includes(p.demonstrationUrl));}
for(const id of ['c-biobert','dip-problem-sets','dip-ps1','assembly-todo','3d-modelling','c-lexer','api-regression','nlp-ps3','nlp-ps4','missing'])assert(renderToStaticMarkup(createElement(app.ProjectDetail,{id})).includes('Project not found'));
}finally{await server.close();}
const built=await fs.readdir(path.join(root,'dist'),{recursive:true});
const expectedDocs=projects.map(p=>p.documentationUrl.split('/').at(-1)).sort();assert.deepEqual((await fs.readdir(path.join(root,'dist/documentation'))).sort(),expectedDocs);
assert(built.every(f=>!/\.(ipynb|csv|zip|pt|pth|mp4)$/i.test(f)));
const approvedImages=projects.filter(p=>p.imageUrl).map(p=>p.imageUrl.split('/').at(-1)).sort();assert.deepEqual((await fs.readdir(path.join(root,'dist/images'))).sort(),approvedImages);
for(const p of projects.filter(p=>p.imageUrl)){const photo=await fs.readFile(path.join(root,'dist',p.imageUrl.slice(2)));assert(photo.length>1000&&photo.length<250000);assert.equal(photo.readUInt16BE(0),0xffd8);}
const index=await fs.readFile(path.join(root,'dist/index.html'),'utf8');assert(index.includes('/learning-portfolio/assets/'));
for(const file of ['src/App.tsx','src/components.tsx','src/data/projects.json',...built.filter(f=>/\.(js|html|md)$/.test(f)).map(f=>'dist/'+f)]){const text=await fs.readFile(path.join(root,file),'utf8');assert(!/\b[A-Z]:[\\/]|file:\/\//i.test(text),'Local path in '+file);assert(!/(ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[A-Z0-9]{16}|-----BEGIN PRIVATE KEY-----)/.test(text),'Sensitive value in '+file);}
const css=await fs.readFile(path.join(root,'src/styles.css'),'utf8');assert(css.includes('@media'));assert(css.toLowerCase().includes('#f9de75'));
console.log('PASS: eleven entries across three sections (4/4/3); four CV projects retained; combined section/subject/search filters; all detail routes; two approved JPEG assets; eleven documentation files; Pages base path and privacy checks. Responsive CSS retained; browser/device QA unavailable.');
