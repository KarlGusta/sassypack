import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blog/blogPosts";
import MainLayout from "../layouts/MainLayout";

export default function BlogListPage() {
  return (
    <MainLayout>
      <div className="container mx-auto p-6 bg-brandIvory min-h-screen">
        <h1 className="text-4xl font-extrabold text-center text-brandPurple mb-10">
          Insights from FurnishlyAI
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="card bg-white border border-brandPurple/10 shadow-lg hover:shadow-xl transition-all rounded-2xl p-6"
            >
              <h2 className="text-2xl font-semibold text-brandPurple mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-brandPurple/60 mb-4">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-brandPurple/80 mb-6 line-clamp-3">
                {post.description}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="btn btn-sm bg-brandPurple text-brandIvory hover:bg-brandPurple/90 rounded-full"
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
