import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Build & Launch Your SaaS 5× Faster</h1>
        <p className="text-xl mb-6">
          Stop wasting weeks setting up auth, payments, and routes.
        </p>
        <p className="text-lg mb-10">
          <strong>SassyPack</strong> – the MERN SaaS Starter Kit gives you everything ready out of the box,
          so you can skip setup and start building features that matter.
        </p>
        <p className="text-base mb-10">
          Used by indie makers, devs, and small teams shipping fast on MERN.
        </p>
        <a
          href="https://karlgusta.gumroad.com/l/mlixgb"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          Get SassyPack Now
        </a>
      </section>

      {/* Why SassyPack */}
      <section className="py-16 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">💡 Why SassyPack</h2>
          <ul className="list-disc list-inside text-lg max-w-md mx-auto space-y-3">
            <li>✅ Saves weeks of setup time</li>
            <li>✅ Beginner-friendly, clean codebase</li>
            <li>✅ Easy to customize for any SaaS</li>
            <li>✅ Scales with your ideas</li>
            <li>✅ Lifetime updates included</li>
          </ul>
          <p className="text-center mt-8 text-lg">
            I built <strong>SassyPack</strong> to save devs from boilerplate pain — now you can just code and launch.
          </p>
        </div>
      </section>

      {/* What’s Inside */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">🧩 What’s Inside</h2>
          <p className="text-center text-lg mb-6">
            Everything you need for a production-ready SaaS:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside space-y-2">
              <li>🌐 Landing Page – clean, modern, and responsive</li>
              <li>🔑 Auth System – signup, login, logout, sessions</li>
              <li>🔒 Protected Routes – secure user-only pages</li>
              <li>🧭 Navbar & Footer – styled with DaisyUI</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>👤 Profile Page – update user info & settings</li>
              <li>💳 Payments – supports Paystack + Stripe integration</li>
              <li>📊 PostHog Analytics – track usage & behavior</li>
              <li>🖼️ OG Image Setup – perfect for social sharing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">🧪 Bonus: Early Access Template</h2>
          <p className="text-lg mb-4">
            Validate your idea before you build it.
          </p>
          <p className="text-lg mb-6">
            Launch a pre-order or waitlist with:
          </p>
          <ul className="list-disc list-inside text-left max-w-md mx-auto space-y-2 mb-8">
            <li>✨ Beautiful landing page</li>
            <li>✨ “Reserve your spot” button</li>
            <li>✨ Integrated payments</li>
          </ul>
          <p className="text-lg">
            Perfect for testing demand and collecting early supporters.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">💰 Pricing</h2>
        <p className="text-lg mb-6">Choose the plan that fits your journey:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="card bg-base-100 shadow-xl p-6">
            <h3 className="text-2xl font-semibold mb-3">Starter</h3>
            <p className="mb-4">For beginners learning MERN</p>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary w-full"
            >
              Choose Starter
            </a>
          </div>
          <div className="card bg-primary text-primary-content shadow-xl p-6">
            <h3 className="text-2xl font-semibold mb-3">Pro</h3>
            <p className="mb-4">For indie makers launching real products</p>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full"
            >
              Choose Pro
            </a>
          </div>
          <div className="card bg-base-100 shadow-xl p-6">
            <h3 className="text-2xl font-semibold mb-3">Team</h3>
            <p className="mb-4">For agencies or dev teams building SaaS for clients</p>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary w-full"
            >
              Choose Team
            </a>
          </div>
        </div>

        <p className="text-md mb-2">💵 14-day money-back guarantee</p>
        <p className="text-md mb-8">⚡ Lifetime updates included</p>
      </section>

      {/* Early Access Offer */}
      <section className="py-16 bg-base-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">🕓 Early Access Offer</h2>
          <p className="text-lg mb-4">
            Join the early adopters and get lifetime updates at today’s price.
          </p>
          <p className="text-lg mb-8">The price will increase after launch.</p>
          <a
            href="https://karlgusta.gumroad.com/l/mlixgb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Get Early Access
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          🎯 Start building your SaaS today — the fast way.
        </h2>
        <p className="text-xl mb-10">👉 Get SassyPack Now</p>
        <a
          href="https://karlgusta.gumroad.com/l/mlixgb"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          Buy SassyPack
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
