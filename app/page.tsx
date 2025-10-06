import { Clock, LineChart, Lightbulb } from "lucide-react";
import Image from "next/image";
import { SignupForm } from "@/components/SignupForm";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a3330] text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-12 text-center max-w-3xl">
          <p className="text-sm md:text-base mb-6">
            For web analysts, web managers, marketers,
            <br />
            and everyone else working with analytics.
          </p>
          <h1 className="text-2xl md:text-4xl font-heading font-normal mb-12">
            Save time and get better results with
            <br />
            Alytiqa, the AI web analyst.
          </h1>
          <div className="flex justify-center mb-12">
            <div className="relative w-auto h-auto">
              <Image
                src="/images/brain.png"
                alt="Brain icon"
                width={96}
                height={96}
                style={{
                  filter: "brightness(0) invert(1)",
                  width: "auto",
                  height: "auto",
                  maxWidth: "96px",
                  maxHeight: "96px",
                }}
                className="md:max-w-[120px] md:max-h-[120px]"
              />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-heading mb-4">
            Coming soon
          </h2>
          <p className="mb-6">Sign up for news and get invited to the pilot!</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
            <SignupForm />
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-heading text-center mb-12">
            We're building Alytiqa to help you:
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Clock className="w-12 h-12 stroke-1" />
              </div>
              <h3 className="text-lg font-heading font-normal mb-3">
                Save hours
              </h3>
              <p className="text-sm">
                Don't spend any more time trying to get your head around messy
                analytics data or competitor analysis. Alytiqa will do it for
                you and you'll get time for other important tasks.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <LineChart className="w-12 h-12 stroke-1" />
              </div>
              <h3 className="text-lg font-heading font-normal mb-3">
                Get better results
              </h3>
              <p className="text-sm">
                Alytiqa will go through all your analytics data regularly, find
                the relevant patterns and changes, as well as relate it to your
                website content, goals and competitors.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Lightbulb className="w-12 h-12 stroke-1" />
              </div>
              <h3 className="text-lg font-heading font-normal mb-3">
                Know how to act
              </h3>
              <p className="text-sm">
                You'll get notified of any deviations, warning signs, and
                potential improvements, including suggestions on what to change,
                as well as general industry web trends.
              </p>
            </div>
          </div>
        </section>

        {/* Powers Section */}
        <section className="container mx-auto px-4 py-16 max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-heading text-center mb-8">
            The powers we're giving Alytiqa
          </h2>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              To keep track of website metrics and behavioural patterns, detect
              relevant changes, and explain them.
            </li>
            <li>
              To keep track of all changes to a website as well as A/B tests and
              campaigns, and evaluate how they affect KPIs.
            </li>
            <li>
              To compare a website and its performance to competitors and
              explain any differences.
            </li>
            <li>
              To suggest what to change to improve conversion and other KPIs.
            </li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-16 max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-heading text-center mb-8">
            How it works
          </h2>
          <p className="mb-6 text-center">
            Alytiqa will run your data through a multitude of AI and machine
            learning models tailored to uncover relevant insights for your type
            of website and industry. The findings are prioritized based on your
            goals and presented to you in a report sent to your mailbox every
            week or month.
          </p>
          <p className="text-center">
            You get several days worth of work condensed in one page, with zero
            effort. All you have to do is hook up your analytics via the API and
            you're set to go.
          </p>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16 max-w-md">
          <h2 className="text-xl md:text-2xl font-heading text-center mb-8">
            Contact us
          </h2>
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 text-center">
          <p className="text-lg md:text-xl font-heading max-w-xl mx-auto">
            Solid insights that drive your business forward,
            <br />
            with minimum effort.
          </p>
        </footer>
      </main>
    </div>
  );
}
