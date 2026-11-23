export interface Project {
  slug: string;
  title: string;
  summary: string;
  context: string;
  engineeringHighlights: string[];
  technologies: string[];
  githubUrl: string;
  /** Optional path to a preview image (relative to /public). Rendered above card content when provided. */
  previewImage?: string;
  previewImageAlt?: string;
}

export const projects: Project[] = [
  {
    slug: "rota",
    title: "Rota — Team Shift Scheduling & Financial Integrity",
    summary:
      "A production-grade, multi-tenant mobile shift scheduling app with atomic shift swaps, keyset cursor-paginated activity feeds, append-only financial ledger, and supervised background worker daemon.",
    context:
      "Designed for shift-based businesses (clinics, restaurants, retail). Pairs an Expo / React Native mobile app with an Express, PostgreSQL 15, and Redis 7 backend deployed to Railway in a supervised single container running both API and BullMQ worker. Features versioned USD subscriptions ($20 Starter with 5 seats) via Flutterwave, separate-floor proration, and payment idempotency.",
    engineeringHighlights: [
      "Multi-tenant role-based isolation (Owner, Manager, Staff) with primary membership verification",
      "Atomic shift-swap state machine with row-level locking to eliminate double-assignment races",
      "Deterministic (created_at, id) keyset cursor pagination with sub-millisecond walks over 10k+ rows",
      "Append-only financial ledger (financial_ledger) with separate-floor proration and client UUID idempotency",
      "Transactional PostgreSQL outbox (job_outbox) with BullMQ Redis background worker",
      "Single-container process supervisor (combined-server.ts) with graceful shutdown on Railway",
      "Empirical 200-VU k6 load benchmark (-49.9% p50 latency, +74.9% throughput, 0% error rate)",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "React Native",
      "Expo SDK 57",
      "Flutterwave",
      "Docker",
    ],
    githubUrl: "https://github.com/ScrappyAT/rota",
  },
  {
    slug: "subslice",
    title: "Subslice — Subscription & Billing System",
    summary:
      "A full-stack subscription and billing system covering payments, plan upgrades and downgrades, proration, cancellation, and payment lifecycle handling.",
    context:
      "Implements the full subscription lifecycle: payment processing via Flutterwave, plan upgrades and downgrades with proration, webhook verification with idempotent event handling, append-only payment event history, and cancellation at period end.",
    engineeringHighlights: [
      "Append-only payment event history for auditability",
      "Webhook verification and idempotent event processing",
      "Plan upgrade/downgrade logic with proration",
      "Cancellation at period end rather than immediate termination",
      "Subscription state management across the payment lifecycle",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Flutterwave",
      "Payment Webhooks",
      "Idempotency",
    ],
    githubUrl: "https://github.com/ScrappyAT/subslice",
  },
  {
    slug: "reviewslice",
    title: "ReviewSlice — AI Review Analysis",
    summary:
      "An AI-powered customer review analysis system that processes uploaded customer feedback and returns structured insights including sentiment, ratings, themes, complaints, and supporting quotes.",
    context:
      "Accepts uploaded unstructured customer reviews, processes them asynchronously via background jobs, and returns validated structured output (sentiment, ratings, themes, complaints, and quotes) using DeepSeek integration with schema-level validation.",
    engineeringHighlights: [
      "Structured output validation against a defined schema",
      "Asynchronous processing via background jobs",
      "DeepSeek integration for AI-generated analysis",
      "Provider abstraction for AI service integration",
      "Conversion of unstructured review text into structured, schema-validated data",
    ],
    technologies: [
      "TypeScript",
      "AI Integration",
      "DeepSeek",
      "Background Jobs",
      "Structured Output Validation",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/ScrappyAT/reviewslice",
  },
  {
    slug: "property-listings-api",
    title: "Property Listings API",
    summary:
      "A REST API for managing Nigerian property listings, agents, images, and inquiries.",
    context:
      "Designs a REST API and relational PostgreSQL schema modelling listings, agents, images, and inquiries. Includes filtering and pagination for data access, input validation at the API boundary, seeded development data, and separation of application logic from database concerns.",
    engineeringHighlights: [
      "Relational data modelling across listings, agents, images, and inquiries",
      "Filtering and pagination for data access",
      "Input validation at the API boundary",
      "Seeded development data for consistent local development",
      "Separation of application and database concerns",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "Validation",
    ],
    githubUrl: "https://github.com/ScrappyAT/property-listings-api",
    previewImage: "/project/property-listings-api.jpeg",
    previewImageAlt: "Property Listings API consumer application showing property listings and filters",
  },
];
