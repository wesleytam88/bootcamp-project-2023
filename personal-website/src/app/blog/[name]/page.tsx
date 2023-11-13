import Navbar from "../../navbar";
import Footer from "../../footer";

export default function BlogComponent() {
  <>
    <Navbar />
    <main>
      <div className="blog-component">
        <article className="blog-entry">
          <div className="blog-entry-details">
            <h1 className="blog-title">First Blog</h1>
            <h2 className="blog-date">Oct. 23 2023</h2>
          </div>
          <p className="blog-description">
            First blog entry! Super excited to have finished my own personal
            website, huge thanks to Cal Poly's Hack4Impact Starter Pack for
            helping me make this wesbite. Hopefully this website will be a
            living document and will receive new updates in the future!
          </p>
        </article>
      </div>
    </main>
    <Footer />
  </>;
}
