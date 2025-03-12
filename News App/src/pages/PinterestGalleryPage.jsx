import React, { useState, useEffect } from 'react';

const PinterestGalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated Pinterest-like image gallery
  const generatePinterestImages = () => {
    const categories = [
      'news', 'journalism', 'media', 'technology', 
      'business', 'sports', 'entertainment'
    ];

    const imageUrls = categories.map((category, index) => ({
      id: index + 1,
      url: `https://source.unsplash.com/400x${300 + index * 50}/?${category}`,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} News Highlights`,
      category: category
    }));

    return imageUrls;
  };

  useEffect(() => {
    // Simulate fetching images
    const fetchImages = () => {
      const galleryImages = generatePinterestImages();
      setImages(galleryImages);
      setLoading(false);
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center responsive-container">
        Loading Pinterest-style Gallery...
      </div>
    );
  }

  return (
    <div className="my-10 responsive-container">
      <h1 className="mb-6 text-3xl font-bold">T20 News Image Gallery</h1>
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="transition-all transform card hover:scale-105 hover:shadow-xl"
          >
            <img 
              src={image.url} 
              alt={image.title} 
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <div className="p-4">
              <span className="inline-block px-2 py-1 mb-2 text-xs text-white rounded-full bg-primary">
                {image.category}
              </span>
              <h3 className="text-sm font-bold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a 
          href="https://in.pinterest.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-accent"
        >
          Explore More on Pinterest
        </a>
      </div>
    </div>
  );
};

export default PinterestGalleryPage;
