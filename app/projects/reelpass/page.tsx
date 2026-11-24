import Link from "next/link";
import { Navigation } from "@/app/components/navigation";
import { Footer } from "@/app/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReelPass Case Study — Samuel Emmanuel",
  description:
    "Full-stack cinema reservation and digital ticketing mobile application with concurrency-safe seat allocation, Redis Lua holds, and Flutterwave payments.",
};

export default function ReelPassCaseStudyPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Portfolio
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Case Study · Engineering &amp; Architecture
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              ReelPass (Matinee) — Cinema Ticket Reservation Platform with Concurrency-Safe Seat Allocation
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              A full-stack mobile cinema reservation platform built for the Nigerian market, pairing
              an Expo/React Native client with an Express, PostgreSQL, and Redis backend to eliminate
              double-booking races under heavy traffic contention.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/ScrappyAT/Reelpass"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                View Repository
              </a>
              <a
                href="https://drive.google.com/file/d/1QA6IZhR8Ic2HOKR-vXoVW-sP6RIQ6ep1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Demo Video
              </a>
              <a
                href="https://expo.dev/accounts/scrappy4rl/projects/reelpass/builds/d5df0b9c-4f0e-4c5f-a8b5-a9612ff3ae1c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Android EAS Build
              </a>
              <a
                href="https://www.figma.com/design/Gh0kzUtGs4547W19iH4WVa/Dev-and-Design-Bootcamp-Learning-Phase"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Figma Designs
              </a>
              <a
                href="https://github.com/ScrappyAT/Reelpass/blob/main/SUBMISSION.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Submission Document
              </a>
              <a
                href="https://lnkd.in/p/euVj5q72"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                LinkedIn Post
              </a>
            </div>
          </header>

          {/* Content sections */}
          <article className="prose prose-zinc dark:prose-invert max-w-none space-y-12">
            {/* 1. Project Overview */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                1. Project Overview — ReelPass (Matinee)
              </h2>
              <blockquote className="mt-3 border-l-2 border-zinc-400 pl-4 italic text-zinc-600 dark:text-zinc-400">
                &ldquo;Your seat. Your story.&rdquo;
              </blockquote>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                ReelPass (internally developed under the project name Matinee) is a production-oriented cinema ticket
                reservation and digital ticketing platform designed for the Nigerian cinema exhibition market.
                Engineered as a TypeScript monorepo, the system pairs an Expo / React Native mobile client
                with a Node.js/Express REST API, PostgreSQL for relational persistence, Redis for microsecond-level
                atomic seat holds, and Flutterwave Standard Checkout for online payment handling in Nigerian Naira (₦ / NGN).
              </p>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                The application covers the full end-to-end customer journey: browsing films and showtimes across Nigerian
                multiplexes (Lagos, Abuja, Port Harcourt, Ibadan), selecting auditorium seats on an interactive tier-aware
                grid, locking contested seats in real time with automated expiration, completing sandbox mobile payments, and
                retrieving scannable digital passes with QR codes.
              </p>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/30">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  <strong>Notice on Demonstration Scope:</strong> Cinema locations, auditoriums, showtimes, seat maps,
                  and pricing are demonstration fixtures created for product evaluation. All financial transactions are
                  conducted via Flutterwave Sandbox in test mode; no real currency or debit accounts are debited.
                </p>
              </div>
            </section>

            {/* 2. Product Problem & Design Goals */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                2. Product Problem and Design Goals
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                In major Nigerian urban centers such as Lagos and Abuja, cinema ticket booking during blockbuster
                opening weekends (such as major Nollywood or Hollywood premieres) encounters severe seat contention.
                Moviegoers face two distinct friction points:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
                <li>
                  <strong>Double-Booking &amp; Phantom Allocation:</strong> Naive booking architectures that check seat
                  availability and write confirmations in separate non-atomic queries create critical race windows.
                  Under heavy concurrent checkout traffic, multiple customers are charged for the exact same seat.
                </li>
                <li>
                  <strong>Unreliable Mobile Networks &amp; Friction:</strong> Mobile users on fluctuating cellular
                  connections risk session drops midway through payment. Stalled checkouts can tie up auditorium
                  inventory indefinitely, while broken redirect flows leave customers confused about ticket status.
                </li>
              </ul>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To solve these operational challenges, ReelPass established four core design and technical goals:
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">Strict Zero Double-Booking</h4>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Enforce two-tier concurrency barriers combining microsecond-level atomic Redis holds with ACID row-level
                    locks and relational unique constraints in PostgreSQL.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">Mobile-First Nigerian UX</h4>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Provide a cinema-native dark-mode aesthetic with gold accents, intuitive seat map gestures, and
                    localized currency representation in integer kobo.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">Fail-Closed Payment Integrity</h4>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Never confirm bookings or issue tickets on optimistic client signals. Require server-to-server gateway
                    verification, amount matching, and constant-time HMAC webhook validation.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">Resilient Mobile Architecture</h4>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Guard against physical hardware latency with cold-start authentication retries, in-flight query locking,
                    and in-app digital pass rendering with scannable QR codes.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Mobile Application & UX */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                3. Mobile Application and User Experience
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                The mobile client is built with React Native 0.86 and Expo SDK 57, structured using Expo Router for
                declarative, file-based routing. The interface delivers a cohesive cinema-going experience synchronized
                with Figma design specifications.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                    Navigation Architecture &amp; Core Screens
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>
                      <strong>Discover &amp; Search:</strong> Feature carousel of currently showing and upcoming releases,
                      synopsis previews, trailer links, and category filters.
                    </li>
                    <li>
                      <strong>Cinema &amp; Showtime Selection:</strong> Multiplex picker across Nigerian cities, auditorium
                      specification (Dolby Atmos, IMAX, Standard), and date-picker tabs with Lagos timezone normalization.
                    </li>
                    <li>
                      <strong>Interactive Seat Map (<code className="text-xs">SeatMap.tsx</code>):</strong> Scalable auditorium
                      grid rendering tiered seating (Standard vs. VIP), dynamic seat status indicators (Available, Selected,
                      Held, Sold), and instant subtotal calculation in Nigerian Naira.
                    </li>
                    <li>
                      <strong>Checkout &amp; Return Flow:</strong> In-app browser payment presentation via <code className="text-xs">expo-web-browser</code>
                      with deep-link return handler (<code className="text-xs">mobile://payment-complete</code>).
                    </li>
                    <li>
                      <strong>My Tickets:</strong> Tabbed view dividing &ldquo;Upcoming&rdquo; from historical bookings,
                      rendering high-contrast scannable QR passes.
                    </li>
                    <li>
                      <strong>Profile &amp; Session Management:</strong> Explicit toggle between active demo account credentials
                      and offline preview modes.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                    Design Tokens &amp; Component Gallery
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Design tokens are centralized in <code className="text-xs">apps/mobile/src/theme/</code> to prevent
                    visual drift between design handoffs and code. Reusable UI components include Button, Card, MovieCard,
                    Input, Chip, Badge, BottomSheet, Skeleton, Toast, EmptyState, and SeatMap, all documented in an in-app
                    gallery route (<code className="text-xs">/gallery</code>) with 12 distinct interactive states.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Technical Architecture */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                4. Technical Architecture
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                The repository is organized as an npm workspaces monorepo separating concerns across client presentation,
                API routing, shared domain logic, and persistent storage:
              </p>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5 font-mono text-xs dark:border-zinc-800 dark:bg-zinc-900/60">
                <div className="text-zinc-700 dark:text-zinc-300">
                  reelpass/<br />
                  ├── apps/<br />
                  │&nbsp;&nbsp;&nbsp;├── mobile/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Expo SDK 57 / React Native 0.86 client<br />
                  │&nbsp;&nbsp;&nbsp;└── api/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Node.js, Express, TypeScript REST API (/api/v1)<br />
                  ├── packages/<br />
                  │&nbsp;&nbsp;&nbsp;└── shared/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Domain models, Zod validation schemas, interfaces<br />
                  ├── docs/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Architectural, security, traffic, and sharding specifications<br />
                  └── load-tests/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Containerized Grafana k6 high-concurrency benchmarks<br />
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 text-left text-sm dark:divide-zinc-800">
                  <thead>
                    <tr className="bg-zinc-50 dark:bg-zinc-900/50">
                      <th className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Tier</th>
                      <th className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Technology</th>
                      <th className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Role &amp; Architectural Responsibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Mobile Client</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Expo / React Native</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Seat selection, browser checkout invocation, and digital QR pass rendering</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">API Gateway</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Node.js / Express</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Authentication, booking orchestration, checkout generation, and webhook ingestion</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Relational DB</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">PostgreSQL (Neon)</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Durable source of truth: ACID seat allocations, bookings, payments, and tickets</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">In-Memory Cache</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Redis Cloud (Redis 7)</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Atomic Lua multi-seat hold acquisition, 5-minute TTL locks, and catalog caching</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Payment Engine</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Flutterwave v3 (Sandbox)</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Hosted standard checkout, server-to-server verification, and HMAC signatures</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Movie Catalog</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">TMDB API</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Live movie metadata, artwork, and cast credits with high-fidelity demo fallback</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Concurrency-Safe Seat Reservations */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                5. Concurrency-Safe Seat Reservations
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Cinema reservations represent a classic high-contention problem: seats are strictly scarce, and hundreds
                of users may hit &ldquo;Book Now&rdquo; for identical seats at the exact same millisecond. ReelPass
                solves this with a two-tier reservation model:
              </p>
              <div className="mt-6 space-y-6">
                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    Tier 1: High-Speed Distributed Rejection (Redis Fast Path)
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    When a reservation request reaches the API, it first attempts to acquire all requested seats via an atomic
                    Redis Lua script. If any seat is already locked by another user, the script immediately returns zero
                    without modifying state. The API returns an immediate <code className="text-xs">HTTP 409 Conflict</code>.
                    This shields PostgreSQL connection pools from catastrophic thread exhaustion during ticket drops.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    Tier 2: Relational Durability &amp; Invariant Enforcement (PostgreSQL)
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Winning requests proceed to a PostgreSQL transaction. PostgreSQL remains the absolute authority: even if
                    Redis was completely flushed, crashed, or misconfigured, PostgreSQL row-level locks and unique constraints
                    guarantee that two concurrent transactions can never book or hold the same seat.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Redis Lua Seat Holds & 5-Minute TTL */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                6. Redis Lua Seat Holds and Five-Minute Expiration
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Multi-seat cart holds are acquired using a custom Redis Lua script executing in single-threaded Redis memory.
                Because Lua execution in Redis is atomic, no other operation can interleave during hold evaluation.
              </p>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">Key Hold Invariants</h4>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong>All-or-Nothing Atomicity:</strong> The Lua script iterates across every requested seat key
                    (<code className="text-xs">reelpass:hold:{`{showtimeId}`}:{`{seatId}`}</code>). If even one seat is held by
                    another user, the script aborts and acquires none, preventing split-cart partial reservations.
                  </li>
                  <li>
                    <strong>Hold Ownership:</strong> The Redis key value stores the holding <code className="text-xs">userId</code>.
                    A release operation is also verified via Lua: only the user who placed the hold can explicitly release it.
                  </li>
                  <li>
                    <strong>Five-Minute Hold Window (Redis TTL):</strong> ReelPass implements a default 5-minute (300-second) TTL
                    (<code className="text-xs">SEAT_HOLD_TTL_SECONDS=300</code>). In high-density cinema markets, longer hold
                    windows cause severe inventory starvation where abandoned carts artificially block genuine buyers. A 5-minute
                    window provides ample time for mobile card and OTP authorization while ensuring rapid inventory recycling
                    when checkouts are abandoned. The duration is fully parameterizable via environment variables without requiring
                    code or schema changes.
                  </li>
                </ul>
              </div>
            </section>

            {/* 7. PostgreSQL Transactions, Row Locks & Constraints */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                7. PostgreSQL Transactions, Row Locks and Uniqueness Constraints
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                In <code className="text-xs">apps/api/src/db/pgStore.ts</code>, the transactional booking flow implements three
                critical database safety measures:
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                    1. Monotonic Row Lock Ordering (<code className="text-xs">ORDER BY ss.seat_id ASC</code>)
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    When acquiring row locks via <code className="text-xs">SELECT ... FOR UPDATE OF ss</code>, seat IDs are
                    strictly sorted monotonically in ascending order. This ensures that concurrent transactions
                    requesting overlapping seats (e.g., User 1 requesting [A1, A2] and User 2 requesting [A2, A1]) acquire
                    locks in identical sequence, preventing circular lock waits among seat rows and substantially reducing the
                    risk of transaction deadlocks.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                    2. Composite Database Constraints
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Relational integrity is permanently enforced by PostgreSQL database-enforced unique constraints:
                    <br />
                    <code className="text-xs">UNIQUE (showtime_id, seat_id)</code> on <code className="text-xs">booking_seats</code>
                    <br />
                    <code className="text-xs">UNIQUE (showtime_id, seat_id)</code> on <code className="text-xs">tickets</code>
                    <br />
                    These constraints provide the final relational guarantee that duplicate seat claims are rejected at the database level even under concurrent transactions.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                    3. PostgreSQL Concurrency Error Translation
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    PostgreSQL concurrency error codes (<code className="text-xs">23505</code> unique violation, <code className="text-xs">40P01</code> deadlock,
                    <code className="text-xs">40001</code> serialization failure, <code className="text-xs">55P03</code> lock unavailable)
                    are intercepted and translated into <code className="text-xs">BookingConflictError (409 SEAT_UNAVAILABLE)</code>.
                    Clients receive deterministic, actionable 409 conflict responses rather than unexpected 500 internal server crashes.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Flutterwave Sandbox Payment Lifecycle */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                8. Flutterwave Sandbox Payment Lifecycle and Verified Confirmation
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Payment handling strictly separates inventory reservation from financial settlement:
              </p>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
                <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong>Pending Booking Initiation:</strong> Creating a reservation places the booking into a
                    <code className="text-xs">PENDING</code> state with active seat holds. No tickets are issued at this stage.
                  </li>
                  <li>
                    <strong>Server-Calculated Billing:</strong> When initializing Flutterwave Standard Checkout, the backend
                    calculates totals strictly from server seat pricing in integer minor units (kobo). Any client-supplied
                    totals are discarded to eliminate price-tampering vulnerabilities.
                  </li>
                  <li>
                    <strong>Hosted Standard Checkout:</strong> The mobile client loads the Flutterwave hosted checkout URL
                    using <code className="text-xs">expo-web-browser</code>. The user enters sandbox card credentials and completes
                    test OTP authorization.
                  </li>
                  <li>
                    <strong>Deep-Link Interception:</strong> Upon completion, Flutterwave redirects to
                    <code className="text-xs">mobile://payment-complete?status=successful&amp;tx_ref=...</code>, intercepted by
                    Expo Router in the native app.
                  </li>
                  <li>
                    <strong>Server-to-Server Verification:</strong> The client triggers <code className="text-xs">POST /api/v1/payments/verify</code>.
                    The API queries the Flutterwave verification endpoint directly, checking that the transaction ID, currency (NGN),
                    amount in kobo, and reference match the database record exactly.
                  </li>
                  <li>
                    <strong>Fail-Closed Security &amp; Webhook HMAC:</strong> If payment credentials are missing, amounts mismatch,
                    or network calls fail, the booking fails closed and is never marked as paid. Webhook callbacks verify the
                    <code className="text-xs">verif-hash</code> header using constant-time comparison (<code className="text-xs">crypto.timingSafeEqual</code>)
                    with replay protection.
                  </li>
                  <li>
                    <strong>Sandbox Host Allowlisting:</strong> In <code className="text-xs">payment.service.ts</code>, ReelPass
                    enforces an explicit whitelist (<code className="text-xs">VERIFIED_FLUTTERWAVE_HOSTS</code>) restricting
                    checkout redirection to <code className="text-xs">checkout-v2.dev-flutterwave.com</code> strictly when running
                    in sandbox mode, preserving HTTPS and port 443 integrity.
                  </li>
                </ol>
              </div>
            </section>

            {/* 9. Digital Tickets & QR Code Generation */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                9. Digital Tickets and QR-Code Generation
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Following verified payment confirmation, ReelPass atomically transitions the booking to
                <code className="text-xs">CONFIRMED</code> and generates digital tickets:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                    Structured Pass String Format
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Digital passes are issued with structured token payloads formatted as:
                  </p>
                  <p className="mt-2 font-mono text-xs bg-zinc-100 dark:bg-zinc-800/80 p-3 rounded-lg text-zinc-800 dark:text-zinc-200">
                    REELPASS-BOOKING-&#123;bookingReference&#125; / REELPASS-TKT-&#123;seatId&#125;-&#123;bookingReference&#125;
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    These structured tokens encapsulate the booking reference, showtime details, and seat identifiers for
                    gate entry inspection.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                    Client-Side Pass Rendering (<code className="text-xs">react-native-qrcode-svg</code>)
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    In the &ldquo;My Tickets&rdquo; screen, confirmed bookings render high-density SVG QR codes on-demand using
                    <code className="text-xs">react-native-qrcode-svg</code> with quiet-zone padding. The mobile client loads tickets
                    dynamically from the API with in-flight request locking (<code className="text-xs">isFetchingRef</code>) and
                    automatic retry backoff.
                  </p>
                </div>
              </div>
            </section>

            {/* 10. Third-Party TMDB Integration & Caching */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                10. Third-Party TMDB Integration and Caching
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                ReelPass integrates with The Movie Database (TMDB) API to populate rich cinema discovery data, including
                high-resolution theatrical posters, backdrop banners, localized plot synopses, genres, and age ratings.
              </p>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong>Server-Side Secret Isolation:</strong> TMDB API keys are maintained exclusively within backend
                    environment variables; no third-party API credentials are baked into client bundles.
                  </li>
                  <li>
                    <strong>High-Fidelity Offline Fallback:</strong> If TMDB API rate limits are exceeded or external network
                    connectivity is lost, the API seamlessly falls back to pre-seeded movie fixtures, guaranteeing uninterrupted
                    browsing and seat selection during demos.
                  </li>
                  <li>
                    <strong>Independent Showtime Fetch Resilience:</strong> The mobile showtimes screen was refactored
                    from a fragile unified <code className="text-xs">Promise.all</code> into independent asynchronous requests.
                    Network failures during schedule retrieval present an in-place retry control without blanking out already-loaded
                    movie metadata or cinema selectors.
                  </li>
                </ul>
              </div>
            </section>

            {/* 11. Performance Testing & Measured Outcomes */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                11. Performance Testing and Measured Outcomes
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To validate concurrency correctness and load resilience under high contention, ReelPass was subjected to an
                isolated containerized load test using Grafana k6, simulating peak opening-weekend seat booking.
              </p>

              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/30">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  <strong>Reporting Boundary:</strong> These figures reflect an isolated containerized benchmark executed against
                  disposable PostgreSQL 16 and Redis 7 containers designed to stress-test locks and constraints under maximum saturation.
                  They represent documented test evidence rather than independently measured public internet traffic.
                </p>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 text-left text-sm dark:divide-zinc-800">
                  <thead>
                    <tr className="bg-zinc-50 dark:bg-zinc-900/50">
                      <th className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Benchmark Metric</th>
                      <th className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Measured Value</th>
                      <th className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Verification &amp; Significance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Concurrent Virtual Users (VUs)</td>
                      <td className="px-4 py-3 font-mono text-zinc-700 dark:text-zinc-300">500 VUs</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">500 virtual users across 50 distinct accounts</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Contested Seat Pool</td>
                      <td className="px-4 py-3 font-mono text-zinc-700 dark:text-zinc-300">40 seats</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Heavily constrained inventory in showtime <code className="text-xs">st-1</code></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Successful Reservations (HTTP 201)</td>
                      <td className="px-4 py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400">40</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">100% of available inventory accurately allocated</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Expected Seat Conflicts (HTTP 409)</td>
                      <td className="px-4 py-3 font-mono text-zinc-700 dark:text-zinc-300">9,155</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Expected rejections for contested seats held by others</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Duplicate Seat Bookings</td>
                      <td className="px-4 py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400">0 (Zero)</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Verified via SQL query against <code className="text-xs">booking_seats</code></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Duplicate Tickets Issued</td>
                      <td className="px-4 py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400">0 (Zero)</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Verified via SQL query against <code className="text-xs">tickets</code></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Unexpected Server Errors (HTTP 5xx)</td>
                      <td className="px-4 py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400">0 (Zero)</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">All race conditions translated to structured 409s</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Transport Drops (Status 0)</td>
                      <td className="px-4 py-3 font-mono font-semibold text-emerald-600 dark:text-emerald-400">0 (Zero)</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Zero socket drops under 2,048 listen backlog configuration</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">Average Request Latency</td>
                      <td className="px-4 py-3 font-mono text-zinc-700 dark:text-zinc-300">581.9 ms</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Mean response time across 9,195 total iterations</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-200">p95 Request Latency</td>
                      <td className="px-4 py-3 font-mono text-zinc-700 dark:text-zinc-300">2,109.9 ms</td>
                      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Well within safety thresholds under 500-VU saturation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 12. Major Engineering Challenges, Fixes & Lessons */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                12. Major Engineering Challenges, Fixes and Lessons
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Deploying ReelPass to cloud infrastructure and validating the application on physical Android hardware
                revealed real-world edge cases that do not appear in local mock development.
              </p>

              <div className="mt-6 space-y-6">
                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    1. Standalone Android Deep-Link Return Routing
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <strong>Challenge:</strong> During early standalone APK testing, completing Flutterwave checkout redirected
                    back to <code className="text-xs">mobile://payment-complete</code>, but triggered an Expo Router &ldquo;Unmatched Route&rdquo;
                    error on physical Android devices.
                    <br />
                    <strong>Fix:</strong> Implemented the explicit route handler <code className="text-xs">apps/mobile/src/app/payment-complete.tsx</code>,
                    configured <code className="text-xs">scheme: &quot;mobile&quot;</code> in <code className="text-xs">app.json</code>,
                    and integrated <code className="text-xs">WebBrowser.maybeCompleteAuthSession()</code> in the root layout to cleanly
                    dismiss the in-app browser overlay upon callback arrival.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    2. Physical Device Cold-Start Authentication Resilience
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <strong>Challenge:</strong> Cellular socket initialization delays on cold boot caused initial token requests
                    to time out. The UI rendered a phantom demo session (&ldquo;Alex Vance&rdquo;), but with <code className="text-xs">token = null</code>,
                    causing immediate 401 Unauthorized errors when the user attempted to hold seats.
                    <br />
                    <strong>Fix:</strong> Implemented a 2-attempt cold-boot retry with backoff in <code className="text-xs">AuthContext</code>,
                    added proactive demo session token acquisition in <code className="text-xs">ApiClient</code>, registered a state-synchronizing
                    token listener, and provided an interactive fallback &ldquo;Activate Demo Session&rdquo; button in the Profile view.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    3. Cloud Database Latency &amp; In-Flight Query Locking
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <strong>Challenge:</strong> Querying 10 multi-relation booking histories from remote cloud PostgreSQL over
                    mobile networks took ~3.8–4.0s, exceeding the default 3.5s client timeout and displaying &ldquo;Tickets Unavailable&rdquo;.
                    Simultaneously, screen focus events triggered parallel duplicate queries, inflating database round-trip times to 4.5s.
                    <br />
                    <strong>Fix:</strong> Increased client timeout for database endpoints from 3.5s to 12.0s (providing a 3x safety buffer),
                    introduced an <code className="text-xs">isFetchingRef</code> concurrency lock to prevent duplicate parallel queries,
                    added automatic 2-attempt retries with backoff, and provided an interactive retry button on error screens.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    4. Deterministic Lagos Timezone Showtime Formatting
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <strong>Challenge:</strong> Devices running on different international timezones or operating system locale settings
                    rendered showtime dates inconsistently, causing date-key mismatches when filtering schedule tables.
                    <br />
                    <strong>Fix:</strong> Replaced locale-dependent string formatting with explicit
                    <code className="text-xs">Intl.DateTimeFormat(&apos;en-NG&apos;, &#123; timeZone: &apos;Africa/Lagos&apos;, ... &#125;).formatToParts()</code>,
                    generating deterministic <code className="text-xs">YYYY-MM-DD</code> date keys across all client environments.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    5. Observed Physical Device Staging Audit &amp; Transparency
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <strong>Observed Discrepancy:</strong> During the November 17, 2026 staging verification of seat E1 on physical
                    Android hardware, the browser redirect returned to the app displaying a &ldquo;Payment Incomplete&rdquo; callback
                    screen message. However, navigating to &ldquo;My Tickets&rdquo; confirmed the booking status was <code className="text-xs">CONFIRMED</code>,
                    the database settlement was successful, and the issued digital ticket rendered its scannable QR pass properly.
                    <br />
                    <strong>Engineering Transparency:</strong> Rather than obscuring or papering over the behavior, this is documented
                    accurately as an open UI/callback display item, adhering to honest engineering reporting standards.
                  </p>
                </div>
              </div>
            </section>

            {/* 13. Links to Source Code, Demo Video, Figma & Build Evidence */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                13. Verified Project Evidence and Artifacts
              </h2>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong>GitHub Repository:</strong>{" "}
                    <a
                      href="https://github.com/ScrappyAT/Reelpass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-900 underline dark:text-zinc-100"
                    >
                      https://github.com/ScrappyAT/Reelpass
                    </a>
                  </li>
                  <li>
                    <strong>Project Submission Document:</strong>{" "}
                    <a
                      href="https://github.com/ScrappyAT/Reelpass/blob/main/SUBMISSION.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-900 underline dark:text-zinc-100"
                    >
                      SUBMISSION.md on GitHub
                    </a>
                  </li>
                  <li>
                    <strong>Tested Android EAS Build (EAS ID: d5df0b9c-4f0e-4c5f-a8b5-a9612ff3ae1c):</strong>{" "}
                    <a
                      href="https://expo.dev/accounts/scrappy4rl/projects/reelpass/builds/d5df0b9c-4f0e-4c5f-a8b5-a9612ff3ae1c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-900 underline dark:text-zinc-100"
                    >
                      Expo EAS Build Details
                    </a>
                  </li>
                  <li>
                    <strong>Demonstration Video (Google Drive):</strong>{" "}
                    <a
                      href="https://drive.google.com/file/d/1QA6IZhR8Ic2HOKR-vXoVW-sP6RIQ6ep1/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-900 underline dark:text-zinc-100"
                    >
                      Watch Demonstration Video
                    </a>
                  </li>
                  <li>
                    <strong>Figma Design Specification:</strong>{" "}
                    <a
                      href="https://www.figma.com/design/Gh0kzUtGs4547W19iH4WVa/Dev-and-Design-Bootcamp-Learning-Phase"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-900 underline dark:text-zinc-100"
                    >
                      Figma Design System &amp; Flows
                    </a>
                  </li>
                  <li>
                    <strong>LinkedIn Engineering Reflection:</strong>{" "}
                    <a
                      href="https://lnkd.in/p/euVj5q72"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-900 underline dark:text-zinc-100"
                    >
                      View LinkedIn Engineering Post
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
