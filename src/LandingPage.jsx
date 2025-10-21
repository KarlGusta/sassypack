import React from "react";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      {/* Hero */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Build & Launch Your SaaS 5× Faster</h1>
        <p className="text-lg mb-6">
          Stop wasting weeks setting up auth, payments, and routes. <br />
          <strong>SassyPack – the MERN SaaS Starter Kit</strong> gives you everything ready out of the box,
          so you can skip setup and start building features that matter.
        </p>
        <p className="text-md mb-8">
          Used by indie makers, devs, and small teams shipping fast on MERN.
        </p>
        <a
          href="https://karlgusta.gumroad.com/l/mlixgb"
          className="btn btn-primary btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Get SassyPack Now
        </a>
      </section>

      {/* Why SassyPack */}
      <section className="bg-base-200 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">💡 Why SassyPack</h2>
          <ul className="text-left max-w-md mx-auto space-y-2 text-lg">
            <li>✅ Saves weeks of setup time</li>
            <li>✅ Beginner-friendly, clean codebase</li>
            <li>✅ Easy to customize for any SaaS</li>
            <li>✅ Scales with your ideas</li>
            <li>✅ Lifetime updates included</li>
          </ul>
          <p className="mt-8 text-md italic">
            “I built SassyPack to save devs from boilerplate pain — now you can just code and launch.”
          </p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">🧩 What’s Inside</h2>
        <div className="grid md:grid-cols-2 gap-6 text-lg">
          <ul className="space-y-2">
            <li>🌐 Landing Page – clean, modern, and responsive</li>
            <li>🔑 Auth System – signup, login, logout, sessions</li>
            <li>🔒 Protected Routes – secure user-only pages</li>
            <li>🧭 Navbar & Footer – styled with DaisyUI</li>
          </ul>
          <ul className="space-y-2">
            <li>👤 Profile Page – update user info & settings</li>
            <li>💳 Payments – Paystack + Stripe integration</li>
            <li>📊 PostHog Analytics – track usage & behavior</li>
            <li>🖼️ OG Image Setup – perfect for social sharing</li>
          </ul>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-base-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">🧪 Bonus: Early Access Template</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Validate your idea before you build it. Launch a pre-order or waitlist with:
        </p>
        <ul className="max-w-md mx-auto text-left space-y-2 text-lg">
          <li>✨ Beautiful landing page</li>
          <li>✨ “Reserve your spot” button</li>
          <li>✨ Integrated payments</li>
        </ul>
        <p className="mt-6">
          Perfect for testing demand and collecting early supporters.
        </p>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">💰 Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="card bg-base-100 shadow-xl p-6">
            <h3 className="text-2xl font-semibold mb-2 text-green-500">🟢 Tier 1 — Starter</h3>
            <p className="text-3xl font-bold mb-4">$29</p>
            <p className="mb-4 text-md">For beginners and solo developers who want to learn or build fast.</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✅ Full MERN SaaS Starter Kit</li>
              <li>✅ Auth, Payments (Paystack + Stripe), Analytics</li>
              <li>✅ Early Access Template</li>
              <li>✅ Free updates for 3 months</li>
            </ul>
            <p className="italic mb-4">👉 Great entry price for learners & indie</p>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Starter
            </a>
          </div>

          {/* Tier 2 */}
          <div className="card bg-base-100 shadow-xl border-2 border-primary p-6 relative">
            <div className="badge badge-primary absolute right-4 top-4">⭐ Most Popular</div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">🔵 Tier 2 — Pro</h3>
            <p className="text-3xl font-bold mb-4">$79</p>
            <p className="mb-4 text-md">For makers and founders who want lifetime access and more polish.</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✅ Everything in Starter</li>
              <li>✅ Lifetime updates</li>
              <li>✅ Early Access + Pricing Page templates</li>
              <li>✅ Stripe integration</li>
              <li>✅ Email support</li>
            </ul>
            <p className="italic mb-4">👉 Perfect balance of value and features</p>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Pro
            </a>
          </div>

          {/* Tier 3 */}
          <div className="card bg-base-100 shadow-xl p-6">
            <h3 className="text-2xl font-semibold mb-2 text-purple-500">🟣 Tier 3 — Team / Extended</h3>
            <p className="text-3xl font-bold mb-4">$149</p>
            <p className="mb-4 text-md">
              For small agencies, freelance developers, and teams building multiple SaaS projects.
            </p>
            <ul className="text-left space-y-2 mb-6">
              <li>✅ Everything in Pro</li>
              <li>✅ Commercial license (use in client projects)</li>
              <li>✅ Priority support</li>
              <li>✅ Feature request priority</li>
            </ul>
            <p className="italic mb-4">👉 Built for professionals launching multiple SaaS projects</p>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Team
            </a>
          </div>
        </div>

        <p className="mt-10 text-md">
          💵 <strong>14-day money-back guarantee</strong> <br />
          ⚡ <strong>Lifetime updates included</strong>
        </p>
      </section>

      {/* Early Access */}
      <section className="bg-base-200 text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">🕓 Early Access Offer</h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Join the early adopters and get lifetime updates at today’s price. <br />
          The price will increase after launch.
        </p>
        <a
          href="https://karlgusta.gumroad.com/l/mlixgb"
          className="btn btn-primary btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get SassyPack Now
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm opacity-70">
        © {new Date().getFullYear()} SassyPack – Built by Karl Gusta
      </footer>
    </main>
  );
};

export default LandingPage;
