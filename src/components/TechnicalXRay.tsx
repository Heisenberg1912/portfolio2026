"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectProps {
  title: string;
  url: string;
  techStack: string[];
  accentColor: string;
  bgGradient: string;
  metrics: { label: string; value: string; icon: React.ReactNode }[];
  description: string;
  codeSnippet: React.ReactNode;
}

export function TechnicalXRay({ project }: { project: ProjectProps }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[2500px] w-full">
      <motion.div 
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.bgGradient} p-1 shadow-2xl transition-all duration-500`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow effect under the card */}
        <div 
          className="absolute -inset-2 rounded-[2rem] blur-2xl opacity-0 transition-opacity duration-500 -z-10"
          style={{ backgroundColor: project.accentColor, opacity: isHovered ? 0.25 : 0 }}
        />

        <div className="relative w-full h-full rounded-[30px] bg-[#050505]/90 backdrop-blur-2xl overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row gap-12 lg:gap-20 [transform-style:preserve-3d]">
          
          {/* Top-left & Bottom-right decorative corners */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 opacity-40 transition-colors duration-500" style={{ borderColor: isHovered ? project.accentColor : '#ffffff40' }} />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 opacity-40 transition-colors duration-500" style={{ borderColor: isHovered ? project.accentColor : '#ffffff40' }} />
          <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-white/20" />

          {/* Left Content Area */}
          <div className="flex-1 flex flex-col justify-center [transform:translateZ(40px)] z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] bg-white/5 border border-white/10 flex items-center gap-2 shadow-inner">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.accentColor, boxShadow: `0 0 10px ${project.accentColor}` }} />
                Production Validated
              </div>
              <a href={project.url} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors duration-300 p-2 bg-white/5 rounded-full hover:bg-white/10">
                <FiExternalLink className="text-lg" />
              </a>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-xl transition-all duration-500" style={{ textShadow: isHovered ? `0 0 40px ${project.accentColor}60` : 'none' }}>
              {project.title}
            </h3>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light">
              {project.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-lg">
                  <div className="text-white/30 mb-3 group-hover:text-white transition-colors text-2xl" style={{ color: isHovered ? project.accentColor : '' }}>
                    {metric.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">{metric.value}</div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-mono">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm font-mono text-white/70 backdrop-blur-sm shadow-sm transition-colors hover:bg-white/10 hover:text-white cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Code Area (The "X-Ray" panel) */}
          <div className="flex-1 relative [transform:translateZ(80px)] z-20 group/code h-full min-h-[400px] flex flex-col justify-center">
            
            {/* The floating code window */}
            <div className="relative w-full h-full max-h-[500px] rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transition-all duration-500 group-hover/code:border-white/20">
              
              {/* Fake IDE Header */}
              <div className="h-12 bg-[#111111] border-b border-white/5 flex items-center px-6 justify-between shrink-0">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                </div>
                <div className="text-[10px] md:text-xs font-mono text-white/30 tracking-widest uppercase flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  system_architecture.ts
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Code Content Area */}
              <div className="relative flex-1 bg-[#050505] overflow-hidden group-hover/code:bg-[#080808] transition-colors duration-500">
                
                {/* Holographic grid background inside code editor */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />
                
                {/* The glowing animated scan line (Only active on hover of the whole card) */}
                {isHovered && (
                  <motion.div 
                    initial={{ top: "-20%" }}
                    animate={{ top: "120%" }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] opacity-70 z-50 pointer-events-none"
                    style={{ 
                      backgroundColor: project.accentColor, 
                      boxShadow: `0 0 20px ${project.accentColor}, 0 0 40px ${project.accentColor}` 
                    }}
                  />
                )}

                <div className="p-6 md:p-8 overflow-y-auto h-full relative z-10 scrollbar-hide text-xs md:text-sm leading-loose">
                  {project.codeSnippet}
                </div>
              </div>
            </div>
            
            {/* Ambient overlay holographic effect on hover */}
            <div 
              className="absolute inset-0 pointer-events-none transition-all duration-700 rounded-2xl -z-10"
              style={{
                boxShadow: isHovered ? `0 0 80px ${project.accentColor}30` : 'none',
                opacity: isHovered ? 1 : 0,
                transform: 'translateZ(-10px)'
              }}
            />
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}