import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../footer";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Resume</h1>
        <h2 className="resume-download">
          <Link href={"/Wesley_Tam_Resume.pdf"}>
            <em>Download Resume</em>
          </Link>
        </h2>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">
                California Polytechnic State University, San Luis Obispo (Cal
                Poly SLO)
              </h3>
              <p className="entry-info">
                Expected Graduation: June 2025 | Bachelor of Science Degree in
                Computer Science | GPA: 3.9
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <h3 className="programming-languages-title">
              Programming Languages:
            </h3>
            <ul className="programming-languages-list">
              <li>C</li>
              <li>C#</li>
              <li>Python</li>
              <li>Java</li>
              <li>Assembly</li>
            </ul>
            <h3 className="software-tools-title">Software Tools:</h3>
            <ul className="software-tools-list">
              <li>Git</li>
              <li>Unix</li>
              <li>JSON</li>
              <li>Visual Studio</li>
              <li>Jira</li>
              <li>Microsoft Office</li>
            </ul>
            <h3 className="languages-title">Languages:</h3>
            <ul className="languages-list">
              <li>English</li>
              <li>Spanish</li>
              <li>Chinese Cantonese</li>
            </ul>
          </section>
          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">
                Embedded Software Engineering Intern
              </h3>
              <p className="entry-info">
                <strong>Procept BioRobotics</strong> | Redwood City, CA | Jun
                2023 - Sep 2023
              </p>
              <ul className="entry-description">
                <li>
                  Research, design, and implement software on embedded systems
                </li>
                <li>
                  Develop unit, module, and system code to test embedded systems
                </li>
                <li>
                  Perform research/engineering studies to characterize
                  performance and function of embedded systems
                </li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title">Tutor</h3>
              <p className="entry-info">
                <strong>JEI Learning Center</strong> | Millbrae, CA | Jun 2022 -
                Sep 2022
              </p>
              <ul className="entry-description">
                <li>Head of the Summer Enrichment Program</li>
                <li>Tutor students in mathematics, English, and chess</li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title">Food Handler</h3>
              <p className="entry-info">
                <strong>Cal Poly SLO</strong> | San Luis Obispo, CA | Mar 2022 -
                Jun 2022
              </p>
              <ul className="entry-description">
                <li>Work with team to prepare over 500 meals per shift</li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title">Tutor</h3>
              <p className="entry-info">
                <strong>Kumon Learning Center</strong> | Millbrae, CA | Sep 2019
                - Sep 2021
              </p>
              <ul className="entry-description">
                <li>Tutor students in mathematics, English, and chess</li>
              </ul>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title">MNA Eyes Game</h3>
              <p className="entry-info">
                Languages & Tools Used: Python, PyGame, GraphQL API
              </p>
              <ul className="entry-description">
                <li>
                  Created a game that pixelates and slowly de-pixelates images
                  for players to guess
                </li>
                <li>
                  Able to pull images from a GraphQL API based on user imput
                </li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title">MyTAR</h3>
              <p className="entry-info">Languages & Tools Used: C, Vim</p>
              <ul className="entry-description">
                <li>
                  Created an algorithm to compress, store, and decompress files
                  and directories
                </li>
                <li>Used a checksum to ensure no data corruption</li>
              </ul>
            </div>
            <div className="entry">
              <h3 className="entry-title">MyTalk</h3>
              <p className="entry-info">Languages & Tools Used: C, Vim</p>
              <ul className="entry-description">
                <li>
                  Used sockets and ports to allow two computers to communicate
                  with each other
                </li>
                <li>Used C system calls for efficient CPU usage</li>
              </ul>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Campus Involvement</h2>
            <div className="entry">
              <h3 className="entry-title">Systems Optimization Club</h3>
              <p className="entry-info">
                Member | Cal Poly SLO, CA | Sep 2022 - Jun 2023
              </p>
              <ul className="entry-description">
                <li>
                  Worked with drone company Inspired Flight to improve data
                  analytics of support tickets
                </li>
                <li>
                  Use Python to process hundreds of tickets into an interactive
                  dashboard
                </li>
              </ul>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <ul className="course-list">
              <li>Data Structures & Algorithms</li>
              <li>Discrete Structures</li>
              <li>Intro to Databases</li>
              <li>Intro to Software Engineering</li>
              <li>Programming Languages</li>
              <li>Object-Oriented Programming & Design</li>
              <li>Computer Organization</li>
              <li>Systems Programming</li>
              <li>Computer Architecture</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
