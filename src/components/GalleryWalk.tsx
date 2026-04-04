"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGlobe, FiCpu, FiZap, FiDatabase, FiActivity, FiArrowRight } from "react-icons/fi";

interface ProjectProps {
  title: string;
  url: string;
  techStack: string[];
  metrics: { label: string; value: string; icon: React.ReactNode }[];
  description: string;
  role: string;
  index: number;
  total: number;
}

const projects: Omit<ProjectProps, 'index' | 'total'>[] = [
  {
    title: "Builtattic Marketplace Platform",
    url: "https://builtattic.com",
    techStack: ["React", "Node.js", "WebSocket", "MongoDB", "GCP"],
    role: "Lead Engineer",
    metrics: [
      { label: "Latency", value: "<100ms", icon: <FiZap /> },
      { label: "Global Scale", value: "20+ Countries", icon: <FiGlobe /> },
      { label: "Query Speed", value: "+60%", icon: <FiDatabase /> },
    ],
    description: "Led development of a large-scale, multi-region marketplace with real-time bidding and notifications. Deployed fault-tolerant auto-scaling infrastructure handling traffic spikes efficiently.",
  },
  {
    title: "Vitruvi-AI Generative Architecture",
    url: "https://floorplan-website.vercel.app/",
    techStack: ["Python", "GCP", "Generative AI", "REST APIs"],
    role: "AI Systems Architect",
    metrics: [
      { label: "Concept Dev Time", value: "-60%", icon: <FiActivity /> },
      { label: "Infrastructure", value: "Auto-Scaling", icon: <FiGlobe /> },
      { label: "Status", value: "Production", icon: <FiCpu /> },
    ],
    description: "Architected scalable low-latency AI inference pipelines on GCP; built RESTful microservices with NLP-based information extraction, significantly reducing architectural concept development time.",
  },
  {
    title: "Real-Time Object Detection",
    url: "https://github.com/Heisenberg1912",
    techStack: ["Python", "OpenCV", "TensorFlow", "CNN"],
    role: "Machine Learning Engineer",
    metrics: [
      { label: "Classification", value: "95%", icon: <FiActivity /> },
      { label: "Model Inference", value: "30+ FPS", icon: <FiZap /> },
      { label: "Architecture", value: "CNN Transfer", icon: <FiCpu /> },
    ],
    description: "Developed CNN-based object detection system achieving 95% classification accuracy via transfer learning; optimized large-scale model inference with continuous automated production monitoring.",
  }
];

function EditorialProjectCard({ project }: { project: ProjectProps }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Calculate sticky top position to stack cards
  const topPosition = `calc(5vh + ${project.index * 20}px)`;

  return (
    <motion.div 
      ref={cardRef}
      style={{ scale, opacity, top: topPosition }}
      className="sticky w-full paper-shadow bg-card rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-border mb-12 origin-top transition-colors duration-500 hover:shadow-2xl"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative">
        
        {/* Massive Background Index Number */}
        <div className="absolute -top-10 -right-6 md:-right-10 pointer-events-none select-none overflow-hidden">
          <span className="font-serif text-[12rem] md:text-[20rem] font-bold text-bg leading-none tracking-tighter mix-blend-difference dark:mix-blend-lighten opacity-50">
            0{project.index + 1}
          </span>
        </div>

        {/* Left Content */}
        <div className="flex-1 relative z-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent-glow text-accent border border-accent/20">
                {project.role}
              </span>
              <a href={project.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted hover:text-fg transition-colors group">
                Live Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <h3 className="font-serif text-4xl md:text-6xl font-bold text-fg mb-8 tracking-tight leading-[1.1] text-balance">
              {project.title}
            </h3>

            <p className="text-lg md:text-xl text-muted leading-relaxed font-light mb-12 max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map(tech => (
              <span key={tech} className="px-4 py-2 bg-bg text-muted text-sm rounded-lg font-mono border border-border shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Metrics Layout */}
        <div className="w-full lg:w-[400px] shrink-0 relative z-10 flex flex-col justify-center">
          <div className="bg-bg p-8 rounded-3xl border border-border shadow-inner transition-colors duration-500">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8 pb-4 border-b border-border">Project Impact</h4>
            <div className="space-y-8">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-card shadow-sm flex items-center justify-center text-accent border border-border group-hover:scale-110 transition-transform">
                      {metric.icon}
                    </div>
                    <span className="text-sm uppercase tracking-widest text-muted font-semibold">{metric.label}</span>
                  </div>
                  <span className="text-xl md:text-2xl font-serif font-bold text-fg tracking-tight">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export function GalleryWalk() {
  return (
    <div className="relative bg-bg text-fg py-32 px-4 md:px-12 lg:px-20 transition-colors duration-500">
      
      <div className="max-w-[85rem] mx-auto relative">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border pb-12">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-fg mb-4">
              Selected Works
            </h2>
            <p className="text-lg font-sans text-muted font-light max-w-lg">
              A curated collection of mission-critical systems and architectural highlights.
            </p>
          </div>
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-muted hidden md:block">
            Scroll to stack
          </p>
        </div>

        {/* Sticky Project Cards */}
        <div className="relative pb-[20vh]">
          {projects.map((project, i) => (
            <EditorialProjectCard 
              key={i} 
              project={{ ...project, index: i, total: projects.length }} 
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}