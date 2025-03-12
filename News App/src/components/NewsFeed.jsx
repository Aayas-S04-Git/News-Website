import React, { useState } from 'react';

const NewsFeed = () => {
  // Placeholder news articles
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Cricket Strategy Revolution",
      category: "Sports",
      image: "https://i.pinimg.com/736x/94/ad/e2/94ade2a390d0344dded1cf3a69b69b85.jpg",
      summary: "Innovative tactics changing the face of modern cricket."
    },
    
    {
      id: 2,
      title: "Tech Innovations in Sports",
      category: "Technology",
      image: "https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg",
      summary: "How technology is transforming sports performance and analysis."
    },
    {
      id: 3,
      title: "Global Economic Trends",
      category: "Business",
      image: "https://i.pinimg.com/236x/42/b7/e3/42b7e3e204ad93f3e39e7bd37b0bfb1f.jpg",
      summary: "Emerging markets and investment opportunities in 2024."
    },
    {
      id: 4,
      title: "Health and Wellness",
      category: "Health",
      image: "https://i.pinimg.com/736x/54/fa/ca/54facabf95a6b95acd2d085deb505816.jpg",
      summary: "Latest breakthroughs in medical research and fitness."
    },
    {
      id: 5,
      title: "Sustainable Living",
      category: "Health",
      image: "https://i.pinimg.com/736x/54/fa/ca/54facabf95a6b95acd2d085deb505816.jpg",
    },
    {
      id: 6,
      title: "Sustainable Living",
      category: "Sports",
      image: "https://i.pinimg.com/736x/54/fa/ca/54facabf95a6b95acd2d085deb505816.jpg",
    },
    {
      id: 7,
      title: "Sustainable Living",
      category: "Environment",
      image: "https://i.pinimg.com/736x/54/fa/ca/54facabf95a6b95acd2d085deb505816.jpg",
    },
    {
      id: 8,
      title: "Sustainable Living",
      category: "Environment",
      image: "https://i.pinimg.com/736x/54/fa/ca/54facabf95a6b95acd2d085deb505816.jpg",
    }
  ]);

  return (
    <section className="my-10 responsive-container">
      <h2 className="mb-6 text-2xl font-bold">Latest News</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <div key={article.id} className="card">
            <img 
              src={article.image} 
              alt={article.title} 
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <span className="inline-block px-2 py-1 mb-2 text-xs text-white rounded-full bg-primary">
                {article.category}
              </span>
              <h3 className="mb-2 text-lg font-bold">{article.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{article.summary}</p>
              <button className="text-sm btn-primary">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
