import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-[#CFCFCF] py-12 px-6 mt-20 border-t border-[#2b2b2b]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-[#F5AF00]">SassyPack</h3>
          <p className="text-sm text-[#CFCFCF]/80">
            Build & launch your SaaS faster, MERN starter kit with everything you need.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-[#F5AF00]">Links</h3>
          <ul className="space-y-2 text-sm text-[#CFCFCF]/80">
            <li><a href="#why" className="hover:text-[#F5AF00] transition-colors">Why SassyPack</a></li>
            <li><a href="#inside" className="hover:text-[#F5AF00] transition-colors">What's Inside</a></li>
            <li><a href="#pricing" className="hover:text-[#F5AF00] transition-colors">Pricing</a></li>
            <li><a href="#early" className="hover:text-[#F5AF00] transition-colors">Early Access</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-[#F5AF00]">Connect</h3>
          <ul className="space-y-2 text-sm text-[#CFCFCF]/80">
            <li>
              <a
                href="mailto:karlgusta@gmail.com"
                className="hover:text-[#F5AF00] transition-colors"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sassypack_"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F5AF00] transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://karlgusta.gumroad.com/l/mlixgb"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F5AF00] transition-colors"
              >
                Gumroad
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Built with SassyPack Button */}
      <div className="mt-10 text-center">
        <a
          href="https://sassypack.collabtower.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#F5AF00] hover:bg-[#d49b00] text-black font-semibold px-5 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Built with SassyPack
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-[#CFCFCF]/70">
        © {new Date().getFullYear()} SassyPack
      </div>
    </footer>
  );
};

export default Footer;
