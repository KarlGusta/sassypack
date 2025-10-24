import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blog/blogPosts";
import MainLayout from "../layouts/MainLayout";

export default function BlogListPage() {
  return (
    <MainLayout>
      <div className="container mx-auto p-6 bg-[#212121] min-h-screen text-[#CFCFCF]">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-[#F5AF00]">
          Insights from FurnishlyAI
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="card bg-[#212121] border border-[#3a3a3a] shadow-lg hover:shadow-xl transition-all rounded-2xl p-6"
            >
              <h2 className="text-2xl font-semibold text-[#F5AF00] mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-[#CFCFCF]/70 mb-4">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-[#CFCFCF]/90 mb-6 line-clamp-3">
                {post.description}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="btn btn-sm bg-[#F5AF00] text-black hover:bg-[#d49b00] rounded-full"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
