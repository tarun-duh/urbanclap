import React from "react";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import Cta from "../components/Cta";

const page = () => {
  const blogData = [
    {
      image: "/images/cleaning1.jpg",
      title:
        "Top 5 Reasons to Hire a Professional Cleaning Service for Your Home",
      excerpt:
        "Talk about time-saving, better hygiene, and stress reduction. Include tips on how professional cleaners tackle things differently than DIY cleaning.",
    },
    {
      image: "/images/cleaning1.jpg",
      title: "How a Clean Office Boosts Productivity and Employee Health",
      excerpt:
        "Educate customers on surface cleaning vs deep cleaning (e.g., carpet shampooing, window washing, etc.) Perfect to promote deep cleaning packages.",
    },
    {
      image: "/images/cleaning1.jpg",
      title: "Cleaning Myths Busted: What You Think Works But Doesn’t",
      excerpt:
        "Bust common myths like “vinegar cleans everything” or “bleach is always safe.” Offers trust-building education while promoting your expert services.",
    },
    {
      image: "/images/cleaning1.jpg",
      title: "Eco-Friendly Cleaning: Why We Use Green Products",
      excerpt:
        "Talk about your commitment to safe, eco-conscious cleaning solutions. Good for SEO and appealing to eco-conscious clients.",
    },
    {
      image: "/images/cleaning1.jpg",
      title:
        "Daily vs. Deep Cleaning: What’s the Difference and Why Both Matter?",
      excerpt:
        "Educate customers on surface cleaning vs deep cleaning (e.g., carpet shampooing, window washing, etc.).Perfect to promote deep cleaning packages.",
    },
    {
      image: "/images/cleaning1.jpg",
      title: "Move-In/Move-Out Cleaning Checklist You’ll Wish You Had Sooner",
      excerpt:
        "Share an actual checklist of tasks done during this service. Great content to drive conversions around relocation seasons.",
    },
  ];

  return (
    <>
      <Hero
        heading={"Blog"}
        para={"News and updates"}
        bgImg="/images/blogHero.jpg"
      />
      <section className="py-10 md:py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>
      <Cta
      // heading=""
      // subtext=""
      // bgImage=""
      />
    </>
  );
};

export default page;
