export interface Project {
 section:string; subject:string; imageUrl?:string; imageAlt?:string; imageCaption?:string;
 activities?:Project[];
 datasetNote?:string; datasetSources?:{label:string;url:string}[]; demonstrationUrl?:string;
 id:string; title:string; domains:string[]; categories:string[]; technologies:string[];
 methods:string[]; features:string[]; summary:string; results:string[]; limitations:string[];
 attribution:string; concerns:string[]; placement:string; kind:string; status:string; evidence:string;
 repositoryUrl:string|null; sourceStatus:string; documentationUrl:string; course:string|null;
}
