import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="section">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 className="h2">{title}</h2>
      <div className="sectionBody">{children}</div>
    </section>
  );
}
