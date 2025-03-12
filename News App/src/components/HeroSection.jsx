import React from 'react';

const HeroSection = () => {
  // Placeholder for breaking news
  const breakingNews = {
    title: "Latest Breaking News: Cricket World Cup Highlights",
    image: "https://i.pinimg.com/736x/d0/95/57/d095573863cb6888450ab167d47caa52.jpg",
    summary: "Exciting moments from the recent cricket tournament that captivated millions of fans worldwide."
  };

  return (
    <section className="responsive-container mt-20 mb-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="card overflow-hidden">
          <img 
            src={breakingNews.image} 
            alt={breakingNews.title} 
            className="w-full h-96 object-cover hover:scale-105 transition-transform"
          />
        </div>

        {/* Breaking News Content */}
        <div className="space-y-4">
          <span className="bg-breaking-news text-white px-3 py-1 rounded-full text-sm">
            Breaking News
          </span>
          <h1 className="text-3xl font-bold text-gray-900">
            {breakingNews.title}
          </h1>
          <p className="text-gray-600">
            {breakingNews.summary}
          </p>
          <button className="btn-accent">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
