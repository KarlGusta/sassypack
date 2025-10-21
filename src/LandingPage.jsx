import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Navbar */}
      <div className="navbar bg-[#FFF1EB] border-b border-[#3D065F]/10 shadow-md px-4">
        {/* Left side */}
        <div className="navbar-start gap-3">
          <Link to="/" className="font-extrabold text-lg text-[#3D065F]">
            Collab Tower
          </Link>
        </div>

        {/* Middle Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <a href="#startups" className="text-[#3D065F] hover:text-[#3D065F]/80">For Startups</a>
            </li>
            <li>
              <a href="#influencers" className="text-[#3D065F] hover:text-[#3D065F]/80">For Influencers</a>
            </li>
            <li>
              <a href="#how" className="text-[#3D065F] hover:text-[#3D065F]/80">How It Works</a>
            </li>
            <li>
              <a href="#why" className="text-[#3D065F] hover:text-[#3D065F]/80">Why Us</a>
            </li>
            <li>
              <a href="#pricing" className="text-[#3D065F] hover:text-[#3D065F]/80">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end gap-3">
          <Link
            to="/login"
            className="btn btn-sm rounded-full bg-black text-white hover:bg-neutral-900 border-transparent"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#FFF1EB] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#3D065F]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#3D065F]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3D065F]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#3D065F]/10 backdrop-blur-sm border border-[#3D065F]/20 rounded-full px-6 py-2 mb-8 animate-pulse">
            <span className="text-sm font-semibold text-[#3D065F]">
              Where Brands Meet Influence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#3D065F] mb-6 leading-tight">
            Swipe Right
            <br />
            <span className="text-[#3D065F]">on Growth</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#3D065F]/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            From Tech to Travel, Beauty to Gaming,{" "}
            <strong className="text-[#3D065F]">Collab Tower</strong> instantly
            connects startups with influencers who fit their brand.
            <span className="block mt-2">
              No cold emails. No wasted time. Just real collaborations that
              drive growth.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/register"
              className="btn btn-lg rounded-full px-10 bg-black text-white hover:bg-neutral-900 border-transparent"
            >
              <span className="flex items-center gap-2">
                Join Collab Tower
                <span className="transition-transform">→</span>
              </span>
            </Link>
            <a
              href="#how"
              className="btn btn-outline btn-lg rounded-full px-10 border-[#3D065F] text-[#3D065F] hover:bg-[#3D065F]/10"
            >
              See How It Works
            </a>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#3D065F]/70">Lightning fast matches</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3D065F]/70">Perfect brand alignment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3D065F]/70">Launch campaigns in days</span>
            </div>
          </div>
        </div>
      </section>

      {/* For Startups */}
      <section
        id="startups"
        className="py-20 bg-[#FFF1EB] relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#3D065F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3D065F]/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D065F] mb-4">
              Built for Startups
            </h2>
            <p className="text-lg text-[#3D065F]/70 max-w-2xl mx-auto">
              Stop chasing influencers. Start matching with them.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative">
              <div className="relative bg-[#3D065F] text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3D065F]/30 h-full">
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-3">
                  Perfect Match System
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Connect with influencers who truly align with your brand
                  values, audience, and goals.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="relative bg-[#E5FFC3] text-[#013330] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#013330]/10 h-full">
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-3">
                  Every Industry Covered
                </h3>
                <p className="leading-relaxed">
                  From Technology and Healthcare to Fashion, Gaming, and
                  Fitness—discover influencers in your niche.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="relative bg-[#190066] text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#190066]/30 h-full">
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-3">
                  Lightning Fast Campaigns
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Launch campaigns in days, not weeks. Grow your audience
                  without the endless back-and-forth.
                </p>
              </div>
            </div>
          </div>

          {/* CTA bar */}
          <div className="mt-16 bg-[#3D065F]/10 rounded-2xl p-8 backdrop-blur-sm border border-[#3D065F]/20 text-center">
            <p className="text-lg text-[#3D065F]/80 mb-4">
              Join our growing community of startups and influencers
            </p>
            <Link
              to="/register"
              className="btn rounded-full bg-black text-white hover:bg-neutral-900 border-transparent btn-sm"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* For Influencers */}
      <section
        id="influencers"
        className="py-20 bg-[#E5FFC3] relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#013330]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#013330]/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#013330] mb-4">
              Built for Influencers
            </h2>
            <p className="text-lg text-[#013330]/80 max-w-2xl mx-auto">
              Turn your influence into income with brands that actually match
              your vibe.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative">
              <div className="relative bg-[#013330] text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#013330]/30 h-full">
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-3">
                  Real Collaborations
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Connect with startups actively seeking authentic partnerships,
                  not just transactional posts.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="relative bg-white text-[#013330] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#013330]/10 h-full">
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-3">
                  Monetize Your Reach
                </h3>
                <p className="leading-relaxed">
                  Get paid for partnerships that align with your content and
                  resonate with your audience.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="relative bg-[#EAC2FF] text-[#3D065F] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3D065F]/10 h-full">
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-3">
                  Your Niche, Your Way
                </h3>
                <p className="leading-relaxed">
                  Work with brands across every industry that match your unique
                  style and audience demographics.
                </p>
              </div>
            </div>
          </div>

          {/* CTA bar */}
          <div className="mt-16 bg-white/60 rounded-2xl p-8 backdrop-blur-sm border border-[#013330]/10 text-center">
            <p className="text-lg text-[#013330]/80 mb-4">
              Be among the first influencers to shape the future of brand
              collaborations
            </p>
            <Link
              to="/register"
              className="btn rounded-full bg-black text-white hover:bg-neutral-900 border-transparent btn-sm"
            >
              Join as an Influencer
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how"
        className="py-20 bg-[#FFA680] relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D065F] mb-4">
              How It Works
            </h2>
            <p className="text-lg text-[#3D065F]/80 max-w-2xl mx-auto">
              Three simple steps to transform your brand collaborations
            </p>
          </div>

          {/* Timeline Flow */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2"></div>

            <div className="grid gap-8 md:grid-cols-3 relative">
              {/* Step 1 */}
              <div className="group relative">
                <div className="relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent transform group-hover:-translate-y-2 bg-[#E5FFC3] text-[#0D3D37]">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-[#0D3D37] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      1
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"></div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-center">
                    Create Your Profile
                  </h3>
                  <p className="text-[#0D3D37]/80 text-center leading-relaxed">
                    Choose your path—Startup or Influencer. Tell us your story,
                    your niche, and what makes you unique.
                  </p>

                  {/* Decorative Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#0D3D37]/40 text-2xl group-hover:text-[#0D3D37] group-hover:translate-x-1 transition-all">
                    →
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <div className="relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent transform group-hover:-translate-y-2 bg-white text-[#013330]">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-[#013330] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      2
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"></div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-center">
                    Swipe & Match
                  </h3>
                  <p className="text-[#013330]/80 text-center leading-relaxed">
                    Discover perfect collaborations with our smart matching
                    algorithm. Swipe right on opportunities that excite you.
                  </p>

                  {/* Decorative Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#013330]/40 text-2xl group-hover:text-[#013330] group-hover:translate-x-1 transition-all">
                    →
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <div className="relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent transform group-hover:-translate-y-2 bg-[#EAC2FF] text-[#3D065F]">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-[#3D065F] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      3
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"></div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-center">
                    Chat & Launch
                  </h3>
                  <p className="text-[#3D065F]/80 text-center leading-relaxed">
                    Connect directly, negotiate terms, and launch campaigns that
                    drive real results. Growth starts here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-[#3D065F]/80 mb-6 text-lg">
              Ready to get started? It takes less than 2 minutes.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 btn btn-lg rounded-full px-10 bg-black text-white hover:bg-neutral-900 border-transparent hover:scale-105 transition-transform"
            >
              <span>Start Your Journey</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Collab Tower */}
      <section
        id="why"
        className="py-20 bg-[#FFF1EB] relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#3D065F]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#013330]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D065F] mb-4">
              Why Collab Tower?
            </h2>
            <p className="text-lg text-[#3D065F]/80 max-w-2xl mx-auto">
              We're not just another platform. We're your growth partner.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#3D065F]/20 transform group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#3D065F] text-white flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-[#3D065F] mb-4">
                  Zero Noise
                </h3>
                <p className="text-[#3D065F]/80 leading-relaxed mb-4">
                  Our smart algorithm cuts through the clutter. Every match is
                  relevant, every connection is intentional.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#3D065F]/70">
                  <span className="w-2 h-2 rounded-full bg-[#3D065F]"></span>
                  <span>Smart precision matching</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#013330]/20 transform group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#013330] text-white flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-[#013330] mb-4">
                  Win-Win Always
                </h3>
                <p className="text-[#013330]/80 leading-relaxed mb-4">
                  Built for mutual growth. Fair partnerships where both brands
                  and influencers thrive together.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#013330]/70">
                  <span className="w-2 h-2 rounded-full bg-[#013330]"></span>
                  <span>Transparent collaboration terms</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#3D065F]/20 transform group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#3D065F] text-white flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold text-[#3D065F] mb-4">
                  Swipe Simple
                </h3>
                <p className="text-[#3D065F]/80 leading-relaxed mb-4">
                  No complex dashboards. No steep learning curves. Just swipe,
                  match, and grow—it's that intuitive.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#3D065F]/70">
                  <span className="w-2 h-2 rounded-full bg-[#3D065F]"></span>
                  <span>Launch campaigns in minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 bg-white/70 rounded-3xl p-8 backdrop-blur-sm border border-[#3D065F]/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group cursor-default">
                <div className="text-4xl md:text-5xl font-black text-[#3D065F] mb-2 group-hover:scale-110 transition-transform">
                  10x
                </div>
                <div className="text-[#3D065F]/80 text-sm">
                  Faster than traditional outreach
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl md:text-5xl font-black text-[#3D065F] mb-2 group-hover:scale-110 transition-transform">
                  95%
                </div>
                <div className="text-[#3D065F]/80 text-sm">
                  Match relevance accuracy
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl md:text-5xl font-black text-[#3D065F] mb-2 group-hover:scale-110 transition-transform">
                  2min
                </div>
                <div className="text-[#3D065F]/80 text-sm">
                  Average setup time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-[#FFF1EB] relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3D065F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#013330]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D065F] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-[#3D065F]/80 max-w-2xl mx-auto">
              Choose the plan that fits your ambitions. No hidden fees, cancel
              anytime.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="group relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#3D065F]/20 group-hover:border-[#3D065F]/40 transform group-hover:-translate-y-2 h-full flex flex-col">
                {/* Plan Badge */}
                <div className="inline-flex items-center gap-2 self-start bg-[#3D065F]/10 rounded-full px-4 py-1 mb-6">
                  <span className="text-sm font-semibold text-[#3D065F]">
                    STARTER
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-[#3D065F]">$9</span>
                    <span className="text-[#3D065F]/70">/month</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#3D065F]/80 mb-8">
                  Perfect for solopreneurs & emerging influencers testing the
                  waters.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm">
                      50 swipes per month
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm">
                      Basic matching
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm">
                      Profile customization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm">
                      Email notifications
                    </span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link
                  to="/register"
                  className="btn btn-outline btn-block rounded-full hover:bg-[#3D065F]/5 border-[#3D065F] text-[#3D065F]"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Pro Plan (Featured) */}
            <div className="group relative md:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3D065F]/30 to-[#EAC2FF]/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#EAC2FF]/30 to-[#E5FFC3]/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#3D065F]/40 group-hover:border-[#3D065F]/60 transform group-hover:-translate-y-2 h-full flex flex-col">
                {/* Plan Badge */}
                <div className="inline-flex items-center gap-2 self-start bg-[#3D065F]/20 rounded-full px-4 py-1 mb-6">
                  <span className="text-sm font-semibold text-[#3D065F]">
                    PRO
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-[#3D065F]">
                      $19
                    </span>
                    <span className="text-[#3D065F]/80">/month</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#3D065F]/80 mb-8 font-medium">
                  For serious startups & agencies ready to scale their
                  influence.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm font-medium">
                      Unlimited swipes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm font-medium">
                      Enhanced matching
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm font-medium">
                      Priority support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm font-medium">
                      Campaign analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm font-medium">
                      Advanced filters
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3D065F] mt-1">—</span>
                    <span className="text-[#3D065F]/80 text-sm font-medium">
                      Team collaboration
                    </span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link
                  to="/register"
                  className="btn rounded-full bg-black text-white hover:bg-neutral-900 shadow-lg hover:shadow-xl transition-all group-hover:scale-105 border-transparent"
                >
                  Choose Pro
                </Link>
              </div>
            </div>

            {/* Lifetime Plan */}
            <div className="group relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#013330]/20 group-hover:border-[#013330]/40 transform group-hover:-translate-y-2 h-full flex flex-col">
                {/* Plan Badge */}
                <div className="inline-flex items-center gap-2 self-start bg-[#013330]/10 rounded-full px-4 py-1 mb-6">
                  <span className="text-sm font-semibold text-[#013330]">
                    LIFETIME
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-[#013330]">
                      $199
                    </span>
                  </div>
                  <div className="text-sm text-[#013330] font-semibold mt-2">
                    One-time payment
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#013330]/80 mb-4">
                  Lock in Pro features forever. Only 50 spots available for
                  early believers.
                </p>
                <div className="bg-[#013330]/10 rounded-lg p-3 mb-8">
                  <p className="text-xs text-[#013330]/80">
                    <span className="font-bold text-[#013330]">
                      Early Bird Special:
                    </span>{" "}
                    Save $300+ over 2 years
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <span className="text-[#013330] mt-1">—</span>
                    <span className="text-[#013330]/80 text-sm">
                      Everything in Pro
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#013330] mt-1">—</span>
                    <span className="text-[#013330]/80 text-sm">
                      Lifetime access
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#013330] mt-1">—</span>
                    <span className="text-[#013330]/80 text-sm">
                      All future features
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#013330] mt-1">—</span>
                    <span className="text-[#013330]/80 text-sm">
                      Early access to new tools
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#013330] mt-1">—</span>
                    <span className="text-[#013330]/80 text-sm">
                      Priority feature requests
                    </span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link
                  to="/register"
                  className="btn btn-outline btn-block rounded-full border-[#013330] text-[#013330] hover:bg-[#013330]/5"
                >
                  Claim Your Spot
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Signal */}
          <div className="mt-16 text-center">
            <p className="text-[#3D065F]/70 text-sm mb-4">
              All plans include 14-day money-back guarantee
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-[#3D065F]/60">
              <span className="flex items-center gap-2">Secure Checkout</span>
              <span className="flex items-center gap-2">Cancel Anytime</span>
              <span className="flex items-center gap-2">No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 bg-[#E5FFC3] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#013330]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3D065F]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Main Content Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EAC2FF]/40 via-[#FFF1EB]/40 to-[#E5FFC3]/40 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

            {/* Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 shadow-2xl border border-[#013330]/20">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-[#013330]/10 backdrop-blur-sm border border-[#013330]/30 rounded-full px-6 py-3 mb-8">
                <span className="text-sm font-bold text-[#013330] tracking-wide">
                  LIMITED TIME OFFER
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#3D065F] mb-6 leading-tight">
                Stop Scrolling.
                <br />
                <span className="text-[#013330]">Start Growing.</span>
              </h2>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-[#013330]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Be among the <strong className="text-[#013330]">first</strong> to
                experience the future of influencer marketing.
                <span className="block mt-2 text-lg">
                  Your next breakthrough collaboration starts here.
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/register"
                  className="btn btn-lg rounded-full px-12 bg-black text-white hover:bg-neutral-900 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-transparent"
                >
                  <span className="flex items-center gap-3 text-lg font-bold">
                    Start Your Journey
                    <span className="text-2xl">→</span>
                  </span>
                </Link>

                <div className="text-sm text-[#013330]/70">
                  14-day money-back guarantee
                </div>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-[#013330]/10">
                <div className="flex items-center gap-2 text-[#013330]/80">
                  <span className="text-sm">2-min setup</span>
                </div>
                <div className="flex items-center gap-2 text-[#013330]/80">
                  <span className="text-sm">100% Secure</span>
                </div>
                <div className="flex items-center gap-2 text-[#013330]/80">
                  <span className="text-sm">Instant matches</span>
                </div>
                <div className="flex items-center gap-2 text-[#013330]/80">
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex justify-center items-center gap-2 text-[#013330]/60 text-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#3D065F] border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-[#013330] border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-[#3D065F] border-2 border-white"></div>
            </div>
            <span>Trusted by industry leaders worldwide</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-6 bg-[#3D065F] text-white/70">
        <p>© {new Date().getFullYear()} Collab Tower. All rights reserved.</p>
      </footer>
    </div>
  );
}