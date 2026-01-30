export default function About() {
    return (
        <div className="about-layout">
            {/* Profile image */}
            <div className="about-image">
                <img
                    src="/profile.jpeg"
                    alt="Hung Phan"
                />
            </div>
            <div className="about-content prose">
                <p>
                    Hi, my name is Hung! This is my personal website. Here you'll find a curated
                    snapshot of what I've been up to, including my work and personal projects.
                    (Last updated: Feb 2026)
                </p>

                <p>
                    I'm a senior undergraduate double majoring in Computer Science and Applied Math
                    at the University of Utah. I enjoy tackling problems and automating tasks through code, 
                    and I love seeing the systems and workflows I've built run automatically behind the scenes. 
                    My main interests are backend systems and algorithms.
                </p>

                <p>
                    Outside of school and work, I enjoy outdoor activities like hiking, exploring the
                    city, and playing instruments.
                </p>

                <div className="row gap">
                    <a
                        className="btn ghost"
                        href="/resume.pdf"
                        target="_blank"
                    >
                        Resume (updated December 2025)
                    </a>
                </div>
            </div>
        </div>
    );
}
