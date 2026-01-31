import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(opts?: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (opts?.once !== false) observer.disconnect();
                } else if (opts?.once === false) {
                    setInView(false);
                }
            },
            {
                threshold: opts?.threshold ?? 0.12,
                rootMargin: opts?.rootMargin ?? "0px 0px -10% 0px",
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [opts?.threshold, opts?.rootMargin, opts?.once]);

    return { ref, inView };
}
