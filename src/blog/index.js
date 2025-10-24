import raw from "raw.macro";

// Import your markdown file as raw text
const findRightInfluencers = raw("./posts/find-right-influencers.md");

const posts = [
  {
    slug: "find-right-influencers",
    title: "How to Find the Right Influencers for Your Startup",
    date: "10/17/2025",
    content: findRightInfluencers,
  },
];

export default posts;
