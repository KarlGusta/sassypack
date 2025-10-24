import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import LandingPage from "./pages/LandingPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";

function App() {
  // Initialize AOS once when app loads
  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed in ms
      once: true,    // animate only once per section
      easing: "ease-out-cubic",
    });
  }, []);

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Public Blog Routes */}
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
  );
}

export default App;
