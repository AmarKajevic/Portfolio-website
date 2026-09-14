export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string[];
  highlight?: { value: string; label: string };
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "IN4NOVA L.L.C",
    period: "Dec 2022 – Nov 2025",
    summary: [
      "Designed backend services and distributed application architecture with Node.js (Express/NestJS) and Python FastAPI.",
      "Built React + TypeScript frontends, translating Figma designs into pixel-accurate, responsive UIs with TailwindCSS.",
      "Implemented event-driven workflows with Kafka and RabbitMQ, and secured APIs with JWT, OAuth2, and Google auth.",
      "Ran Docker containers and CI/CD pipelines on AWS EC2 and Lambda, and integrated payment providers and enterprise third-party APIs.",
    ],
    highlight: { value: "~40%", label: "faster API responses after introducing Redis caching" },
  },
  {
    role: "Software Engineer",
    company: "Diligent D.O.O",
    period: "Dec 2021 – Nov 2022",
    summary: [
      "Developed React frontends for enterprise platforms with reusable, maintainable component architecture.",
      "Built backend services and REST APIs with Python/FastAPI supporting enterprise workflows.",
      "Designed and optimized complex SQL stored procedures, reducing data-access latency.",
      "Implemented JWT/OAuth2 authentication and resolved performance bottlenecks across frontend, backend, and database layers.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Softcave Solutions",
    period: "Feb 2021 – Oct 2021",
    summary: [
      "Built and deployed e-commerce platforms with different business requirements, layouts, and visual designs.",
      "Developed responsive React and Angular frontends with pixel-perfect Figma-to-code implementation.",
      "Integrated frontend applications with backend APIs, authentication flows, and payment services.",
    ],
    highlight: { value: "15+", label: "e-commerce platforms shipped" },
  },
  {
    role: "Full Stack Developer",
    company: "Ipsilon",
    period: "Mar 2020 – Jan 2021",
    summary: [
      "Designed and built a full-stack B2C e-commerce platform using .NET Core, Angular, and MySQL.",
      "Implemented JWT authentication, Google OAuth, role-based access control, and admin tooling for catalog, inventory, and orders.",
      "Built REST APIs for product catalog, inventory, and order workflows.",
    ],
    highlight: { value: "10k+", label: "supplier records/hour via a Kafka ingestion pipeline" },
  },
];

export const education = {
  school: "University of Belgrade — Faculty of Economics",
  note: "Final-year undergraduate, studied alongside 5+ years of professional engineering work.",
};
