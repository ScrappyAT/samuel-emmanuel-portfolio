import Link from "next/link";
import { Navigation } from "@/app/components/navigation";
import { Footer } from "@/app/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rota Case Study — Samuel Emmanuel",
  description:
    "Production-grade, multi-tenant mobile shift scheduling app with financial and operational integrity.",
};

export default function RotaCaseStudyPage() {
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
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Portfolio
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Case Study · Engineering & Architecture
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              Rota — Team Shift Scheduling Mobile App with Financial and Operational Integrity
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              A production-ready shift scheduling mobile application built for shift-based businesses,
              combining Expo/React Native, Express, PostgreSQL, Redis, and supervised background workers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/ScrappyAT/rota"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                View Repository
              </a>
              <a
                href="https://drive.google.com/file/d/1-39i6l2UYL1paP3qimbb0Ga-dg96-V2e/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Demo Video
              </a>
              <a
                href="https://rota-production-84ef.up.railway.app/health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Live API Health
              </a>
              <a
                href="https://lnkd.in/p/edPwxhTV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                LinkedIn Post
              </a>
            </div>
          </header>

          {/* Content sections */}
          <article className="prose prose-zinc dark:prose-invert max-w-none space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Executive Summary
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Rota is a multi-tenant mobile shift-scheduling application built for shift-based businesses
                such as restaurants, retail shops, and medical clinics. The application pairs an Expo / React
                Native client with a high-performance Express, PostgreSQL 15, and Redis 7 backend deployed to
                Railway under a supervised single-container architecture.
              </p>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Shift-based workplaces require scheduling accuracy, atomic swap approvals without double-booking
                races, robust audit logging, and automated subscription proration. Rota addresses these needs
                with rigorous tenant isolation, an atomic shift-swap state machine, cursor-paginated activity
                history, an append-only financial ledger, and a transactional PostgreSQL outbox for reliable
                background processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Key Engineering Decisions
              </h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    1. Multi-Tenant Role Isolation & Primary Membership Checks
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Roles (<code className="text-xs">OWNER</code>, <code className="text-xs">MANAGER</code>, <code className="text-xs">STAFF</code>)
                    are stored strictly per team in <code className="text-xs">team_memberships</code>. Primary membership checks precede any
                    tenant data reads to prevent cross-tenant enumeration. Non-members receive a generic 404, while unauthorized members receive
                    a 403. Last-owner protection safeguards prevent accidental team abandonment.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    2. Atomic Shift Swaps & Keyset Cursor Pagination
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Shift swaps use a transactional state machine with row-level locks (<code className="text-xs">SELECT ... FOR UPDATE</code>)
                    to atomically transfer assignments and record audit events. Activity history implements deterministic keyset cursor
                    pagination on <code className="text-xs">(created_at, id)</code> with composite indexes, eliminating SQL <code className="text-xs">OFFSET</code>
                    performance degradation and page drift across 10,000+ records.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    3. Financial Integrity & Append-Only Ledger
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Subscriptions enforce integer minor units (cents) with separate-floor proration and client UUID <code className="text-xs">Idempotency-Key</code>
                    headers to eliminate duplicate billing. Subscription projections are backed by an immutable append-only
                    <code className="text-xs">financial_ledger</code> table. Payment reconciliation implements bounded backoffs, sanitized error
                    categorization, and claim-age tracking via <code className="text-xs">updated_at</code>.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    4. Transactional Outbox & Supervised Single-Container Deployment
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    All notifications and payment tasks are committed to a PostgreSQL <code className="text-xs">job_outbox</code> within the caller&apos;s
                    transaction. A dedicated supervisor process (<code className="text-xs">combined-server.ts</code>) runs both the Express API and the
                    BullMQ worker inside a single Railway container, ensuring automatic restart if either child process encounters a fatal failure.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    5. Redis Cache-Aside & Measured Load Benchmark
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Cache-aside layers cache rosters (300s TTL), shift calendars (120s TTL), and activity feeds (60s TTL) with explicit invalidation
                    on mutations. In a 200-virtual-user k6 load harness against 10,000 activity records, caching reduced median latency by
                    <strong> -49.9%</strong>, improved p95 from <strong>1,271ms to 710ms</strong>, and increased throughput by <strong>+74.9%</strong>
                    with <strong>0% HTTP errors</strong>.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Production Verification & Acceptance Results
              </h2>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong>Railway Cloud:</strong> Active at <code className="text-xs">https://rota-production-84ef.up.railway.app</code>.
                    Health check returns HTTP 200 with <code className="text-xs">status: ok</code>, <code className="text-xs">db: ok</code>, <code className="text-xs">redis: ok</code>.
                  </li>
                  <li>
                    <strong>Flutterwave USD Flow:</strong> Team &quot;Mayo&quot; upgraded to Starter ($20 USD/mo, 5 seats) via
                    <code className="text-xs">POST /teams/:teamId/subscription/checkout</code>. Test card + OTP verification succeeded; subscription
                    transitioned to ACTIVE; invoice marked PAID; financial ledger entry committed upon settlement.
                  </li>
                  <li>
                    <strong>Physical Android Testing:</strong> Tested on a physical Samsung device with installable preview APK (Build 947dc9d2).
                    User confirmed shift creation, member assignments, assigned shift visibility, shift swap submission/approval, activity feed updates,
                    and notification/settings delivery.
                  </li>
                  <li>
                    <strong>Automated Test Evidence:</strong> Historical November 10 integrated release baseline passed 478 tests across 44 suites (136.167s);
                    subsequent supervisor and payment reconciliation test suites pass with zero regressions.
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
