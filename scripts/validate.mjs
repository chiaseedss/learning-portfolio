import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react';
const root=path.resolve(import.meta.dirname,'..');
const projects=JSON.parse(await fs.readFile(path.join(root,'src/data/projects.json'),'utf8'));
const expected=['traffic-signs','fish-ann','image-compression','coin-edges','eduroom'];
assert.deepEqual(projects.map(p=>p.id),expected);
assert(!projects.some(p=>p.id.startsWith('dip-')||p.activities?.length));
for(const p of projects){assert(p.repositoryUrl?.startsWith('https://github.com/chiaseedss/'));assert(p.attribution.includes('Olivares'));const doc=await fs.readFile(path.join(root,'public-approved',p.documentationUrl.slice(2)),'utf8');assert(doc.startsWith('# '+p.title));}
assert(projects[1].results.some(s=>s.includes('0.9364')));assert(projects[1].results.some(s=>s.includes('0.9375')));
assert(projects[3].results.every(s=>!s.includes('99%')));
const server=await createServer({root,server:{middlewareMode:true},appType:'custom'});
try{const utils=await server.ssrLoadModule('/src/project-utils.ts');
assert.equal(utils.filterProjects(projects,'All projects','').length,5);
assert.equal(utils.filterProjects(projects,'Computer Vision & Digital Image Processing','').length,4);
for(const category of utils.categories)assert(utils.filterProjects(projects,category,'').every(p=>p.categories.includes(category)));
assert.equal(utils.filterProjects(projects,'Software Development','EduROOM').length,1);
assert.equal(utils.filterProjects(projects,'Robotics','').length,0);
assert.equal(utils.filterProjects(projects,'All projects','no-such-project').length,0);
const app=await server.ssrLoadModule('/src/App.tsx');globalThis.location={hash:'#/'};const home=renderToStaticMarkup(createElement(app.default));assert.equal((home.match(/class="project-card"/g)||[]).length,5);assert(home.includes('Learning Portfolio'));assert(home.includes('View Project'));
for(const p of projects){globalThis.location={hash:'#/projects/'+p.id};assert.equal(utils.resolveRoute(location.hash).id,p.id);const html=renderToStaticMarkup(createElement(app.default));for(const heading of ['Overview','Technologies used','Methodology','Results','Credits','Project resources'])assert(html.includes(heading));assert(html.includes(p.repositoryUrl));if(p.datasetNote)assert(html.includes('Dataset'));if(p.demonstrationUrl)assert(html.includes(p.demonstrationUrl));}
for(const id of ['dip-problem-sets','dip-ps1','missing'])assert(renderToStaticMarkup(createElement(app.ProjectDetail,{id})).includes('Project not found'));
}finally{await server.close();}
const built=await fs.readdir(path.join(root,'dist'),{recursive:true});
const expectedDocs=projects.map(p=>p.documentationUrl.split('/').at(-1)).sort();assert.deepEqual((await fs.readdir(path.join(root,'dist/documentation'))).sort(),expectedDocs);
assert(built.every(f=>!/\.(ipynb|csv|zip|pt|pth|png|jpg|jpeg)$/i.test(f)));
const index=await fs.readFile(path.join(root,'dist/index.html'),'utf8');assert(index.includes('/learning-portfolio/assets/'));
for(const file of ['src/App.tsx','src/components.tsx','src/data/projects.json',...built.filter(f=>/\.(js|html|md)$/.test(f)).map(f=>'dist/'+f)]){const text=await fs.readFile(path.join(root,file),'utf8');assert(!/\b[A-Z]:[\\/]|file:\/\//i.test(text),'Local path in '+file);assert(!/(ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[A-Z0-9]{16}|-----BEGIN PRIVATE KEY-----)/.test(text),'Sensitive value in '+file);}
const css=await fs.readFile(path.join(root,'src/styles.css'),'utf8');assert(css.includes('@media'));assert(css.toLowerCase().includes('#f9de75'));
console.log('PASS: five approved projects; four prioritized CV entries; filters, routes and all details; Pages base path; five approved documentation files only; source/privacy checks. Responsive CSS retained; browser/device QA unavailable.');
