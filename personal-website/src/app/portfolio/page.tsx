import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";
import ProjectComponent from "@/components/project";
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

  async function getProjects() {
    await connectDB();

    try {
      // query for all blogs and sort by date
      const blogs = await Project.find().sort({ date: -1 }).orFail();
      // send a response as the blogs as the message
      return blogs;
    } catch (err) {
      return null;
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Portfolio</h1>
        
        {getProjects().then(
          (projects) =>
            projects &&
            projects.map((project) => (
              <ProjectComponent
                name={project.name}
                description={project.description}
                image={project.image}
                image_alt={project.image_alt}
                link={project.link}
              ></ProjectComponent>
            ))
        )}
      </main>
      <Footer />
    </>
  );
}
