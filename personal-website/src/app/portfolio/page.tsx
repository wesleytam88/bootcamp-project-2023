import Project from "../../components/project";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

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
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            image_alt={project.image_alt}
            link={project.link}
          ></Project>
        ))}
      </main>
      <Footer />
    </>
  );
}
