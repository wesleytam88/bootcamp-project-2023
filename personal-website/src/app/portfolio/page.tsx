import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";
import ProjectComponent from "@/components/project";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

type Project = {
  name: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
};

async function getProjects() {
  await connectDB();

  try {
    // query for all blogs and sort by date
    const projects = await Project.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();
  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Portfolio</h1>

        {projects &&
          projects.map((project, index) => (
            <ProjectComponent
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              image_alt={project.image_alt}
              link={project.link}
            ></ProjectComponent>
          ))}
      </main>
      <Footer />
    </>
  );
}
