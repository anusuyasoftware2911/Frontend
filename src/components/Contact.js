import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Let’s build something amazing together.</p>
      </div>

      <div className="contact-content">
        {/* Left Side - Info */}
        <div className="contact-info">
          <h2>Reach Us At</h2>
          <p><strong>Email:</strong> anusuyasoftwaresolutions@gmail.com</p>
          <p><strong>Phone:</strong> +91 8107191657</p>
          <p><strong>Address:</strong> Anusuya Software Solutions, Ahmedabad, India</p>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;