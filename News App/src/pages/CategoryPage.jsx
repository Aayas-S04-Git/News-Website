import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  // News data for different categories
  const categoryNews = {
    world: [
      { 
        id: 1, 
        title: "Global Diplomatic Developments", 
        image: "https://i.pinimg.com/736x/c9/31/09/c9310941a59da8bbe17d57f479cdc454.jpg",
        summary: "Latest international relations and global political landscape."
      },
      { 
        id: 2, 
        title: "International Economic Trends", 
        image: "https://i.pinimg.com/736x/38/da/97/38da978db90c32330f9b6702a56fc3b4.jpg",
        summary: "Insights into global economic shifts and market dynamics."
      },
      {
        id: 3,
        title: "Climate Change Global Summit",
        image: "https://i.pinimg.com/736x/86/47/27/8647274aa30a03c703e6b3710f29e877.jpg",
        summary: "World leaders discuss critical environmental strategies and commitments."
      },
      {
        id: 4,
        title: "Global Health Initiatives",
        image: "https://i.pinimg.com/736x/86/47/27/8647274aa30a03c703e6b3710f29e877.jpg",
        summary: "Efforts to address public health challenges and promote well-being worldwide."
      },
      {
        id: 5,
        title: "Global Health Initiatives",
        image: "https://i.pinimg.com/736x/86/47/27/8647274aa30a03c703e6b3710f29e877.jpg",
        summary: "Efforts to address public health challenges and promote well-being worldwide."
      },
      {
        id: 6,
        title: "Global Health Initiatives",
        image: "https://i.pinimg.com/736x/86/47/27/8647274aa30a03c703e6b3710f29e877.jpg",
        summary: "Efforts to address public health challenges and promote well-being worldwide."
      }
    ],
    business: [
      {
        id: 1,
        title: "Tech Industry Innovations",
        image: "https://i.pinimg.com/736x/42/b7/e3/42b7e3e204ad93f3e39e7bd37b0bfb1f.jpg",
        summary: "Emerging startups and breakthrough technologies reshaping global markets."
      },
      {
        id: 2,
        title: "Sustainable Investment Trends",
        image: "https://i.pinimg.com/474x/c5/9d/d5/c59dd5ec3de296a584e3e39489005104.jpg",
        summary: "Green finance and ethical investment strategies gaining momentum."
      },
      {
        id: 3,
        title: "Global Trade Dynamics",
        image: "https://i.pinimg.com/736x/fa/01/b1/fa01b1cd6a0f79e6243c8cfcd5bcf868.jpg",
        summary: "Analyzing international trade agreements and economic partnerships."
      },
      {
        id: 4,
        title: "Entrepreneurship Success Stories",
        image: "https://i.pinimg.com/736x/42/b7/e3/42b7e3e204ad93f3e39e7bd37b0bfb1f.jpg",
        summary: "Inspiring journeys of startup founders and business leaders."
      },
      {
        id: 5,
        title: "Entrepreneurship Success Stories",
        image: "https://i.pinimg.com/736x/42/b7/e3/42b7e3e204ad93f3e39e7bd37b0bfb1f.jpg",
        summary: "Inspiring journeys of startup founders and business leaders."
      },
      {
        id: 6,
        title: "Entrepreneurship Success Stories",
        image: "https://i.pinimg.com/736x/42/b7/e3/42b7e3e204ad93f3e39e7bd37b0bfb1f.jpg",
        summary: "Inspiring journeys of startup founders and business leaders."
      }
    ],
    sports: [
      {
        id: 1,
        title: "Cricket World Cup Highlights",
        image: "https://i.pinimg.com/736x/94/ad/e2/94ade2a390d0344dded1cf3a69b69b85.jpg",
        summary: "Exciting moments and top performances from recent cricket tournaments."
      },
      {
        id: 2,
        title: "Olympic Preparations",
        image: "https://i.pinimg.com/236x/66/71/7e/66717e880b952959a1657a8ebf21dbc6.jpg",
        summary: "Athletes training and qualifying for upcoming international competitions."
      },
      {
        id: 3,
        title: "Sports Technology Advancements",
        image: "https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg",
        summary: "Innovative technologies transforming athlete performance and training."
      },
      {
        id: 4,
        title: "Football Transfer Rumors",
        image: "https://i.pinimg.com/736x/94/ad/e2/94ade2a390d0344dded1cf3a69b69b85.jpg",
        summary: "Latest speculations and updates on football player transfers."
      },
      {
        id: 5,
        title: "Football Transfer Rumors",
        image: "https://i.pinimg.com/736x/94/ad/e2/94ade2a390d0344dded1cf3a69b69b85.jpg",
        summary: "Latest speculations and updates on football player transfers."
      },
      {
        id: 6,
        title: "Football Transfer Rumors",
        image: "https://i.pinimg.com/736x/94/ad/e2/94ade2a390d0344dded1cf3a69b69b85.jpg",
        summary: "Latest speculations and updates on football player transfers."
      }
    ],
    entertainment: [
      {
        id: 1,
        title: "Hollywood Blockbuster Releases",
        image: "https://i.pinimg.com/474x/4c/e7/1c/4ce71c8bbfceb14dce860f68df7ce86f.jpg",
        summary: "Upcoming movies and behind-the-scenes insights from the film industry."
      },
      {
        id: 2,
        title: "Music Festival Highlights",
        image: "https://i.pinimg.com/236x/65/59/67/655967149dc64f8128fd9c8502d16dfe.jpg",
        summary: "Top performances and trending artists from global music events."
      },
      {
        id: 3,
        title: "Streaming Platform Innovations",
        image: "https://i.pinimg.com/236x/b9/8d/0b/b98d0b9a6f7da912e281f22b26130215.jpg",
        summary: "New content strategies and technological advancements in entertainment."
      }
    ],
    technology: [
      {
        id: 1,
        title: "AI and Machine Learning Breakthroughs",
        image: "https://i.pinimg.com/474x/e2/29/67/e229672c83df7d5ffafcf6ec258a8bd7.jpg",
        summary: "Latest developments in artificial intelligence and their real-world applications."
      },
      {
        id: 2,
        title: "Cybersecurity Innovations",
        image: "https://i.pinimg.com/736x/b9/b4/a6/b9b4a61db4f7fcbee0825e84dff8ae07.jpg",
        summary: "Cutting-edge strategies to protect digital infrastructure and personal data."
      },
      {
        id: 3,
        title: "Quantum Computing Advancements",
        image: "https://i.pinimg.com/736x/86/c0/3c/86c03c98f5be1bf2bdd9a5c005509793.jpg",
        summary: "Breakthrough research and potential applications of quantum technologies."
      }
    ]
  };

  useEffect(() => {
    // Normalize category to lowercase
    const normalizedCategory = category.toLowerCase();
    
    // Set articles for the current category
    if (categoryNews[normalizedCategory]) {
      setArticles(categoryNews[normalizedCategory]);
    } else {
      setArticles([]);
    }
  }, [category]);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center capitalize">
        {category} News
      </h1>
      
      {articles.length === 0 ? (
        <div className="text-center text-gray-600">
          No articles found for this category.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              <img 
                src={article.image} 
                alt={article.title} 
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">{article.title}</h2>
                <p className="text-gray-600">{article.summary}</p>
                <button className="px-4 py-2 mt-4 text-white rounded-full bg-primary hover:bg-opacity-90">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
