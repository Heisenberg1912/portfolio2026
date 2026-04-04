"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiExternalLink, FiDownloadCloud } from "react-icons/fi";
import { SpotlightCard } from "./SpotlightCard";

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  "Systems & Web": ["React.js", "Node.js", "Express.js", "Flask", "Django", "REST APIs", "WebSocket", "Microservices", "Event-Driven Arch."],
  "Cloud & DevOps": ["AWS", "GCP", "Firebase", "Docker", "CI/CD", "Linux", "Auto-Scaling"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  "AI & ML": ["TensorFlow", "PyTorch", "OpenCV", "CNN", "Generative AI", "NLP", "Transfer Learning"]
};

const experience = [
  {
    role: "Software Development Engineer",
    company: "Builtattic",
    location: "India, Remote",
    period: "Aug 2025 - Present",
    url: "https://builtattic.com",
    points: [
      "Led the design and development of builtattic.com, a live global AEC marketplace supporting multi-currency transactions across 20+ countries, vendor onboarding, and subscription billing, improving platform performance by 30% through distributed system architectural improvements.",
      "Engineered low-latency RESTful APIs and WebSocket connections enabling real-time data synchronization with sub-100ms response times across distributed system components, reducing user-facing latency by 40%.",
      "Owned end-to-end deployment of 8 AI-powered SaaS tools (VitruviAI, Faust, Design Studio, Matters, Vision, Valuator, Material Studio, Summaries) on Google Cloud Platform with auto-scaling, ensuring 99.9% availability under global traffic spikes.",
      "Implemented fault-tolerant secure multi-currency payment processing and user authentication systems in compliance with organizational software security standards.",
      "Established automated metric monitoring and auditing pipelines to proactively detect system anomalies; collaborated with cross-functional designers, product managers, and engineers in agile sprints to deliver operational excellence."
    ]
  },
  {
    role: "Software Developer",
    company: "M.P. State Co-operative Consumers Federation Ltd",
    location: "Indore, Madhya Pradesh, India",
    period: "Jun 2024 - May 2025",
    points: [
      "Built and led delivery of a customized ERP system with database integration, reducing data processing time by 40% through query optimization and automated data pipelines serving 500+ daily users.",
      "Designed fault-tolerant database schemas with efficient indexing for high-performance queries on large-scale datasets; created dashboards that reduced reporting time by 25% for business stakeholders.",
      "Developed automated Python scripts for information extraction, eliminating 10+ hours of manual weekly data management; translated ambiguous stakeholder requirements into scalable production solutions."
    ]
  }
];

const projects = [
  {
    name: "Builtattic Marketplace Platform",
    tech: ["React", "Node.js", "WebSocket", "MongoDB", "GCP"],
    url: "https://builtattic.com",
    points: [
      "Led development of a large-scale, multi-region marketplace with real-time bidding and notifications, achieving sub-100ms end-to-end latency at scale across 20+ countries with multi-currency payment support.",
      "Deployed fault-tolerant auto-scaling infrastructure on GCP handling traffic spikes efficiently; designed MongoDB schema with optimized indexing delivering 60% faster query response times."
    ]
  },
  {
    name: "Vitruvi-AI - Generative AI Architecture Tool",
    tech: ["Python", "GCP", "Generative AI", "REST APIs"],
    url: "https://floorplan-website.vercel.app/",
    points: [
      "Architected scalable low-latency AI inference pipelines on GCP; built RESTful microservices with NLP-based information extraction, reducing architectural concept development time by 60% - live in production."
    ]
  },
  {
    name: "Real-Time Object Detection System",
    tech: ["Python", "OpenCV", "TensorFlow", "CNN"],
    url: "https://github.com/Heisenberg1912",
    points: [
      "Developed CNN-based object detection system achieving 95% classification accuracy via transfer learning; optimized large-scale model inference to 30+ FPS with continuous automated production monitoring."
    ]
  }
];

const education = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science",
  university: "Medicaps University",
  location: "Indore, Madhya Pradesh, India",
  period: "2021 - 2025"
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.15em] text-fg">{children}</h3>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}

export function RecruiterTable() {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24 bg-bg relative transition-colors duration-500"
    >
      {/* Ambient background accent */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[var(--blob-1)] rounded-bl-full blur-[100px] pointer-events-none opacity-40 transition-colors duration-500" />

      <div className="max-w-6xl mx-auto font-sans text-fg relative z-10">
        
        {/* Header / Contact Info */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight text-fg transition-colors duration-500">Tushar Batham</h2>
            <p className="text-xl md:text-2xl text-accent font-semibold tracking-wide uppercase transition-colors duration-500">Software Development Engineer</p>
            <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed transition-colors duration-500">
              Designing and shipping scalable, fault-tolerant distributed web applications and real-time systems serving global users. Demonstrated ownership of mission-critical systems from architecture through production.
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="flex flex-col gap-3 text-sm font-medium text-muted transition-colors duration-500"
          >
            <a href="mailto:batham.tushar2001@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors"><FiMail className="text-lg" /> batham.tushar2001@gmail.com</a>
            <a href="tel:+919755247877" className="flex items-center gap-3 hover:text-accent transition-colors"><FiPhone className="text-lg" /> +91-9755247877</a>
            <span className="flex items-center gap-3"><FiMapPin className="text-lg" /> Bhopal, Madhya Pradesh, India</span>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/Heisenberg1912" target="_blank" rel="noreferrer" className="p-3 bg-card rounded-full hover:bg-fg hover:text-bg border border-border shadow-sm transition-all"><FiGithub className="text-lg" /></a>
              <a href="https://linkedin.com/in/tusharbatham" target="_blank" rel="noreferrer" className="p-3 bg-card rounded-full hover:bg-accent hover:text-bg border border-border shadow-sm transition-all"><FiLinkedin className="text-lg" /></a>
              <a href="https://drive.google.com/file/d/1P8tDZFEgaDF14Dwx9ylLhd5YhHdNUUw-/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:scale-105 transition-transform font-bold text-xs uppercase tracking-widest shadow-lg ml-2">
                <FiDownloadCloud className="text-lg" />
                <span className="hidden sm:inline">Resume PDF</span>
              </a>
            </div>
          </motion.div>
        </header>

        {/* Technical Skills - High Density Grid */}
        <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="mb-20">
          <SectionHeading>Technical Arsenal</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <SpotlightCard key={category}>
                <div className="p-6 rounded-2xl h-full flex flex-col group">
                  <h4 className="text-xs uppercase tracking-widest text-muted font-bold mb-4 group-hover:text-accent transition-colors">{category}</h4>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {items.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-bg text-muted text-xs rounded-md font-mono border border-border hover:bg-accent hover:text-bg hover:border-accent transition-colors cursor-default relative z-10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* Interactive Experience / Projects Toggle */}
        <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <div className="flex gap-4 md:gap-8 border-b border-border mb-10 transition-colors duration-500 overflow-x-auto scrollbar-hide whitespace-nowrap">
            {["Experience", "Key Projects", "Education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-lg md:text-xl font-bold uppercase tracking-wider transition-colors relative ${activeTab === tab ? 'text-accent' : 'text-muted hover:text-fg'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              
              {activeTab === "Experience" && (
                <motion.div key="experience" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-8">
                  {experience.map((job, i) => (
                    <SpotlightCard key={i}>
                      <div className="p-8 group relative flex flex-col md:flex-row gap-6">
                        {/* Timeline line for desktop */}
                        <div className="hidden md:block absolute left-8 top-16 bottom-8 w-px bg-border group-hover:bg-accent/30 transition-colors" />
                        <div className="hidden md:block absolute left-[1.85rem] top-10 w-2.5 h-2.5 rounded-full border-2 border-accent bg-card" />

                        <div className="md:ml-8 flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                            <div>
                              <h4 className="font-bold text-2xl tracking-tight text-fg group-hover:text-accent transition-colors duration-500">{job.role}</h4>
                              <div className="flex items-center gap-3 mt-2">
                                <span className="text-lg font-semibold text-fg opacity-80">{job.company}</span>
                                {job.url && (
                                  <a href={job.url} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors relative z-10"><FiExternalLink /></a>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-col md:items-end">
                              <span className="text-sm font-mono text-accent bg-accent-glow px-3 py-1 rounded-full border border-accent/20">{job.period}</span>
                              <span className="text-sm text-muted mt-2">{job.location}</span>
                            </div>
                          </div>
                          <ul className="space-y-4 text-muted mt-6 relative z-10">
                            {job.points.map((point, j) => (
                              <li key={j} className="text-base leading-relaxed flex items-start gap-4">
                                <span className="text-accent mt-1.5 opacity-60 shrink-0">▹</span>
                                <span dangerouslySetInnerHTML={{ __html: point.replace(/(\d+%|\d+\+? hours|sub-\d+ms|\d+\+ countries|\d+\+ daily users)/g, '<strong class="text-fg font-semibold transition-colors duration-500">$&</strong>') }} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SpotlightCard>
                  ))}
                </motion.div>
              )}

              {activeTab === "Key Projects" && (
                <motion.div key="projects" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 gap-8">
                  {projects.map((project, i) => (
                    <SpotlightCard key={i}>
                      <div className="p-8 h-full flex flex-col justify-between">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                          <div>
                            <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-bold text-2xl tracking-tight text-fg hover:text-accent transition-colors duration-500 relative z-10">
                              {project.name} <FiExternalLink className="text-xl opacity-50" />
                            </a>
                          </div>
                          <div className="flex flex-wrap gap-2 md:justify-end relative z-10">
                            {project.tech.map(t => (
                              <span key={t} className="px-2 py-1 bg-bg text-muted text-xs rounded-md font-mono border border-border transition-colors duration-500">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ul className="space-y-3 text-muted relative z-10">
                          {project.points.map((point, j) => (
                            <li key={j} className="text-base leading-relaxed flex items-start gap-4">
                              <span className="text-accent mt-1.5 opacity-60 shrink-0">▹</span>
                              <span dangerouslySetInnerHTML={{ __html: point.replace(/(\d+%|\d+\+? FPS|\d+\+ countries|sub-\d+ms)/g, '<strong class="text-fg font-semibold transition-colors duration-500">$&</strong>') }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SpotlightCard>
                  ))}
                </motion.div>
              )}

              {activeTab === "Education" && (
                <motion.div key="education" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <SpotlightCard className="w-full">
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div>
                          <h4 className="font-bold text-2xl text-fg mb-2 transition-colors duration-500">{education.degree}</h4>
                          <p className="text-lg text-fg opacity-80 font-semibold transition-colors duration-500">{education.university}</p>
                          <p className="text-sm text-muted mt-1 transition-colors duration-500">{education.location}</p>
                        </div>
                        <div className="mt-4 md:mt-0 relative z-10">
                          <span className="text-sm font-mono text-accent bg-accent-glow border border-accent/20 px-3 py-1 rounded-full transition-colors duration-500">{education.period}</span>
                        </div>
                      </div>
                      
                      <div className="mt-12 pt-8 border-t border-border transition-colors duration-500">
                        <h5 className="text-sm font-bold uppercase tracking-widest text-muted mb-4 transition-colors duration-500">Certifications & Achievements</h5>
                        <ul className="space-y-4 relative z-10">
                          <li className="flex items-start gap-4 text-fg opacity-80 transition-colors duration-500">
                            <span className="text-accent mt-1 opacity-60">▹</span>
                            <span>Google Certified – Machine Learning and AI Fundamentals</span>
                          </li>
                          <li className="flex items-start gap-4 text-fg opacity-80 transition-colors duration-500">
                            <span className="text-accent mt-1 opacity-60">▹</span>
                            <span>Infosys Certified – Software Development and Programming</span>
                          </li>
                          <li className="flex items-start gap-4 text-fg opacity-80 transition-colors duration-500">
                            <span className="text-accent mt-1 opacity-60">▹</span>
                            <span>Udemy – Full Stack Web Development, Python</span>
                          </li>
                          <li className="flex items-start gap-4 text-fg opacity-80 transition-colors duration-500">
                            <span className="text-accent mt-1 opacity-60">▹</span>
                            <span>Hackathon Finalist – Led rapid prototyping under ambiguous time-constrained conditions; successfully owned and shipped multiple live production systems including a globally accessible marketplace at builtattic.com</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
        
      </div>
    </motion.div>
  );
}