import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";
import BlogComponent from "@/components/blog";
import parseTime from "@/helpers/parseTime";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

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

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Blog</h1>
        <div className="blog-component">
          {blogs &&
            blogs.map((blog) => (
              <BlogComponent
                title={blog.title}
                date={parseTime(new Date(blog.date))}
                description={blog.description}
                slug={blog.slug}
              ></BlogComponent>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
