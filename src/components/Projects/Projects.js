import React from "react";
import "./Projects.css";
import psycaremimg from "./PsycareImages/PsyCareMain.png";
import chatbotimg from "./PsycareImages/chatbot.png";
import hrchatbot from "./PsycareImages/HR-Chatbots.png";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            title: "PsyCare Website",
            description: "A full-stack mental health platform with appointment booking, screening, admin dashboard, and doctor management.",
            image: psycaremimg,
            tech: ["React", "Node.js", "MongoDB", "Razorpay"],
            link: "https://psy-care.in",
        },
        {
            title: "WhatsApp Appointment Bot",
            description: "An AI-powered WhatsApp chatbot for appointment booking and reminders using Meta APIs.",
            image: chatbotimg,
            tech: ["Node.js", "Meta API", "ChatGPT"],
            link: "https://api.whatsapp.com/send?phone=919818296388&text=Hi",
        },
        {
            title: "Custom HR Bot (Coming Soon)",
            description: "A smart HR chatbot handling leave requests and onboarding via WhatsApp.",
            image: hrchatbot,
            tech: ["Node.js", "Dialogflow", "WhatsApp API"],
            link: "#",
            comingSoon: true
        }
    ];

    return (
        <div className="projects-container">
            <h1>Our Projects</h1>
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
                        <p className="tech"><strong>Tech:</strong> {project.tech.join(", ")}</p>
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