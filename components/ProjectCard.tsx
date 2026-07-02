type Project = {
    title: string;
    description: string;
    github: string;
};

export default function ProjectCard({
    project,
}: {
    project: Project;
}) {
    return (
        <div className="border rounded-lg p-6"> 
        <h3 className="text-2xl font-bold mb-2">
            {project.title}
        </h3>

        <p className="mb-4">
            {project.description}
        </p>

        <a href={project.github}
        target="_blank"
        className="text-blue-500">
            GitHub
        </a>  
        </div>
    )
}