import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow">
      <h1 className="font-bold text-xl">Yex Lawm</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>

        <Link href="/about">About</Link>

        <Link href="/projects">Projects</Link>

        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
