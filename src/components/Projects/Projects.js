import React from "react";
import "./Projects.css";
import psycaremimg from "./PsycareImages/PsyCareMain.png";
import chatbotimg from "./PsycareImages/chatbot.png";
import hrchatbot from "./PsycareImages/HR-Chatbots.png";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "PsyCare – Mental Health Platform",
      description: "A full-stack web application for a digital mental health startup offering scalable tools for therapists, patients, and admin teams.",
      features: [
        "OTP-based patient registration",
        "Gemini Pro AI Based Screening test system",
        "Smart doctor scheduling and appointment flow",
        "Corporate appointment credit management",
        "Admin dashboard for bulk communication and analytics",
        "Integrated payment via Razorpay and WhatsApp updates",
      ],
      image: psycaremimg,
      tech: ["React", "Node.js", "MongoDB", "Razorpay", "Jitsi", "Express"],
      link: "https://psy-care.in"
    },
    {
      title: "WhatsApp Appointment Chatbot",
      description: "A conversational chatbot powered by Meta’s WhatsApp Cloud API to automate appointment scheduling, reminders, and lead intake.",
      features: [
        "Real-time booking flow with doctor matching",
        "Fallback to human handoff for complex queries",
        "Works 24/7 across different client types",
        "Built-in fallback intents and multilingual support",
      ],
      image: chatbotimg,
      tech: ["Node.js", "Meta API", "Gemini APIs", "Webhook", "MongoDB"],
      link: "https://api.whatsapp.com/send?phone=919818296388&text=Hi"
    },
    {
      title: "Custom HR Automation Bot (Coming Soon)",
      description: "A chatbot-based HR assistant designed to handle onboarding, leave requests, attendance logs, and document uploads over WhatsApp.",
      features: [
        "Employee leave and holiday management",
        "Document request/response automation",
        "HR onboarding with chatbot forms",
        "Secure OTP login and analytics dashboard",
      ],
      image: hrchatbot,
      tech: ["Dialogflow", "WhatsApp Business API", "Node.js", "MongoDB"],
      comingSoon: true,
      link: "#"
    }
  ];

  return (
    <div className="projects-container">
      <h1>Our Projects</h1>

      <div className="projects-intro">
        <p>
          At Anusuya Software Solutions, we take pride in delivering fully customized, scalable web applications for real-world use cases. Each project we’ve built serves a practical business need — from healthcare tech to AI automation in customer engagement. Below is a showcase of the work we’ve done and what's coming up.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className={`project-card ${project.comingSoon ? "coming-soon" : ""}`}
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              {project.comingSoon && <div className="overlay">Coming Soon</div>}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="project-features">
              {project.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <p className="tech"><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>

            {!project.comingSoon && (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;