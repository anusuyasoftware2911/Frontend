import React from "react";
import "./About.css";
import founderImg from "../components/Founder.jpeg"; // Make sure to add an image in the correct path

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Anusuya Software Solutions</strong> — your partner in building powerful,
          scalable, and intelligent software tailored to your business goals. We don't just create
          websites — we build systems that work for you.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To empower businesses, startups, and industries by designing customized digital solutions
          that streamline operations, boost efficiency, and drive growth — backed by innovation,
          transparency, and ongoing support.
        </p>
      </section>

      <section className="core-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>💡 Innovation in Every Line of Code</li>
          <li>🛠 Scalable and Secure Architecture</li>
          <li>🤝 Client-Centric Collaboration</li>
          <li>🚀 Speed with Precision</li>
          <li>🔧 Lifetime Maintenance & Support</li>
        </ul>
      </section>

      <section className="founder-section">
        <h2>Meet the Founder</h2>
        <div className="founder-profile">
          <img src={founderImg} alt="Founder Dhruv Agarwal" className="founder-img" />
          <div>
            <p>
              <strong>Dhruv Agarwal</strong> is the visionary behind Anusuya Software Solutions. With extensive
              experience in full-stack development, Dhruv has engineered complete SaaS platforms,
              admin panels, CRM systems, intelligent chatbots, and integrated AI tools using cutting-edge
              technologies like MERN stack, Meta WhatsApp API, and OpenAI.
            </p>
            <p>
              His passion lies in solving real-world problems through automation and smart design.
              He believes in building with precision and scaling with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-stack-section">
        <h2>Tech Stack & Capabilities</h2>
        <p>
          We specialize in:
        </p>
        <ul>
          <li>🌐 MERN Stack: MongoDB, Express, React, Node.js</li>
          <li>🤖 AI & LLM Integration: ChatGPT, Gemini, and custom bots</li>
          <li>📱 WhatsApp Bots: Meta APIs, custom NLP, chatbot automation</li>
          <li>🛒 E-commerce: Secure, scalable, and UX-optimized platforms</li>
          <li>📈 Admin Dashboards: CRM, ERP, and business analytics systems</li>
          <li>⚙️ Third-Party Integrations: Razorpay, Google APIs, Jitsi, Zoom</li>
          <li>🔐 Secure Auth: JWT, OTP, and role-based systems</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Build With Us</h2>
        <p>
          Whether you’re an early-stage startup or an established business looking to innovate — we’re
          here to transform your ideas into powerful digital solutions. Let’s build the future together.
        </p>
        <button className="cta-button" onClick={() => window.location.href = "/Contact"}>
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default About;