import { useState } from 'react';
import { Github, Twitter, Linkedin } from "lucide-react"

function Contact() {
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
        <p className="text-lg">We would love to hear from you! Feel free to reach out with any questions or inquiries.</p>
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
        <p className="text-lg">Phone: <a href="+919213410998" className="text-blue-500 hover:underline">+91 9213410998</a></p>
      </section>

      {/* Social Media Links Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => { window.location.href = 'https://discord.com/invite/axf2Qwv3' }}
            className="text-gray-600 hover:text-gray-800 transition-colors">
            <span className="sr-only">Discord</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </button>
          <button
            onClick={() => { window.location.href = 'https://www.linkedin.com/company/devogig' }}
            className="text-gray-600 hover:text-gray-800 transition-colors">
            <span className="sr-only">Linkedin</span>
            <Linkedin className="h-6 w-6" />
          </button>
          <button
            onClick={() => { window.location.href = 'https://x.com/devogigs' }}
            className="text-gray-600 hover:text-gray-800 transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </button>
          <button
            onClick={() => { window.location.href = 'https://github.com/devogigs' }}
            className="text-gray-600 hover:text-gray-800 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Optional Location Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Our Location</h2>
        <p className="text-lg">Delhi,India</p>
        {/* You can add a map iframe here if needed */}
      </section>
    </div>
  );
};

export default Contact;
