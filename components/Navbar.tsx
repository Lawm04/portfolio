import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center p-6 shadow">
            <h1 className="font-bold text-xl">Yex Lawm</h1>

            <div className="flex gap-6">
                <link href=" /">Home</link>
                <link href="/about">About</link>
                <link href="/projects">Projects</link>
                <link href="/contact">Contact</link>
            </div>
        </nav>
    )
}