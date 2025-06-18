import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "⏳ Sending...", type: "sending" });

    try {
      const res = await fetch("https://backenddeployment-icl0.onrender.com/QueryRoute/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ message: "✅ Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Auto-clear after 5 seconds
        setTimeout(() => {
          setStatus({ message: "", type: "" });
        }, 5000);
      } else {
        setStatus({ message: `❌ ${data.message}`, type: "error" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ message: "❌ Something went wrong.", type: "error" });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Let’s build something amazing together.</p>
      </div>

      <div className="contact-content">
        {/* Info */}
        <div className="contact-info">
          <h2>Reach Us At</h2>
          <p><strong>Email:</strong> anusuyasoftwaresolutions@gmail.com</p>
          <p><strong>Phone:</strong> +91 8107191657</p>
          <p><strong>Address:</strong> Ahmedabad, India</p>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
            <p className={`status ${status.type}`}>{status.message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;