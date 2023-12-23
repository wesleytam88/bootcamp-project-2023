import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";
import AddCommentComponent from "@/components/createComment";
import parseTime from "@/helpers/parseTime";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Props = {
  params: {
    title: string;
  };
};

async function getBlog(url: string) {
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (res.ok) {
    return res.json();
  }
  return null;
}

export default async function Page({ params: { title } }: Props) {
  const url = `http://localhost:3000/api/db/blog/${title}`;
  const blog = await getBlog(url);

  if (blog) {
    return (
      <>
        <Navbar />
        <main>
          <div className="blog-component">
            <article className="blog-entry">
              <div className="blog-entry-details">
                <h1 className="blog-title">{blog.title.replace("_", " ")}</h1>
                <h2 className="blog-date">{parseTime(new Date(blog.date))}</h2>
              </div>
              <p className="blog-description">{blog.content}</p>
            </article>
            <AddCommentComponent slug={url} type="blog"></AddCommentComponent>
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
      <div className="blog-not-found">
        <h1 className="blog-not-found-text">Blog not found</h1>
      </div>
    );
  }
}
