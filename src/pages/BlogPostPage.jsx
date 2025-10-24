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
          <p className="text-error text-lg font-semibold">Post not found.</p>
          <Link
            to="/blog"
            className="btn btn-primary mt-6 rounded-full bg-brandPurple text-brandIvory hover:bg-brandPurple/90"
          >
            ← Back to Blog
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-brandIvory min-h-screen py-10">
        <div className="container mx-auto px-6 max-w-3xl bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-extrabold text-brandPurple mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-brandPurple/60 mb-8">
            {new Date(post.date).toLocaleDateString()}
          </p>

          {/* Markdown content */}
          <article
            className="prose prose-lg max-w-none
              prose-h2:text-brandPurple
              prose-h3:text-brandPurple
              prose-a:text-brandGreen
              prose-strong:text-brandPurple
              prose-p:text-brandPurple/90
              prose-li:marker:text-brandPurple"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </article>

          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="btn btn-sm rounded-full bg-brandPurple text-brandIvory hover:bg-brandPurple/90"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
