import React from "react";
import { Github, ExternalLink } from "lucide-react";
export const Projects = () => {
  const projects = [{
    title: "AI Die Line Design Image Generation",
    description: "Developed a locally hosted AI-powered web app for designing cutter diagrams, using the Flux Model and custom-trained LoRAs for high-quality 2D image and die-line generation. Integrated InvokeAI for seamless image processing and designed a custom frontend interface to interact with the backend via API for a smooth user experience",
    image: "/project1.png",
    technologies: ["InvokeAI","ReactJS", "Python", "Flux & LoRa"],
    github: "https://github.com/VimukthiLakmal/API-for-InvokeAI"
  }, {
    title: "Tracking Employee moment in CCTV with AI",
    description: "Developed a system to access CCTV cameras via IP addresses and track employee movements using the YOLO model across multiple angles. The system monitored workstation usage and automatically logged time spent at each workstation into a centralized database.",
    image: "/project2.webp",
    technologies: ["Python", "YOLO Model", "CV2 Library", "Mysql"]
  }, {
    title: "Harness digital solutions for the advancement of maternal and postnatal wellness in Sri Lanka | Final Year Research",
    description: "Developed a predictive model to assess maternal health risks using a Kaggle dataset and implemented an Android app to integrate the model with survey-based health data. The system provides personalized health insights for maternal and postnatal women, focusing on their well-being and their baby’s health.",
    image: "/project3.avif",
    technologies: ["Flutter", "Python", "Firebase"],
    github: "https://github.com/VimukthiLakmal/Pregnancy-risk-prediction"
  }];
  return <section id="projects" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-poppins text-4xl font-bold mb-16 text-center text-gradient">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-3d">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 mix-blend-overlay" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-poppins text-xl font-bold mb-3 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="font-inter text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => <span key={i} className="font-fira px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                        {tech}
                      </span>)}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};