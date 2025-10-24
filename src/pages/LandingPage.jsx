import React from "react";
import MainLayout from "../layouts/MainLayout";

const LandingPage = () => {
  return (
    <MainLayout>
      <main className="min-h-screen bg-[#212121] text-[#CFCFCF]">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#212121] text-[#CFCFCF]">
          {/* Animated background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F5AF00] rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#CFCFCF] rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-[#F5AF00]/20 rounded-full text-[#F5AF00] text-sm font-medium animate-fade-in">
              ⚡ Ship SaaS projects in days, not months
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-[#F5AF00] animate-fade-in-up">
              Build & Launch<br />5× Faster
            </h1>

            <p
              className="text-xl md:text-2xl mb-8 text-[#CFCFCF]/80 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              The complete MERN SaaS starter kit with auth, payments, and analytics built-in
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="https://karlgusta.gumroad.com/l/mlixgb"
                className="btn bg-[#F5AF00] hover:bg-[#d49b00] border-none text-black btn-lg gap-2 hover:scale-105 transition-transform shadow-lg"
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
                <span className="font-semibold text-[#CFCFCF]">$29</span> · Lifetime updates
              </div>
            </div>

            <div
              className="mt-12 flex items-center justify-center gap-6 text-sm text-[#CFCFCF]/60 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#F5AF00]"></div>
                <div className="w-8 h-8 rounded-full bg-[#CFCFCF]"></div>
                <div className="w-8 h-8 rounded-full bg-[#F5AF00]/70"></div>
              </div>
              <span>Trusted by indie makers worldwide</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-[#CFCFCF]/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Features */}
        <section className="py-32 px-6 bg-[#1B1B1B]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F5AF00]">
              Everything you need
            </h2>
            <p className="text-xl text-[#CFCFCF]/70 mb-16">
              Production-ready features out of the box
            </p>

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
                  className="group p-6 bg-[#212121] border border-[#3a3a3a] rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#F5AF00]">
                    {feature.title}
                  </h3>
                  <p className="text-[#CFCFCF]/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center bg-[#2A2A2A] relative">
          <div className="absolute inset-0 bg-[#F5AF00]/10 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F5AF00]">
              Ready to build your SaaS?
            </h2>
            <p className="text-xl text-[#CFCFCF]/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of developers who are shipping faster with SassyPack
            </p>
            <a
              href="https://karlgusta.gumroad.com/l/mlixgb"
              className="btn bg-[#F5AF00] hover:bg-[#d49b00] border-none text-black btn-lg gap-2 hover:scale-105 transition-transform shadow-xl"
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
