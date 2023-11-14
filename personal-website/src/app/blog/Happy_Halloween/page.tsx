import Navbar from "../../navbar";
import Footer from "../../footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="blog-component">
          <article className="blog-entry">
            <div className="blog-entry-details">
              <h1 className="blog-title">Happy Halloween</h1>
              <h2 className="blog-date">Oct. 23 2023</h2>
            </div>
            <p className="blog-description">
              A little early, but Happy Halloween!
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
