import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="my-10 responsive-container">
      <div className="grid gap-8 items-center md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold">About T20 News Channel</h1>
          <p className="mb-4 text-gray-600">
            T20 News Channel is your premier destination for timely, accurate, and engaging news across various domains. 
            Our mission is to keep you informed, inspired, and ahead of the curve.
          </p>
          
          <h2 className="mb-3 text-2xl font-bold">Our Unique Features</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li>Real-time news updates</li>
            <li>Curated content across multiple categories</li>
            <li>Personalized news experience</li>
            <li>Trending news alerts</li>
            <li>Offline reading capabilities</li>
          </ul>

          <div className="mt-6">
            <Link to="/contact" className="mr-4 btn-primary">
              Contact Us
            </Link>
            <Link to="/" className="btn-accent">
              Explore News
            </Link>
          </div>
        </div>

        <div>
          <img 
            src="https://i.pinimg.com/736x/d0/95/57/d095573863cb6888450ab167d47caa52.jpg" 
            alt="T20 News Channel" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
