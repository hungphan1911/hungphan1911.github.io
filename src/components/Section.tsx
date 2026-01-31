import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  id: string;
  eyebrow?: ReactNode;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  const { ref, inView } = useInView<HTMLElement>({ once: true });

  return (
    <section id={id} className={`section reveal ${inView ? "is-in" : ""}`} ref={ref}>
      <div className="container">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h2 className="h2">{title}</h2>
        <div className="sectionBody">{children}</div>
      </div>
    </section>
  );
}
