import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "./footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Wesley Tam</h1>
        <div className="about">
          <div className="about-image">
            <Image
              src={"/WesleyTam.jfif"}
              width={411}
              height={500}
              alt="Image of myself"
            ></Image>
          </div>
          <div className="about-text">
            <p>
              My name is <strong>Wesley Tam</strong> and I am currently a
              student at <strong>Cal Poly SLO</strong> studying
              <strong> Computer Science</strong>! I love hanging out with
              friends, working out at the gym, and playing video games.
            </p>
            <p>
              Welcome to my personal website! If you have any <em>questions</em>
              ,<em>comments</em>, or <em>suggestions</em>, please let me know!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
