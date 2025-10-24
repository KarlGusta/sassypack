import React from "react";
import MainLayout from "../layouts/MainLayout";

const LandingPage = () => {
  return (
    <MainLayout>
    <main className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in">
            ⚡ Ship SaaS projects in days, not months
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up">
            Build & Launch<br />5× Faster
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-base-content/70 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            The complete MERN SaaS starter kit with auth, payments, and analytics built-in
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              className="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get SassyPack
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <div className="text-sm text-base-content/60">
              <span className="font-semibold text-base-content">$29</span> · Lifetime updates
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-base-content/60 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary"></div>
            </div>
            <span>Trusted by indie makers worldwide</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything you need</h2>
            <p className="text-xl text-base-content/60">Production-ready features out of the box</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔑", title: "Authentication", desc: "Secure signup, login & sessions" },
              { icon: "💳", title: "Payments", desc: "Paystack & Stripe integrated" },
              { icon: "📊", title: "Analytics", desc: "PostHog tracking built-in" },
              { icon: "🔒", title: "Protected Routes", desc: "Role-based access control" },
              { icon: "👤", title: "User Profiles", desc: "Customizable user pages" },
              { icon: "🎨", title: "DaisyUI Styled", desc: "Beautiful, responsive design" }
            ].map((feature, i) => (
              <div 
                key={i}
                className="group p-6 bg-base-100 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300 hover:border-primary/50"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-base-content/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Skip the setup.<br />Start shipping.</h2>
              <p className="text-lg text-base-content/70 mb-8">
                Stop wasting weeks on boilerplate. SassyPack gives you a production-ready foundation so you can focus on what makes your SaaS unique.
              </p>
              <ul className="space-y-4">
                {[
                  "Save 40+ hours of setup time",
                  "Clean, maintainable codebase",
                  "Scales with your growth",
                  "Regular updates & improvements"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-base-100 rounded-2xl p-8 shadow-2xl border border-base-300">
                <div className="space-y-3 mb-6">
                  <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                  <div className="h-3 bg-secondary/20 rounded w-1/2"></div>
                  <div className="h-3 bg-accent/20 rounded w-5/6"></div>
                </div>
                <div className="bg-base-200 rounded-lg p-4 space-y-2">
                  <div className="h-2 bg-primary/30 rounded w-full"></div>
                  <div className="h-2 bg-primary/30 rounded w-4/5"></div>
                </div>
                <div className="absolute -top-4 -right-4 bg-success text-success-content px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Ready to use ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple pricing</h2>
            <p className="text-xl text-base-content/60">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                color: "success",
                features: [
                  "Full MERN SaaS Kit",
                  "Auth & Payments",
                  "Early Access Template",
                  "3 months updates"
                ],
                cta: "Get Started"
              },
              {
                name: "Pro",
                price: "$79",
                color: "primary",
                popular: true,
                features: [
                  "Everything in Starter",
                  "Lifetime updates",
                  "All templates included",
                  "Email support"
                ],
                cta: "Get Pro"
              },
              {
                name: "Team",
                price: "$149",
                color: "secondary",
                features: [
                  "Everything in Pro",
                  "Commercial license",
                  "Priority support",
                  "Feature priority"
                ],
                cta: "Get Team"
              }
            ].map((tier, i) => (
              <div 
                key={i}
                className={`relative p-8 bg-base-100 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  tier.popular ? 'border-primary scale-105' : 'border-base-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-5xl font-extrabold mb-2">{tier.price}</div>
                  <p className="text-sm text-base-content/60">one-time payment</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://karlgusta.gumroad.com/l/mlixgb"
                  className={`btn btn-${tier.color} btn-block`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-2">
            <p className="text-sm text-base-content/60">💵 14-day money-back guarantee</p>
            <p className="text-sm text-base-content/60">⚡ Lifetime updates included</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build your SaaS?
          </h2>
          <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers who are shipping faster with SassyPack
          </p>
          <a
            href="https://karlgusta.gumroad.com/l/mlixgb"
            className="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get SassyPack Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
    </MainLayout>
  );
};

export default LandingPage;