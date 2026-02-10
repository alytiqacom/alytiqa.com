import { EarlyAccessForm } from "@/components/early-access-form"

function SectionDivider() {
  return <div className="w-12 h-px bg-border" />
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 lg:px-24">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          Alytiqa
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 pb-32 md:pt-32 md:pb-40 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-balance text-foreground">
          Growth intelligence, without human limits.
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-8 text-body max-w-xl">
          An intelligence platform built to deliver analyst-level growth
          judgment at a speed and scale no human team can reach.
        </p>
        <a
          href="#early-access"
          className="inline-block mt-10 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
        >
          Request early access
        </a>
      </section>

      {/* Purpose */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-2xl">
        <SectionDivider />
        <h2 className="mt-10 text-2xl md:text-3xl font-light tracking-tight text-foreground">
          Built to support better growth decisions.
        </h2>
        <p className="mt-6 text-base md:text-lg leading-8 text-body max-w-xl">
          Growth decisions increasingly depend on interpreting complex signals
          across products, markets, and customer behaviour.
        </p>
        <p className="mt-4 text-base md:text-lg leading-8 text-body max-w-xl">
          Alytiqa is built to make sense of those signals with the discipline
          of an experienced growth analyst, without the limits of human scope,
          bias, or capacity.
        </p>
      </section>

      {/* Starting Point */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-2xl">
        <SectionDivider />
        <h2 className="mt-10 text-2xl md:text-3xl font-light tracking-tight text-foreground">
          Starting with website intelligence.
        </h2>
        <p className="mt-6 text-base md:text-lg leading-8 text-body max-w-xl">
          {"Alytiqa\u2019s first release focuses on one critical surface: your website."}
        </p>
        <p className="mt-4 text-base md:text-lg leading-8 text-body max-w-xl">
          It analyses website performance data, identifies meaningful patterns,
          and delivers clear, reasoned recommendations to help teams understand
          what is driving performance and where to focus next.
        </p>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-2xl">
        <SectionDivider />
        <h2 className="mt-10 text-2xl md:text-3xl font-light tracking-tight text-foreground">
          Analysis first. Recommendations second.
        </h2>
        <p className="mt-8 text-base md:text-lg leading-8 text-body max-w-xl">
          Alytiqa examines website data the way a disciplined analyst would,
          looking beyond metrics to understand behaviour, context, and change
          over time.
        </p>
        <p className="mt-6 text-base md:text-lg leading-8 text-body max-w-xl">
          From this analysis, it produces recommendations you can evaluate and
          act on, without automation, hype, or black box decisions.
        </p>
      </section>

      {/* Differentiation */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-2xl">
        <SectionDivider />
        <div className="mt-10 space-y-16">
          <div>
            <h3 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
              Judgment over dashboards
            </h3>
            <p className="mt-3 text-base md:text-lg leading-8 text-body max-w-xl">
              Insight designed to support decisions, not reporting.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
              Patterns over anecdotes
            </h3>
            <p className="mt-3 text-base md:text-lg leading-8 text-body max-w-xl">
              Recommendations grounded in performance patterns, not isolated
              examples.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
              Focus over breadth
            </h3>
            <p className="mt-3 text-base md:text-lg leading-8 text-body max-w-xl">
              A deliberately narrow starting point, chosen to build trust
              before expanding.
            </p>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-2xl">
        <SectionDivider />
        <h2 className="mt-10 text-2xl md:text-3xl font-light tracking-tight text-foreground">
          For B2B growth teams who own outcomes.
        </h2>
        <div className="mt-10 flex flex-col md:flex-row gap-16 md:gap-24">
          <div>
            <p className="text-sm font-medium text-foreground mb-4">Built for</p>
            <ul className="space-y-2.5 text-base text-body-secondary">
              <li>Heads of Growth</li>
              <li>Revenue and growth operations</li>
              <li>Strategy teams supporting growth decisions</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-4">Not built for</p>
            <ul className="space-y-2.5 text-base text-body-secondary">
              <li>Campaign-level optimisation</li>
              <li>Generic analytics reporting</li>
              <li>Automated growth tactics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section
        id="early-access"
        className="px-6 md:px-12 lg:px-24 pt-24 pb-32 md:pt-32 md:pb-40 max-w-2xl"
      >
        <SectionDivider />
        <h2 className="mt-10 text-2xl md:text-3xl font-light tracking-tight text-foreground">
          Request early access
        </h2>
        <p className="mt-4 text-sm text-body-secondary">
          Join a small group of B2B growth teams shaping the first release of
          Alytiqa.
        </p>
        <div className="mt-10">
          <EarlyAccessForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
        <p className="text-sm text-body-secondary">
          {"\u00A9 2026 Alytiqa"}
        </p>
      </footer>
    </main>
  )
}
