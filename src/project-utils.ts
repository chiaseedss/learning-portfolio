import type { Project } from './types';
export const categories=['Computer Vision & Digital Image Processing','Robotics','Artificial Intelligence & Machine Learning','Software Development','Other Coursework'];
export function filterProjects(projects:Project[],category:string,query:string){const q=query.trim().toLowerCase();return projects.filter(p=>(category==='All projects'||p.categories.includes(category))&&[p.title,p.summary,p.course||'',...p.technologies,...p.methods].join(' ').toLowerCase().includes(q));}
export function resolveRoute(hash:string){const match=hash.match(/^#\/projects\/([^/?]+)$/);return match?{page:'detail',id:match[1]}:hash==='#/'||hash==='#/projects'||hash===''||hash==='#about'||hash==='#projects'?{page:'home',id:null}:{page:'missing',id:null};}
