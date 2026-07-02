export default function Hero() {
    return(
        <section className="text-center py-24">
            <h1 className="text-6xl font-bold mb-4">
                Hi, I'm Yex Lawm
            </h1>
            <p className="text-xl mb-8">
                Next.js Developer
            </p>

            <div className="flex justify-center gap-4">
                <a href="/projects"
                className="px-6 py-3 bg-black text-white rounded ">
                    View Projects
                </a>

                <a href="/contact"
                className="px-6 py-3 border rounded">
                    Contact Me
                </a>
            </div>
        </section>
    )
}