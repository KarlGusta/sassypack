import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">SassyPack</h3>
          <p className="text-sm opacity-80">
            Build & Launch your SaaS faster. MERN starter kit with everything you need.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#why">Why SassyPack</a></li>
            <li><a href="#inside">What's Inside</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#early">Early Access</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Connect</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="mailto:karlgusta@gmail.com">Email</a></li>
            <li><a href="https://twitter.com/sassypack_">Twitter</a></li>
            <li><a href="https://karlgusta.gumroad.com/l/mlixgb">Gumroad</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm opacity-70">
        © {new Date().getFullYear()} SassyPack – Built by Karl Gusta
      </div>
    </footer>
  );
};

export default Footer;
