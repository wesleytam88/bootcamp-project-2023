import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Props = {
  params: {
    title: string;
  };
};

async function getBlog(title: string) {
  const res = await fetch("http://localhost:3000/api/db/blog/" + title, {
    cache: "no-store",
  });
  if (res.ok) {
    return res.json();
  }
  return null;
}

export default async function Page({ params: { title } }: Props) {
  const blog = await getBlog(title);

  if (blog) {
    return (
      <>
        <Navbar />
        <main>
          <div className="blog-component">
            <article className="blog-entry">
              <div className="blog-entry-details">
                <h1 className="blog-title">{blog.title.replace("_", " ")}</h1>
                <h2 className="blog-date">{blog.date}</h2>
              </div>
              <p className="blog-description">{blog.content}</p>
            </article>
            <div className="comment">
              {blog.comments.map((comment: IComment, index: number) => (
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
      <div>
        <h1>Blog not found</h1>
      </div>
    );
  }
}
