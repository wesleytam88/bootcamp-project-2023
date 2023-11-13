import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link href={"/"}>Personal Website</Link>
      </h1>
      <div className="navbar-links">
        <Link href={"/"}>Wesley Tam</Link>
        <Link href={"blog"}>Blog</Link>
        <Link href={"portfolio"}>Portfolio</Link>
        <Link href={"resume"}>Resume</Link>
        <Link href={"contact"}>Contact</Link>
      </div>
    </nav>
  );
}
