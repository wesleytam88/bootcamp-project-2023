import Link from "next/link";

type BlogProps = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const BlogComponent: React.FC<BlogProps> = ({
  title,
  date,
  description,
  slug,
}) => (
  <a href={slug}>
    <article className="blog-entry">
      <div className="blog-entry-details">
        <h2 className="blog-title">
          {title}
        </h2>
        <h2 className="blog-date">{date}</h2>
      </div>
      <p className="blog-description">{description}</p>
    </article>
  </a>
);

export default BlogComponent;
