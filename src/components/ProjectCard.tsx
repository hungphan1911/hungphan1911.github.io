export type ProjectLinks = {
  github?: string | null;
  demo?: string | null;
};

export type Project = {
  title: string;
  description: string;
  tags?: string[];
  date?: string;
  links?: ProjectLinks;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { title, description, tags, links, date } = project;

  return (
    <article className="card">
      <div className="cardTop">
        <div className="cardHeader">
          <h3 className="h3">{title}</h3>
          {date ? <span className="projectDate">{date}</span> : null}
        </div>

        <p className="muted">{description}</p>
      </div>

      {tags?.length ? (
        <div className="tagRow">
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      ) : null}

      <div className="row gap">
        {links?.github && (
          <a className="btn ghost small" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {links?.demo && (
          <a className="btn small" href={links.demo} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </article>
  );
}

