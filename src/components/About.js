import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import founderImg from "../components/Founder.jpeg"; // update path if needed

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* -------- HERO / INTRO -------- */}
      <section className="about-header">
        <h1>About Anusuya Software Solutions</h1>
        <p>
          We’re a modern software studio on a mission to <strong>digitalise clinics, schools, and
          emerging businesses</strong> with intelligent web applications that are as unique as the people
          who run them.
        </p>
      </section>

      {/* -------- WHY WE STARTED -------- */}
      <section className="mission-section">
        <h2>Why We Started</h2>
        <p>
          In India—and across many emerging markets—SMEs and local institutions still rely on
          spreadsheets, paper logs, or off‑the‑shelf tools that don’t fit. We saw doctors juggling
          appointments on WhatsApp, school admins buried in registers, and factory managers guessing
          inventory numbers. <strong>Anusuya Software Solutions</strong> was founded to fix that gap—building
          <em> tailor‑made, AI‑enabled web apps</em> that automate everyday workflows without breaking budgets.
        </p>
      </section>

      {/* -------- FLAGSHIP EXPERIENCE -------- */}
      <section className="mission-section">
        <h2>Flagship Case: PsyCare</h2>
        <p>
          Our flagship build, <strong>PsyCare</strong>, is a full‑stack AI based mental‑health platform featuring OTP
          onboarding, AI based screening tests, doctor scheduling, corporate credit management, and AI‑powered
          WhatsApp reminders. The project proved our ability to deliver <em>HIPAA‑aware security, payment
          gateways, video‑consult integrations, and admin analytics</em>—all on a MERN + AI stack.
        </p>
      </section>

      {/* -------- CORE SERVICES / BUSINESS MODEL -------- */}
      <section className="mission-section">
        <h2>What We Do</h2>
        <p>
          We build <strong>purpose‑built web applications and chatbots</strong> for:
        </p>
        <ul className="service-list">
          <li>🩺 <em>Clinics & Hospitals:</em> EMR, appointment, tele‑health, billing portals</li>
          <li>🏫 <em>Schools & Ed‑Tech:</em> admission portals, fee gateways, LMS, parent chatbots</li>
          <li>🏭 <em>SMEs & Industry:</em> inventory dashboards, IoT feeds, HR/Payroll systems</li>
          <li>🤖 <em>Automation:</em> WhatsApp bots for sales, HR, customer support</li>
        </ul>
        <p>
          <strong>Business Model:</strong> fixed‑price projects —including lifetime support
          & SLAs. We’re a partner, not just a vendor.
        </p>
      </section>

      {/* -------- VALUES / PILLARS -------- */}
      <section className="core-values">
        <h2>Our Pillars</h2>
        <ul>
          <li><strong>Trust, Always:</strong> open communication & transparent pricing.</li>
          <li><strong>Lifetime Support:</strong> version upgrades, security patches, on‑call help.</li>
          <li><strong>Scalability:</strong> build small, scale to thousands of users with zero downtime.</li>
          <li><strong>Security First:</strong> JWT, RBAC, encrypted traffic, audit logging.</li>
          <li><strong>Innovation:</strong> AI & automation woven into every solution.</li>
        </ul>
      </section>

      {/* -------- FOUNDER -------- */}
      <section className="founder-section">
        <h2>Meet the Founder</h2>
        <div className="founder-profile">
          <img src={founderImg} alt="Founder Dhruv Agarwal" className="founder-img" />
          <div>
            <p>
              <strong>Dhruv Agarwal</strong> founded Anusuya Software Solutions at 23 after spearheading PsyCare’s
              full‑stack build. A MERN specialist and AI enthusiast, Dhruv blends clean UI design with
              robust backend logic, integrations (Razorpay, Meta APIs), and DevOps on Vercel/Render.
            </p>
            <p>
              Beyond code, Dhruv mentors juniors, speaks on digital health tech, and believes great
              software is “<em>built with empathy and engineered for scale</em>.”
            </p>
          </div>
        </div>
      </section>

      {/* -------- TECH STACK -------- */}
      <section className="tech-stack-section">
        <h2>Tech Stack & Capabilities</h2>
        <ul className="tech-grid">
          <li>🌐 <strong>MERN:</strong> MongoDB, Express, React, Node.js</li>
          <li>🤖 <strong>AI / LLMs:</strong> OpenAI GPT, Google Gemini, vector search</li>
          <li>📱 <strong>Chatbots:</strong> Meta WhatsApp API, Dialogflow, custom NLP</li>
          <li>💳 <strong>Payments:</strong> Razorpay, Stripe, Stripe Connect</li>
          <li>📈 <strong>Dashboards:</strong> Recharts, Tailwind, Framer Motion</li>
          <li>🔐 <strong>Security:</strong> JWT, OTP, RBAC, HTTPS, Helmet</li>
          <li>☁️ <strong>DevOps:</strong> Vercel, Render, Railway, Docker (optional)</li>
          <li>🔗 <strong>3rd‑Party:</strong> Google Suite, Jitsi, Zoom, Twilio</li>
        </ul>
      </section>

      {/* -------- CALL TO ACTION -------- */}
      <section className="cta-section">
        <h2>Let’s Build Something Remarkable</h2>
        <p>
          Whether you’re digitising a local clinic or launching the next ed‑tech unicorn, we’re ready
          to architect, code, and scale your vision. Reach out for a free discovery session.
        </p>
        <button className="cta-button" onClick={() => navigate("/Contact")}>
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default About;