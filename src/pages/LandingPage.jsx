import React from "react";
import MainLayout from "../layouts/MainLayout";

const LandingPage = () => {
  return (
    <MainLayout>
      <main className="min-h-screen bg-[#212121] text-[#CFCFCF]">
        {/* Hero */}
        <section
          id="top"
          className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#212121]"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-[#2A2A2A] rounded-full text-[#F5AF00] text-sm font-medium">
              ⚡ Ship SaaS projects in days, not months
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-[#F5AF00]">
              Build & Launch Your SaaS
              <br />
              5× Faster
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-[#CFCFCF]/80 max-w-2xl mx-auto">
              Stop wasting weeks setting up auth, payments, and routes.
              SassyPack, the MERN SaaS Starter Kit gives you everything ready
              out of the box, so you can skip setup and start building features
              that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://karlgusta.gumroad.com/l/mlixgb"
                className="btn bg-[#F5AF00] hover:bg-[#d49b00] border-none text-black btn-lg gap-2 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get SassyPack
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <div className="text-sm text-[#CFCFCF]/60">
                <span className="font-semibold text-[#CFCFCF]">$29</span> ·
                Lifetime updates
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-[#CFCFCF]/60">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#F5AF00]"></div>
                <div className="w-8 h-8 rounded-full bg-[#CFCFCF]"></div>
                <div className="w-8 h-8 rounded-full bg-[#F5AF00]/70"></div>
              </div>
              <span>Trusted by indie makers worldwide</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="why" className="py-32 px-6 bg-[#1B1B1B]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F5AF00]">
              Why SassyPack
            </h2>
            <p className="text-xl text-[#CFCFCF]/70 mb-16">
              Save time, skip boilerplate, and focus on building features that
              matter.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "⏱️",
                  title: "Saves Time",
                  desc: "Skip weeks of setup and boilerplate",
                },
                {
                  icon: "📚",
                  title: "Beginner-Friendly",
                  desc: "Clean, understandable codebase",
                },
                {
                  icon: "🎨",
                  title: "Easy to Customize",
                  desc: "Adapt it for any SaaS idea",
                },
                {
                  icon: "⚡",
                  title: "Scales Easily",
                  desc: "Grow with your product",
                },
                {
                  icon: "📝",
                  title: "SEO Blog",
                  desc: "Built-in blog for articles & updates",
                },
                {
                  icon: "🔄",
                  title: "Lifetime Updates",
                  desc: "Always up-to-date starter kit",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#212121] border border-[#3a3a3a] rounded-2xl hover:border-[#F5AF00]/40 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#F5AF00]">
                    {feature.title}
                  </h3>
                  <p className="text-[#CFCFCF]/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section id="inside" className="py-32 px-6 bg-[#212121]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F5AF00]">
              What’s Inside
            </h2>
            <p className="text-xl text-[#CFCFCF]/70 mb-16">
              Everything you need for a production-ready SaaS
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Landing Page",
                  desc: "Clean, modern, and responsive",
                },
                {
                  title: "Auth System",
                  desc: "Signup, login, logout, sessions",
                },
                { title: "Protected Routes", desc: "Secure user-only pages" },
                { title: "Navbar & Footer", desc: "Styled with DaisyUI" },
                { title: "Profile Page", desc: "Update user info & settings" },
                { title: "Payments", desc: "Paystack + Stripe integration" },
                { title: "PostHog Analytics", desc: "Track usage & behavior" },
                { title: "OG Image Setup", desc: "Perfect for social sharing" },
                {
                  title: "SEO-Ready Blog",
                  desc: "Publish articles, changelogs & updates",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#1B1B1B] border border-[#3a3a3a] rounded-2xl hover:border-[#F5AF00]/40 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#F5AF00]">
                    {item.title}
                  </h3>
                  <p className="text-[#CFCFCF]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-32 px-6 bg-[#1B1B1B]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F5AF00]">
              Pricing
            </h2>
            <p className="text-xl text-[#CFCFCF]/70 mb-16">
              Choose the plan that fits your journey
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Starter",
                  price: "$29",
                  desc: "For beginners and solo developers who want to learn or build fast.",
                  features: [
                    "Full MERN SaaS Starter Kit",
                    "Authentication, Payments (Paystack + Stripe), Analytics",
                    "Early Access Template",
                    "Free updates for 3 months",
                    "Great entry price for learners & indie",
                  ],
                },
                {
                  title: "Pro",
                  price: "$79",
                  desc: "For makers and founders who want lifetime access and more polish.",
                  features: [
                    "Everything in Starter",
                    "Lifetime updates",
                    "Early Access + Pricing Page templates",
                    "Stripe integration",
                    "Email support",
                    "Perfect balance of value and features",
                  ],
                  popular: true,
                },
                {
                  title: "Team / Extended",
                  price: "$149",
                  desc: "For small agencies, freelance developers, and teams.",
                  features: [
                    "Everything in Pro",
                    "Commercial license (use in client projects)",
                    "Priority support",
                    "Feature request priority",
                    "Built for professionals launching multiple SaaS projects",
                  ],
                },
                {
                  title: "Done-For-You",
                  price: "Custom",
                  desc: "For Non-dev founders who want everything set up.",
                  features: [
                    "Full setup",
                    "Custom branding",
                    "Hosting done for you",
                  ],
                },
              ].map((plan, i) => (
                <a
                  key={i}
                  href="https://karlgusta.gumroad.com/l/mlixgb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 bg-[#212121] border rounded-2xl hover:border-[#F5AF00]/40 transition-all ${
                    plan.popular
                      ? "border-2 border-[#F5AF00] relative"
                      : "border-[#3a3a3a]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F5AF00] text-black text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-[#F5AF00]">
                    {plan.title}
                  </h3>
                  <p className="text-3xl font-bold mb-4 text-[#CFCFCF]">
                    {plan.price}
                  </p>
                  <p className="text-[#CFCFCF]/70 mb-4">{plan.desc}</p>
                  <ul className="text-[#CFCFCF]/60 text-sm mb-4 list-disc list-inside">
                    {plan.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center bg-[#212121]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F5AF00]">
              Start building your SaaS today, the fast way.
            </h2>
            <p className="text-xl text-[#CFCFCF]/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of developers who are shipping faster with
              SassyPack.
            </p>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              className="btn bg-[#F5AF00] hover:bg-[#d49b00] border-none text-black btn-lg gap-2 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get SassyPack Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default LandingPage;
