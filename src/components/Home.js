import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Top Welcome Heading */}
      <section className="welcome-heading">
        <h1>Welcome to Anusuya Software Solutions</h1>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <h2>
          Building <span>Web Applications</span><br />for Clinics, Schools & SMEs
        </h2>
        <p>
          We craft end‑to‑end digital platforms—appointment systems, CRMs,
          student portals, IoT dashboards—complete with AI chatbots,
          secure payments, and lifetime support.
        </p>
        <button className="cta-button" onClick={() => navigate("/Contact")}>
          Schedule a Free Demo
        </button>
      </section>

      {/* Value Proposition */}
      <section className="value-prop">
        <h2>Why Anusuya Software Solutions?</h2>
        <ul>
          <li><strong>Domain‑Focused:</strong> healthcare, education, and small‑scale industries.</li>
          <li><strong>AI Inside:</strong> WhatsApp/chatbot automation, GPT‑powered assistants.</li>
          <li><strong>Full‑Stack Ownership:</strong> UX → API → DevOps on MERN.</li>
          <li><strong>Secure Payments:</strong> Stripe / Razorpay integration out of the box.</li>
          <li><strong>Lifetime Care:</strong> updates, monitoring & on‑call support.</li>
        </ul>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2>What We Build</h2>
        <div className="services-cards">
          <div className="card">
            <h3>Clinic & Hospital Suites</h3>
            <p>
              Patient EMR, appointment booking, e‑prescriptions, tele‑health,
              payment reconciliation, and WhatsApp reminders.
            </p>
          </div>

          <div className="card">
            <h3>School / Coaching Portals</h3>
            <p>
              Online admissions, fee collection, attendance & LMS—plus parent
              chatbots and progress analytics.
            </p>
          </div>

          <div className="card">
            <h3>Industry Dashboards</h3>
            <p>
              Inventory, production KPIs, IoT sensor feeds, and real‑time alerts
              for manufacturing or warehouse ops.
            </p>
          </div>

          <div className="card">
            <h3>Custom AI Chatbots</h3>
            <p>
              Meta WhatsApp, web widgets, multilingual NLP and GPT
              integrations that automate FAQ, booking, and lead capture.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>
          Ready to deploy a platform <br className="mobile-break" />
          that works like <em>your</em> business does?
        </h2>
        <button className="cta-button" onClick={() => navigate("/Contact")}>
          Talk to an Expert
        </button>
      </section>
    </div>
  );
}

export default Home;