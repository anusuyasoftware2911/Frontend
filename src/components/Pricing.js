import React from "react";
import "./Pricing.css";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      title: "Starter",
      price: "₹9,999",
      subtitle: "For Small Clinics & Startups",
      features: [
        "Responsive Website (3 Pages)",
        "Basic Admin Dashboard",
        "Contact Form Integration",
        "3 Months Free Support"
      ],
      cta: "Get Started"
    },
    {
      title: "Growth",
      price: "₹24,999",
      subtitle: "For Schools & SMEs",
      features: [
        "Custom Admin Panel",
        "WhatsApp Bot Integration",
        "Payment Gateway Setup",
        "1 Year Support + Training"
      ],
      cta: "Start Building"
    },
    {
      title: "Enterprise",
      price: "Custom Quote",
      subtitle: "For Hospitals & Platforms",
      features: [
        "AI-Powered CRM Systems",
        "Full SaaS Platform",
        "Multi-Role Logins",
        "DevOps & Deployment"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Pricing Plans</h1>
      <p className="pricing-subtitle">Affordable & scalable solutions for every stage of your business</p>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <p className="subtitle">{plan.subtitle}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>✔ {feature}</li>
              ))}
            </ul>
            <button className="cta-button" onClick={() => navigate("/Contact")}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;