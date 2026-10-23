import type { Project } from './types';
export function ProjectCard({project}:{project:Project}) {
 return <article className="project-card">{project.imageUrl&&<img className="card-photo" src={project.imageUrl} alt={project.imageAlt} loading="lazy" width="1000" height={project.id==='line-follower'?750:563}/>}<div className="card-category">{project.section} · {project.subject}</div><h3><a href={'#/projects/'+project.id}>{project.title}</a></h3>{project.course&&<p className="course-label">{project.course}</p>}<p className="card-description">{project.summary}</p><ul className="technology-list" aria-label="Main technologies">{project.technologies.slice(0,3).map(t=><li key={t}>{t}</li>)}</ul><a className="detail-link" href={'#/projects/'+project.id}>View Project <span aria-hidden="true">→</span></a></article>;
}
export function TextList({items,empty}:{items:string[];empty:string}){return items.length?<ul className="content-list">{items.map(x=><li key={x}>{x}</li>)}</ul>:<p>{empty}</p>;}
