import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle form submission (e.g., send to an API)
  };

  return (
    <div className="font-sans p-8 max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 p-12 text-white mb-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you! Feel free to reach out with any questions or inquiries.</p>
      </div>

      {/* Contact Form Section */}
      <section className="mb-12 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Get In Touch</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 text-base border border-gray-300 rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="p-4 text-base text-white bg-blue-500 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Direct Contact Information Section */}
      <section className="mb-12 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Contact Information</h2>
        <p className="text-lg">Email: <a href="mailto:contact@devogigs.com" className="text-blue-500 hover:underline">contact@devogigs.com</a></p>
        <p className="text-lg">Phone: <a href="tel:+11234567890" className="text-blue-500 hover:underline">+1 (123) 456-7890</a></p>
      </section>

      {/* Social Media Links Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 transition-colors duration-300 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 transition-colors duration-300 hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 transition-colors duration-300 hover:text-blue-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </section>

      {/* Optional Location Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Our Location</h2>
        <p className="text-lg">123 Developer Lane, Code City, Techland</p>
        {/* You can add a map iframe here if needed */}
      </section>
    </div>
  );
};

export default Contact;
