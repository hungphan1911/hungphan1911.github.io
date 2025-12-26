import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import { PROJECTS } from "./data/projects";


export default function App() {
    return (
        <div className="app">
            <Navbar />

            <main className="container">
                <Section id="home" eyebrow="Hello" title="I'm Hung.">
                    <p className="lead">
                        CS & Applied Math student @ UofU
                    </p>

                    <div className="row gap">
                        <a className="btn ghost" href="#about">About me</a>
                        <a className="btn ghost" href="#projects">View projects</a>
                        <a className="btn ghost" href="#contact">Contact</a>
                    </div>
                </Section>

                <Section id="about" eyebrow="About" title="A bit about me">
                    <div className="prose">
                        <p>
                            Currently, I'm a Computer Science and Applied Mathematics student at the University of Utah. I work as a Teaching Assistant for the Kahlert School of Computing, supporting the Software Practice course. Previously, I interned at Brevium as a Software Engineer, where I worked on reactivation campaign systems for patient reactivation. I have also been a Research Assistant for the School of Dentistry and the SCI Institute. Outside of school and work, I enjoy outdoor activities, playing instruments, and do some problem solving on either math or programming.

                        </p>

                        <div className="row gap">
                            <a className="btn ghost" href="/resume.pdf" target="_blank">Resume (updated December 2025)</a>
                            {/* <a className="btn ghost" href="https://clist.by/coder/hung1911/" target="_blank">clist.by (my OJ profiles)</a> */}
                        </div>
                    </div>
                </Section>

                <Section id="projects" eyebrow="Work" title="Projects">
                    <div className="grid">
                        {PROJECTS.map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </div>
                </Section>



                <Section id="contact" eyebrow="Contact" title="Let’s talk">
                    <p className="muted">
                        Hmu w/ any fun projects. Best way to reach me is email. Also on GitHub and LinkedIn.
                    </p>

                    <div className="row gap">
                        <a className="btn" href="mailto:hungphanquocviet@gmail.com">Email</a>
                        <a
                            className="btn ghost"
                            href="https://github.com/hungphan1911/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            className="btn ghost"
                            href="https://www.linkedin.com/in/hungphanquocviet/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </Section>

                <footer className="footer">
                    <span className="muted">© {new Date().getFullYear()} Hung</span>
                </footer>
            </main>
        </div>
    );
}
