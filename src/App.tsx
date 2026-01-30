import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import { PROJECTS } from "./data/projects";
import About from "./components/About";
import ExperienceRow from "./components/ExperienceRow";
import { EXPERIENCE } from "./data/experience";

export default function App() {

    return (
        <div className="app">
            <Navbar />

            <main className="container">
                <Section id="home" eyebrow="Hello World!" title="I'm Hung">
                    <p className="lead">
                        CS & Applied Math @ University of Utah 
                    </p>
                </Section>

                <Section id="about" eyebrow="About" title="A bit about me">
                    <About />
                </Section>

                <Section id="experience" eyebrow="Work" title="My Work Experience">
                    <div className="experience-list">
                        {EXPERIENCE.map(e => (
                            <ExperienceRow
                                key={`${e.company}-${e.role}-${e.start}`}
                                exp={e}
                            />
                        ))}
                    </div>
                </Section>
                <Section id="projects" eyebrow="Projects" title="My personal projects">
                    <div className="grid">
                        {PROJECTS.map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </div>
                </Section>


                <Section id="contact" eyebrow="Contact" title="Let's talk!">
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
            </main>
        </div>
    );
}
