"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiArrowDown } from "react-icons/fi";
import { TelemetryDashboard } from "./TelemetryDashboard";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg">
      
      {/* Immersive Fluid Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0">
        
        {/* Deep background glow */}
        <div className="absolute inset-0 bg-bg transition-colors duration-700" />

        {/* Animated Fluid Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[var(--gradient-1)] rounded-full blur-[80px] md:blur-[120px] opacity-20 md:opacity-30 mix-blend-screen dark:mix-blend-lighten top-0 left-0"
          style={{ transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)` }}
        />
        
        <motion.div 
          animate={{ 
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.5, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] bg-[var(--gradient-2)] rounded-full blur-[80px] md:blur-[120px] opacity-20 md:opacity-30 mix-blend-screen dark:mix-blend-lighten bottom-0 right-0"
          style={{ transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)` }}
        />

        <motion.div 
          animate={{ 
            x: [0, 50, -100, 0],
            y: [0, 50, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] bg-[var(--gradient-3)] rounded-full blur-[80px] md:blur-[120px] opacity-10 md:opacity-20 mix-blend-screen dark:mix-blend-lighten top-[20%] left-[20%]"
        />

        {/* Clean minimal grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] opacity-40 transition-opacity duration-700" />
      </div>

      <TelemetryDashboard />
      
      <motion.div 
        style={{ y: y1, opacity }}
        className="z-10 flex flex-col items-center px-6 w-full"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="px-5 py-2 rounded-full glass-panel mb-8 border border-border shadow-2xl backdrop-blur-xl flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <span className="text-xs font-medium tracking-widest uppercase text-fg opacity-80">Available for new opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[1.05] font-extrabold text-center tracking-tighter max-w-6xl mx-auto flex flex-col items-center text-fg drop-shadow-2xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-fg to-muted block pb-2">Full-Stack Vision.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] inline-block mt-[-1rem] md:mt-[-2rem] pb-4">Flawless Execution.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-muted mt-8 max-w-3xl mx-auto font-sans font-light tracking-wide text-balance text-center leading-relaxed"
        >
          I am Tushar Batham. A Software Development Engineer specializing in massive real-time systems, AI architecture, and high-performance product experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} data-cursor="Explore" className="px-8 py-4 bg-fg text-bg rounded-full text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
            Explore Work <FiArrowDown className="text-lg" />
          </button>
        </motion.div>
      </motion.div>

      {/* Floating UI Elements for depth */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute left-4 md:left-12 bottom-12 hidden lg:flex flex-col gap-4 z-10"
      >
        {["React", "Node.js", "Python", "GCP"].map((tech, i) => (
          <div key={tech} className="glass-panel px-4 py-2 rounded-lg text-xs font-mono text-muted border border-border/50 shadow-lg" style={{ transitionDelay: `${i * 100}ms` }}>
            {tech}
          </div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute right-4 md:right-12 bottom-12 hidden lg:flex flex-col gap-4 z-10 text-right"
      >
         <div className="glass-panel p-4 rounded-2xl border border-border/50 shadow-xl max-w-[200px]">
           <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Current Focus</div>
           <div className="text-sm font-semibold text-fg">Distributed Systems & GenAI</div>
         </div>
      </motion.div>
    </div>
  );
}