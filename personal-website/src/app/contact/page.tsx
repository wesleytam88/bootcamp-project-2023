import Navbar from "../../components/navbar";
import Footer from "../footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Contact</h1>
        <form id="contact-form">
          <label>Name:</label>
          <input type="text" id="name" required></input>
          <br></br>
          <label>Email:</label>
          <input type="text" id="email" required></input>
          <br></br>
          <label>Message:</label>
          <textarea id="message" required></textarea>
          <br></br>
          <input type="submit"></input>
        </form>
      </main>
      <Footer />
    </>
  );
}
