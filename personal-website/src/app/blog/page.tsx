import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";
import BlogComponent from "@/components/blog";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function BlogPage() {
  async function getBlogs() {
    await connectDB();

    try {
      // query for all blogs and sort by date
      const blogs = await Blog.find().sort({ date: -1 }).orFail();
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
        <h1 className="page-title">Blog</h1>
        <div className="blog-component">
          {getBlogs().then(
            (blogs) =>
              blogs &&
              blogs.map((blog) => (
                <BlogComponent
                  title={blog.title}
                  date={blog.date.toUTCString()}
                  description={blog.description}
                  slug={blog.slug}
                ></BlogComponent>
              ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
