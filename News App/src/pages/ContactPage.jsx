import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="responsive-container my-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Have questions, suggestions, or just want to say hello? 
            We'd love to hear from you!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="bg-secondary p-6 rounded-lg">
            <p className="font-bold">T20 News Channel Headquarters</p>
            <p>Dubai, United Arab Emirates</p>
            <p>Tech City, Innovation District</p>
            <p>Postal Code: 413201</p>
            
            <div className="mt-4">
              <p>📞 Contact: +91 123 456 7890</p>
              <p>✉️ Email: support@t20newschannel.com</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Connect on Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://in.pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary"
              >
                📌 Pinterest
              </a>
              <a 
                href="#" 
                className="text-2xl hover:text-primary"
              >
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
