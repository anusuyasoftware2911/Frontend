import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";



function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Anusuya Software Solutions</h1>
        <p>
          Crafting tailored software solutions for startups, businesses, and industries.
          Empowering your growth with technology and innovation.
        </p>
        <button className="cta-button" onClick={() => navigate("/Contact")}>
          Get in Touch
        </button>
      </section>

      <section className="value-prop">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Customized software tailored exactly to your needs.</li>
          <li>Full-stack web applications with scalable and robust architecture.</li>
          <li>Integration with AI and chatbots for smarter workflows.</li>
          <li>Lifetime support & maintenance packages.</li>
          <li>Transparent pricing and client-first approach.</li>
        </ul>
      </section>

      <section className="services-section">
        <h2>Our Core Services</h2>
        <div className="services-cards">
          <div className="card">
            <h3>Web & Mobile Development</h3>
            <p>Full-stack scalable apps with React, Node.js, MongoDB and more.</p>
          </div>
          <div className="card">
            <h3>AI & Chatbot Integration</h3>
            <p>Smart chatbots and AI-powered solutions tailored for your business.</p>
          </div>
          <div className="card">
            <h3>Custom Software Solutions</h3>
            <p>End-to-end software built specifically for your unique workflows.</p>
          </div>
          <div className="card">
            <h3>Support & Maintenance</h3>
            <p>Reliable support with lifetime software updates and troubleshooting.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>Ready to transform your business?</h2>
        <button className="cta-button" onClick={() => navigate("/Contact")}>
          Contact Us Today
        </button>
      </section>
    </div>
  );
}

export default Home;