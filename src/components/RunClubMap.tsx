"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function RunClubMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="py-32 px-4 md:px-12 lg:px-20 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto bg-card rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden border border-border paper-shadow transition-colors duration-500">
        
        {/* Organic abstract shape instead of literal map */}
        <div className="absolute -top-40 -right-40 w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-[var(--blob-1)] rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-[60vw] md:w-[30vw] h-[60vw] md:h-[30vw] bg-[var(--blob-2)] rounded-full blur-3xl opacity-50" />

        <motion.div style={{ scale, opacity }} className="relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-32">
          
          <div className="flex-1">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent/50" />
              Community & Leadership
            </h4>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-fg leading-tight">
              The Local <br/><span className="italic font-normal">Run Club.</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-muted mb-12 max-w-xl leading-relaxed font-light text-balance">
              Serving as the Sole Tech Lead for a community of over 500 active runners. Architected a custom software stack to visualize routes, manage geospatial data aggregates, and sustain community events with absolute reliability.
            </p>
            
            <div className="flex flex-wrap gap-12 font-sans uppercase tracking-widest text-sm">
              <div className="flex flex-col">
                <span className="font-serif italic text-5xl md:text-6xl text-accent mb-2">500+</span>
                <span className="text-muted font-bold tracking-[0.1em]">Members Joined</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif italic text-5xl md:text-6xl text-[var(--blob-2)] mb-2 mix-blend-difference dark:mix-blend-lighten">10k+</span>
                <span className="text-muted font-bold tracking-[0.1em]">Miles Tracked</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[400px] aspect-[4/5] relative bg-bg rounded-[2rem] paper-shadow p-8 flex flex-col justify-between border border-border group transition-colors duration-500">
            <div className="flex justify-between items-center border-b border-border pb-4">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-muted">Live Dashboard</span>
            </div>
            
            <div className="flex-1 relative flex items-center justify-center">
              {/* Minimalist Data Visualization Representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.svg viewBox="0 0 100 100" className="w-full h-full opacity-80 overflow-visible">
                  <motion.path
                    d="M 10 90 Q 30 70, 50 60 T 90 20"
                    fill="transparent"
                    stroke="var(--accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.circle 
                    cx="90" cy="20" r="4" 
                    fill="var(--accent)" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="drop-shadow-md"
                  />
                  <motion.circle 
                    cx="10" cy="90" r="4" 
                    fill="var(--fg)" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                  />
                </motion.svg>
              </div>
            </div>

            <div className="pt-6 border-t border-border flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold">System Uptime</span>
                <span className="font-serif text-2xl text-fg font-bold">100%</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-fg text-bg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs">↗</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}