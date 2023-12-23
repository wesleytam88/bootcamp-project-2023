"use client";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    const params = { from_name: name, email_id: email, message: message };
    event.preventDefault();
    emailjs
      .send("service_z5e8u4f", "template_cg2bbfg", params, "RRieH25eLlbnPj6kP")
      .then(
        (res) => {
          alert("Success! " + res.status);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          alert("Failed to send." + err.status);
        }
      );
  }

  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Contact</h1>
        <form id="contact-form" onSubmit={sendEmail}>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <br></br>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <br></br>
          <label>Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <br></br>
          <input type="submit"></input>
        </form>
      </main>
      <Footer />
    </>
  );
}
