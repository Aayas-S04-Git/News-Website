import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Pinterest', url: 'https://in.pinterest.com', icon: '📌' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Facebook', url: '#', icon: '👥' },
    { name: 'Instagram', url: '#', icon: '📸' }
  ];

  const quickLinks = [
    { name: 'About', url: '/about' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms', url: '/terms' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <footer className="bg-white py-10">
      <div className="responsive-container grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">T20 News Channel</h3>
          <p className="text-gray-600">
            Stay Informed, Stay Ahead. Your trusted source for the latest news and updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.url} 
                  className="text-primary hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} T20 News Channel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
