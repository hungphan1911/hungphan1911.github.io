import type { Experience } from "../data/experience";

export default function ExperienceRow({ exp }: { exp: Experience }) {
  return (
    <div className="experience-row">
      {/* Header */}
      <div className="experience-header">
        <div className="experience-left">
          <div className="experience-title">
            {exp.role} <span className="muted">@</span> {exp.company}
          </div>

          {exp.location && (
            <div className="experience-location">
              {exp.location}
            </div>
          )}
        </div>

        <div className="experience-date">
          {exp.start} — {exp.end}
        </div>
      </div>


      {/* Tags */}
      {exp.tags?.length && (
        <div className="tagRow">
          {exp.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}

      {/* Bullets */}
      <ul className="bullets">
        {exp.highlights.map(h => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
