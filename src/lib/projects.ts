export type ProjectAccent = "emerald" | "violet" | "sky";

export type Project = {
  slug: string;
  index: string;
  type: string;
  year: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  highlightLabel: string;
  stack: string[];
  accent: ProjectAccent;
  repo: string;
  live: string | null;
  overview: string[];
  features: { title: string; description: string }[];
  stackGroups: { group: string; items: string[] }[];
  architecture: string[];
};

export const projects: Project[] = [
  {
    slug: "vendora",
    index: "01",
    type: "MARKETPLACE",
    year: "2026",
    title: "Vendora",
    tagline: "A multi-vendor marketplace with three portals and an event-driven backend.",
    description:
      "A multi-vendor marketplace with three portals (buyer, seller, admin), an API gateway, and domain services inside an Nx monorepo. Kafka processes events, Redis holds real-time state, and TensorFlow.js powers product recommendations.",
    highlight: "10 backend services",
    highlightLabel: "event-driven architecture",
    stack: ["Next.js", "Node.js", "Kafka", "Redis", "Stripe", "Docker"],
    accent: "violet",
    repo: "https://github.com/AmarKajevic/Vendora-Multi-vendor-ecommerce-platform",
    live: null,
    overview: [
      "Vendora is a full-stack multi-vendor marketplace that models the real workflows of an online marketplace, not a simple CRUD store.",
      "The platform has three separate portals: a buyer portal (browsing, cart, wishlist, checkout, orders, seller messaging, and recommendations), a seller portal (store management, product and media creation), and an admin portal (user and seller management, platform configuration).",
      "Behind the portals sit ten backend services coordinated through an API gateway: asynchronous processing through Kafka, real-time state in Redis, MongoDB via Prisma, Stripe payments with automated seller onboarding, TensorFlow.js-driven recommendations, and a containerized deployment where GitHub Actions publishes Docker images that Docker Compose runs in production.",
    ],
    features: [
      {
        title: "Three portals",
        description: "Buyer, seller, and admin as independent Next.js 16 applications inside an Nx monorepo.",
      },
      {
        title: "API gateway",
        description: "NGINX as the entry point and a Node.js gateway that centralizes routing and middleware for every domain service.",
      },
      {
        title: "Event-driven processing",
        description: "Kafka moves product views, cart actions, analytics, and logging off the request path.",
      },
      {
        title: "Product recommendations",
        description: "A TensorFlow.js service that learns from views, cart activity, and wishlists to suggest products.",
      },
      {
        title: "Payments",
        description: "Stripe handles buyer checkout plus seller onboarding with automatic platform fee calculation.",
      },
      {
        title: "CI/CD",
        description: "GitHub Actions builds and publishes Docker images; the production stack runs them via Docker Compose.",
      },
    ],
    stackGroups: [
      { group: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Zustand", "TailwindCSS"] },
      { group: "Backend", items: ["Node.js 24", "Express", "API Gateway", "NGINX"] },
      { group: "Data & messaging", items: ["MongoDB", "Prisma", "Redis", "Apache Kafka"] },
      { group: "Other", items: ["Nx + pnpm monorepo", "Stripe", "ImageKit", "TensorFlow.js", "Docker", "GitHub Actions"] },
    ],
    architecture: [
      "Three Next.js 16 portals (buyer, seller, admin) sit behind an NGINX reverse proxy, with every request entering through one Node.js API gateway.",
      "The gateway fans out to nine domain services — Auth (JWT + OTP), Products, Seller, Orders, Admin, Chat, Recommendation, Logger, and a Kafka service — ten backend services in total.",
      "Non-blocking work (product views, cart actions, analytics, logging) flows through Kafka, decoupling it from user-facing requests.",
      "WebSocket delivery runs independently of persistence: Redis tracks presence and unseen-message counts in real time, while Kafka buffers chat messages for batched writes to MongoDB.",
    ],
  },
  {
    slug: "chatty",
    index: "02",
    type: "REAL-TIME",
    year: "2026",
    title: "Chatty",
    tagline: "Real-time messaging with Connect codes, presence, and a built-in AI assistant.",
    description:
      "A real-time communication platform: pairing through unique Connect codes, user presence, read receipts, and a built-in AI assistant. Redis tracks multiple active sessions per user.",
    highlight: "Socket.IO",
    highlightLabel: "real-time messaging",
    stack: ["React", "TypeScript", "Node.js", "Socket.IO", "Redis", "MongoDB"],
    accent: "emerald",
    repo: "https://github.com/AmarKajevic/Chat-app-socket.io-",
    live: "https://chatty-ai-app.onrender.com/",
    overview: [
      "Chatty is a real-time communication platform built with React, Node.js, Socket.IO, Redis, and Google AI.",
      "Users pair up through unique Connect codes, chat in real time, see who's online, get instant notifications, and can talk to a built-in AI assistant.",
      "Authentication runs on JWTs in HTTP-only cookies, and the whole application ships as a containerized Docker Compose setup.",
    ],
    features: [
      { title: "Real-time messaging", description: "Instant communication over Socket.IO channels." },
      { title: "Connect codes", description: "Pair with another user through a unique, shareable code." },
      { title: "Friend system", description: "Send, accept, and manage connection requests." },
      { title: "Presence and notifications", description: "Online/offline status and instant activity notifications." },
      { title: "Read receipts and typing indicators", description: "Live message status and typing indicators." },
      { title: "AI assistant", description: "A conversational assistant powered by a Google AI model." },
    ],
    stackGroups: [
      { group: "Frontend", items: ["React", "TypeScript", "Socket.IO Client"] },
      { group: "Backend", items: ["Node.js", "Express", "Socket.IO"] },
      { group: "Data", items: ["MongoDB", "Mongoose", "Redis"] },
      { group: "Other", items: ["JWT", "HTTP-only cookies", "Google AI", "Docker"] },
    ],
    architecture: [
      "The React client talks to the backend over REST calls and a Socket.IO connection.",
      "Redis stores active sessions under a user:{userId}:sessions key as a set of socket IDs.",
      "A single user can have multiple active sessions — several tabs or devices — instead of a plain online: true/false flag.",
      "MongoDB stores users, messages, and connections, while the AI assistant runs as a separate conversation thread.",
    ],
  },
  {
    slug: "docai",
    index: "03",
    type: "AI / SAAS",
    year: "2026",
    title: "DocAI",
    tagline: "A multi-tenant document analysis SaaS with strict organization-level isolation.",
    description:
      "A multi-tenant document analysis application: file uploads, processing through the Google Gemini model, and strictly separated data per organization, with Clerk authentication and a Prisma layer over PostgreSQL.",
    highlight: "Multi-tenant",
    highlightLabel: "data isolation",
    stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Google Gemini"],
    accent: "sky",
    repo: "https://github.com/AmarKajevic/Multi-Tenant-AI-Document-Analysis",
    live: "https://multi-tenat-ai-saas.vercel.app/",
    overview: [
      "DocAI is a multi-tenant SaaS where every organization is an isolated workspace with its own members, documents, and usage quota.",
      "Membership and roles live in Clerk and are mirrored into PostgreSQL through a webhook — every API route authorizes against that mirror, never against whatever the client sends.",
      "Documents are analyzed through Google Gemini: summarization, question answering, sentiment, entity recognition, and structured data extraction.",
    ],
    features: [
      {
        title: "Identity is never taken from the client",
        description: "Membership is checked server-side against the Clerk Backend API, never against the request body.",
      },
      {
        title: "Roles enforced on the server",
        description: "Deleting another member's document requires the owner role, verified inside the API route itself.",
      },
      {
        title: "Files are never publicly exposed",
        description: "Downloads go through an authenticated proxy that re-checks organization membership.",
      },
      {
        title: "Clerk ⇄ Postgres sync",
        description: "A signature-verified webhook keeps organizations, memberships, and users in sync.",
      },
      {
        title: "Usage quotas",
        description: "Monthly document and analysis limits per organization, enforced in the API routes.",
      },
      {
        title: "Multi-format documents",
        description: "Plain text, PDF, Word, and Markdown files all run through the same Gemini analysis pipeline.",
      },
    ],
    stackGroups: [
      { group: "Framework", items: ["Next.js 16", "App Router", "Turbopack", "TypeScript", "Tailwind CSS"] },
      { group: "Auth & data", items: ["Clerk", "PostgreSQL", "Prisma", "Vercel Blob"] },
      { group: "AI", items: ["Google Gemini", "@google/genai"] },
      { group: "Quality", items: ["Vitest", "Playwright", "GitHub Actions", "Vercel"] },
    ],
    architecture: [
      "Users sign in through Clerk and work within a selected organization.",
      "The Next.js app stores files in a private Vercel Blob store and writes metadata to PostgreSQL through Prisma.",
      "Analysis requests go to the Google Gemini model, and the result is tied to both the document and the organization.",
      "A Clerk webhook forwards organization and membership events into the database, which is the source of truth for authorization.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
