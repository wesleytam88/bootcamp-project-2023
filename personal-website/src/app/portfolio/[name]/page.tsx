import Comment from "@/components/comment";
import { IComment } from "@/database/projectSchema";
import AddCommentComponent from "@/components/createComment";
import ProjectComponent from "@/components/project";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Props = {
  params: {
    name: string;
  };
};

async function getProject(url: string) {
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (res.ok) {
    return res.json();
  }
  return null;
}

export default async function Page({ params: { name } }: Props) {
  const url = `http://localhost:3000/api/db/portfolio/${name}`;
  const project = await getProject(url);

  if (project) {
    return (
      <>
        <Navbar />
        <main>
          <div className="project-component">
            <ProjectComponent
              name={project.name}
              description={project.description}
              image={project.image}
              image_alt={project.image_alt}
              link={project.link}
            ></ProjectComponent>
            <AddCommentComponent
              slug={name}
              type="portfolio"
            ></AddCommentComponent>
            <div className="comment">
              {project.comments.map((comment: IComment, index: number) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <div className="project-not-found">
        <h1 className="project-not-found-text">Project not found</h1>
      </div>
    );
  }
}
