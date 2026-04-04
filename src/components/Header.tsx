"use client";

import { useViewMode } from "./Providers";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMoon, FiSun, FiLayers, FiList } from "react-icons/fi";
import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { CommandTerminal } from "./CommandTerminal";

export function Header() {
  const { isRecruiterView, toggleViewMode } = useViewMode();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8 pointer-events-none">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel w-full mx-auto flex justify-between items-center p-3 md:px-6 rounded-2xl shadow-lg border border-border/50 transition-all duration-500 pointer-events-auto"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] p-[1px] shadow-sm">
            <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
              <span className="font-serif font-bold text-lg text-fg leading-none">T</span>
            </div>
          </div>
          <div className="flex flex-col hidden sm:flex">
            <h1 className="font-bold tracking-tight text-fg leading-none text-base">
              Tushar Batham
            </h1>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted mt-1">Systems Engineer</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6 bg-card/50 p-1.5 rounded-2xl border border-border/50">
          
          <div className="flex items-center bg-bg rounded-xl p-1 shadow-inner border border-border/30">
            <button 
              onClick={() => { if(isRecruiterView) toggleViewMode(); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${!isRecruiterView ? 'bg-card shadow-md text-fg' : 'text-muted hover:text-fg'}`}
            >
              <FiLayers className="text-sm" />
              <span className="hidden md:inline">Experience</span>
            </button>
            <button 
              onClick={() => { if(!isRecruiterView) toggleViewMode(); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${isRecruiterView ? 'bg-card shadow-md text-fg' : 'text-muted hover:text-fg'}`}
            >
              <FiList className="text-sm" />
              <span className="hidden md:inline">Resume</span>
            </button>
          </div>
          
          <div className="w-px h-6 bg-border/50" />

          <CommandTerminal />

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl bg-bg border border-border/50 text-fg hover:bg-card transition-colors shadow-sm"
              aria-label="Toggle Dark Mode"
              data-cursor="Theme"
            >
              {theme === 'dark' ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
            </button>
          )}

          <MagneticButton className="hidden lg:flex">
            <a 
              href="mailto:contact@tusharbatham.com" 
              className="px-6 py-2.5 bg-fg text-bg rounded-xl text-xs tracking-widest uppercase font-bold shadow-xl pointer-events-auto"
              data-cursor="Let's Talk"
            >
              Hire Me
            </a>
          </MagneticButton>
        </div>
      </motion.header>
    </div>
  );
}