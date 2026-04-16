/**
 * MVP early-access landing page (Alytiqa).
 * — 7 sections: shorter flow; “Why now” removed; early-access narrative merged with `#early-access` + form.
 * — Signup unchanged: Netlify via `EarlyAccessForm` + `public/__forms.html`. Matomo in `app/layout.tsx`.
 */
import type { ReactNode } from "react"

import { EarlyAccessForm } from "@/components/early-access-form"

function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-12 bg-foreground/15 ${className}`}
      aria-hidden
    />
  )
}

function Prose({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`space-y-5 text-base md:text-lg leading-relaxed text-body max-w-2xl ${className}`}
    >
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header — brand green bar, light logo + nav */}
      <header className="bg-[#02302B] text-[#F6F6EEFF]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-10 md:py-6 lg:px-12">
          <a
            href="/"
            className="inline-flex min-w-0 shrink items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6F6EEFF]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02302B] rounded-sm"
          >
            <img
              src="/brand/alytiqa-logo-light-wide.png"
              alt="Alytiqa"
              width={286}
              height={94}
              className="h-8 w-auto max-w-[min(100%,14rem)] object-left object-contain md:h-9 md:max-w-[18rem] lg:max-w-[22rem]"
            />
          </a>
          <a
            href="#early-access"
            className="shrink-0 text-sm font-medium text-[#F6F6EEFF] underline-offset-4 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6F6EEFF]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02302B] rounded-sm"
          >
            Request early access
          </a>
        </div>
      </header>

      {/* SECTION 1 — Hero */}
      <section className="bg-[#02302B] text-[#F6F6EEFF]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,220px)] lg:items-start lg:gap-16 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-light leading-[1.12] tracking-tight text-[#F6F6EEFF] md:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
              Alytiqa automates recurring analysis for growth and revenue teams
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body-on-dark md:text-xl md:leading-8">
              Growth teams already have dashboards, reports, and more data than
              they can realistically work through. What they still lack is a
              reliable way to turn that data into clear priorities and next
              actions. Alytiqa is built to automate that recurring analysis work.
            </p>
            <div className="mt-10">
              <a
                href="#early-access"
                className="inline-flex items-center justify-center rounded-md border border-[#F6F6EEFF] bg-transparent px-8 py-3.5 text-center text-sm font-medium text-[#F6F6EEFF] transition-colors hover:bg-[#F6F6EEFF]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6F6EEFF]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02302B]"
              >
                Request early access
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:pt-4" aria-hidden>
            <img
              src="/brand/alytiqa-pyramid-light.svg"
              alt=""
              className="mx-auto w-full max-w-[180px]"
              width={180}
              height={180}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — The problem */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <h2 className="mt-10 max-w-2xl text-2xl font-light tracking-tight text-foreground md:text-3xl">
            More data has not solved the problem
          </h2>
          <Prose className="mt-8">
            <p>
              {
                "The tools and the dashboards don\u2019t give answers. They give homework."
              }
            </p>
            <p>
              But the actual analysis still gets skipped, stays shallow, or stops
              too early. Teams watch top-line metrics, chase the first plausible
              pattern, and move on.
            </p>
            <p>
              That leaves issues and opportunities buried, priorities unclear,
              and actions delayed.
            </p>
          </Prose>
          <ul className="mt-10 max-w-2xl space-y-3 text-base text-body md:text-lg">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" aria-hidden />
              <span>More dashboards do not mean better decisions.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" aria-hidden />
              <span>Shallow analysis creates false confidence.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" aria-hidden />
              <span>Important issues still get missed when the work stays manual.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 — The promise (dark) */}
      <section className="bg-[#02302B] text-[#F6F6EEFF]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <SectionDivider className="bg-[#F6F6EEFF]/25" />
          <h2 className="mt-10 max-w-2xl text-2xl font-light tracking-tight md:text-3xl">
            {"Not more reporting \u2014 analysis getting done"}
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-body-on-dark md:text-lg md:leading-8">
            <p>Alytiqa is built to automate recurring analysis work.</p>
            <p>
              It connects to structured data sources, runs codified analytical
              workflows, surfaces what matters, and recommends what to do next.
            </p>
            <p className="border-l-2 border-[#F6F6EEFF]/25 pl-5 text-body-secondary-on-dark">
              {
                "Dashboards show the data. Alytiqa does the analysis behind the decisions."
              }
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — How it works */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <h2 className="mt-10 max-w-2xl text-2xl font-light tracking-tight text-foreground md:text-3xl">
            Less dashboard digging, more useful action
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg md:leading-8">
            Instead of asking teams to keep digging through dashboards looking for
            clues, Alytiqa is built to ask the right questions, run the analysis
            workflows to answer them, and prioritize actions.
          </p>
          <ol className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
            {[
              {
                title: "Connect the data",
                body: "Bring together the analytics data already living in your stack.",
              },
              {
                title: "Run the workflow",
                body: "Apply recurring research questions across large structured datasets.",
              },
              {
                title: "Surface what matters",
                body: "Prioritize the findings most likely to matter for growth and revenue outcomes.",
              },
              {
                title: "Recommend what to do next",
                body: "Deliver reviewable outputs that help teams move from data to action.",
              },
            ].map((step, i) => (
              <li key={step.title} className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-xl font-normal tracking-tight text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-body md:text-lg">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 5 — The MVP */}
      <section className="bg-[#02302B] text-[#F6F6EEFF]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <SectionDivider className="bg-[#F6F6EEFF]/25" />
          <h2 className="mt-10 max-w-2xl text-2xl font-light tracking-tight md:text-3xl">
            It all starts with website analytics
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-body-on-dark md:text-lg md:leading-8">
            <p>
              {"Alytiqa\u2019s first product focuses on recurring website analysis for B2B SaaS companies."}
            </p>
            <p>
              We start there because the work is frequent, the data is structured,
              the methodology is recognizable, and the outputs can drive action
              quickly.
            </p>
            <p>
              For B2B SaaS, website performance is often tied directly to demand
              generation and pipeline. That makes website analytics the right
              first job to automate.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Who this is for */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <h2 className="mt-10 max-w-2xl text-2xl font-light tracking-tight text-foreground md:text-3xl">
            Built for pipeline-critical growth and revenue teams
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg md:leading-8">
            Alytiqa is for teams that already care about analytics, already have
            data, and do not want the analysis to depend on whoever has the time
            to keep digging.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Best fit
              </p>
              <ul className="mt-4 space-y-2.5 text-base text-body md:text-lg">
                <li>Growth teams</li>
                <li>Demand generation teams</li>
                <li>Revenue teams</li>
                <li>Marketing ops and growth ops</li>
                <li>
                  B2B SaaS companies where the website is part of a measurable
                  pipeline engine
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Anti-fit
              </p>
              <p className="mt-4 text-base leading-relaxed text-body-secondary md:text-lg">
                Not the right fit for teams looking for another dashboard or a
                generic chat interface over analytics data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Early access + form */}
      <section
        id="early-access"
        className="scroll-mt-24 bg-[#02302B] text-[#F6F6EEFF]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-stretch lg:gap-20">
            <div className="flex min-h-0 flex-col lg:h-full">
              <div>
                <SectionDivider className="bg-[#F6F6EEFF]/25" />
                <h2 className="mt-10 text-2xl font-light tracking-tight md:text-3xl">
                  Request early access to the MVP
                </h2>
                <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-body-on-dark md:text-lg md:leading-8">
                  <p>
                    We are working with a focused set of early teams to validate
                    the workflow, sharpen the outputs, and build the right review
                    experience.
                  </p>
                  <p>
                    Early access is best suited to teams with an active website
                    analytics setup and a real recurring analysis need.
                  </p>
                </div>
                <ul className="mt-8 max-w-xl space-y-3 text-base text-body-on-dark md:text-lg">
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6F6EEFF]/40"
                      aria-hidden
                    />
                    <span>Direct collaboration</span>
                  </li>
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6F6EEFF]/40"
                      aria-hidden
                    />
                    <span>Fast iteration</span>
                  </li>
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6F6EEFF]/40"
                      aria-hidden
                    />
                    <span>Early influence on product direction</span>
                  </li>
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6F6EEFF]/40"
                      aria-hidden
                    />
                    <span>Priority access to the beta</span>
                  </li>
                </ul>
                <p className="mt-8 max-w-xl text-sm leading-relaxed text-body-secondary-on-dark">
                  We are reviewing early teams that are a strong fit for the MVP
                  and closed beta.
                </p>
              </div>
              <div
                className="mt-10 max-w-xl lg:mt-auto lg:pt-10"
                aria-hidden
              >
                <img
                  src="/brand/alytiqa-pyramid-light.svg"
                  alt=""
                  width={180}
                  height={180}
                  className="w-full max-w-[180px]"
                />
              </div>
            </div>
            <div
              id="early-access-form"
              className="relative scroll-mt-24 rounded-lg border border-[#F6F6EEFF]/15 bg-[#F6F6EEFF] p-8 text-foreground shadow-sm md:p-10"
            >
              <p className="text-sm font-medium text-body-secondary">
                Early access request
              </p>
              <div className="mt-8">
                <EarlyAccessForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
          <p className="text-sm text-body-secondary">
            {"\u00A9 2026 Alytiqa"}
          </p>
        </div>
      </footer>
    </main>
  )
}
