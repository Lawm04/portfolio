import {projects} from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage(){
    return(
        <section className="max-w-6xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">
                My Projects
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) =>(
                  <ProjectCard 
                  key={project.title}
                  project={project}/>  
                ))}
            </div>
        </section>
    )
}