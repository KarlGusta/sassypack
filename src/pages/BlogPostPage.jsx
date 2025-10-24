import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts } from "../blog/blogPosts";
import MainLayout from "../layouts/MainLayout";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <MainLayout>
        <div className="container mx-auto text-center py-20">
          <p className="text-[#F5AF00] text-lg font-semibold">Post not found.</p>
          <Link
            to="/blog"
            className="btn bg-[#F5AF00] text-black mt-6 rounded-full hover:bg-[#d49b00]"
          >
            ← Back to Blog
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-[#212121] min-h-screen py-10 text-[#CFCFCF]">
        <div className="container mx-auto px-6 max-w-3xl bg-[#1B1B1B] rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-extrabold text-[#F5AF00] mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-[#CFCFCF]/70 mb-8">
            {new Date(post.date).toLocaleDateString()}
          </p>

          {/* Markdown content */}
          <article
            className="prose prose-lg max-w-none
              prose-h2:text-[#F5AF00]
              prose-h3:text-[#F5AF00]
              prose-a:text-[#F5AF00]
              prose-strong:text-[#F5AF00]
              prose-p:text-[#CFCFCF]/90
              prose-li:marker:text-[#F5AF00]"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </article>

          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="btn bg-[#F5AF00] text-black btn-sm rounded-full hover:bg-[#d49b00]"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
