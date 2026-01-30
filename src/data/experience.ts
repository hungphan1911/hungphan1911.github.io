export type Experience = {
    company: string;
    role: string;
    location?: string;
    start: string;
    end: string;
    link?: string;
    tags?: string[];
    highlights: string[];
};

export const EXPERIENCE: Experience[] = [
    {
        company: "Brevium Corporation",
        role: "Software Engineer Intern",
        location: "American Fork, UT",
        start: "May 2025",
        end: "Aug 2025",
        tags: ["Backend", "C#", "Blazor", "Tailwind", "SQL Server"],
        highlights: [
            "Developed and deployed two production features for Brevium's Campaign system, improving patient outreach workflows and reducing operational costs for medical practices by an estimated 15-20% per campaign.",
            "Designed and implemented a text classification pipeline using KNN with Python and SQL, streamlining data integration workflows and reducing manual processing effort by approximately 85%.",
            "Led two internal engineering training sessions on campaign logic and testing best practices, improving code quality, onboarding efficiency, and shared team understanding of the system.",
        ],
    },
    {
        company: "KSoC, University of Utah",
        role: "Computer Science Teaching Assistant",
        location: "Salt Lake City, UT",
        start: "Aug 2023",
        end: "Present",
        tags: ["Software Practice", "Algorithms", "Testing", "Mentorship"],
        highlights: [
            "Lead Teaching Assistant for Software Practice I (Fall 24, Spring 25, Spring 26), Teaching Assistant for Data Structures & Algorithms (Spring 24, Summer 24, Fall 25)",
            "Built and maintained automated grading pipelines, cutting manual grading effort by 50%+ and enabling faster, more consistent feedback for students.",
            "Led regular help hours and partnered with course staff to refine grading rubrics and tooling, improving student performance, code quality, and overall assignment reliability.",
        ],
    },
    {
        company: "School of Dentistry, University of Utah",
        role: "Data Science Research Assistant",
        location: "Salt Lake City, UT",
        start: "May 2024",
        end: "Aug 2024",
        tags: ["Data Science", "Python"],
        highlights: [
            "Built end-to-end data preprocessing and visualization pipelines to enable scalable analysis of large epidemiological datasets.",
            "Implemented statistical and computational models in Python (NumPy, pandas, SciPy) to analyze pathogen spread, outbreak behavior, and simulation results.",
            "Leveraged high-performance computing resources to run large-scale simulations and produce validated figures and quantitative results for peer-reviewed manuscripts.",
        ],
    },
    {
        company: "SCI Institute, University of Utah",
        role: "Research Assistant",
        location: "Salt Lake City, UT",
        start: "Jan 2024",
        end: "May 2024",
        tags: ["JavaScript", "Data Structures", "Graph"],
        highlights: [
            "Developed a Visual Studio Code extension tool for seamless integration and manipulation of graph data structures.",
            "Implemented a robust feature set for exporting graph data structures to DOT language formats.",
        ],
    },
];
