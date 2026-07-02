import { skills } from "@/data/skills";

export default function Skills(){
    return(
        <section className="max-w-5xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>

            <div className="flex flex-wrap gap-4">
                {skills.map((skill) =>(
                    <span className="border px-4 py-2 rounded">
                        {skill}
                    </span>
                )
                )}
            </div>
        </section>
    )
}