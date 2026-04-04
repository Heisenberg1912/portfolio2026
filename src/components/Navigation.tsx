"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function Navigation() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { name: "Initiate", offset: 0 },
    { name: "Spotlight", offset: 0.3 },
    { name: "Community", offset: 0.6 },
    { name: "Connect", offset: 0.9 }
  ];

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      let active = 0;
      if (latest > 0.25) active = 1;
      if (latest > 0.55) active = 2;
      if (latest > 0.85) active = 3;
      setActiveSection(active);
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section, idx) => (
        <div key={section.name} className="flex items-center justify-end gap-4 group">
          <motion.span 
            className={`text-[10px] uppercase tracking-widest font-mono transition-all duration-300 ${activeSection === idx ? 'text-fg opacity-100' : 'text-muted opacity-0 group-hover:opacity-100'}`}
          >
            {section.name}
          </motion.span>
          <div className="w-1.5 h-8 rounded-full bg-border relative overflow-hidden">
            {activeSection === idx && (
              <motion.div 
                layoutId="nav-indicator"
                className="absolute inset-0 bg-accent rounded-full" 
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}