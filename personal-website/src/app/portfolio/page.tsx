import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";

export default function PortfolioPage() {
  type Project = {
    name: string;
    description: string;
    image: string;
    image_alt: string;
    link: string;
  };

  const projects: Project[] = [
    {
      name: "Personal Website",
      description:
        "A personal website to highlight my interests, skills, and general information. Tools such as HTML, CSS, and Git were used in the making of the website.",
      image: "/Portfolio_Personal_Website.PNG",
      image_alt: "Image of my personal website",
      link: "/",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Portfolio</h1>

        {projects.map((project) => (
          <div className="project">
            <Link href={project.link}>
              <Image
                className="project-image"
                src={project.image}
                alt={project.image_alt}
                width={500}
                height={491}
              ></Image>
            </Link>
            <div className="project-details">
              <p className="project-name">
                <strong>{project.name}</strong>
              </p>
              <p className="project-description">{project.description}</p>
              <Link href={project.link}>LEARN MORE</Link>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
