import Link from "next/link";

type BlogProps = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const Blog: React.FC<BlogProps> = ({ title, date, description, slug }) => (
  <article className="blog-entry">
    <div className="blog-entry-details">
      <Link href={slug} className="blog-title">
        {title}
      </Link>
      <h2 className="blog-date">{date}</h2>
    </div>
    <p className="blog-description">{description}</p>
  </article>
);

export default Blog;