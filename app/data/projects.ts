export interface Project {
  slug: string;
  title: string;
  summary: string;
  context: string;
  engineeringHighlights: string[];
  technologies: string[];
  githubUrl: string;
  /** Optional relative path to a dedicated case-study page (e.g. /projects/reelpass) */
  caseStudyUrl?: string;
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
    caseStudyUrl: "/projects/rota",
  },
  {
    slug: "reelpass",
    title: "ReelPass (Matinee) — Cinema Reservation & Digital Ticketing",
    summary:
      "A full-stack, concurrency-safe cinema ticket reservation and digital ticketing mobile application featuring atomic Redis Lua seat holds, PostgreSQL row locking, and Flutterwave sandbox payment reconciliation.",
    context:
      "Built for the Nigerian cinema exhibition market. Pairs an Expo React Native mobile client (tested on physical Android hardware) with an Express, PostgreSQL 16 (Neon), and Redis Cloud backend. Features interactive auditorium seat selection, 5-minute atomic seat holds, NGN integer kobo pricing, Flutterwave sandbox checkout, and scannable digital passes with QR codes.",
    engineeringHighlights: [
      "Two-tier concurrency safety: atomic fast-path Redis Lua seat holds (5-minute TTL) backed by PostgreSQL ACID row-level locking (SELECT ... FOR UPDATE)",
      "Strict relational constraints (showtime_id, seat_id) on booking_seats and tickets mathematically eliminating double-booking",
      "Monotonic ordered seat locking (ORDER BY seat_id ASC) preventing transaction deadlocks under heavy concurrent cart contention",
      "Fail-closed Flutterwave v3 sandbox payment lifecycle with timing-safe HMAC webhook verification and integer kobo financial accounting",
      "Digital pass generation with deterministic QR-code tokens (react-native-qrcode-svg) and offline pass retrieval",
      "Mobile client hardening on physical Android hardware: cold-start auth self-healing, deep-link return routing, and in-flight query locking",
      "Empirical 500-VU local load test: 40/40 seats reserved, 9,155 expected HTTP 409 conflicts, 0 double bookings, 0 server errors (582ms avg latency)",
    ],
    technologies: [
      "TypeScript",
      "React Native",
      "Expo SDK 57",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Lua Scripts",
      "Flutterwave",
      "Docker",
      "k6",
    ],
    githubUrl: "https://github.com/ScrappyAT/Reelpass",
    caseStudyUrl: "/projects/reelpass",
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
