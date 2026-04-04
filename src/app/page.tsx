"use client";

import { useViewMode } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GalleryWalk } from "@/components/GalleryWalk";
import { RunClubMap } from "@/components/RunClubMap";
import { RecruiterTable } from "@/components/RecruiterTable";
import { AnimatePresence, motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  const { isRecruiterView } = useViewMode();

  return (
    <main className="min-h-screen bg-bg text-fg relative overflow-hidden transition-colors duration-500">
      <Navigation />
      <Header />
      
      <AnimatePresence mode="wait">
        {isRecruiterView ? (
          <motion.div 
            key="recruiter-view" 
            className="bg-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RecruiterTable />
          </motion.div>
        ) : (
          <motion.div 
            key="artisan-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <GalleryWalk />
            <RunClubMap />
            
            <footer className="py-32 md:py-48 text-center bg-fg text-bg border-t border-border flex flex-col items-center relative overflow-hidden transition-colors duration-500">
              {/* Organic shape in footer */}
              <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-bold mb-10 tracking-tight text-balance">
                  Let&apos;s engineer <br/><span className="italic font-normal opacity-70">something beautiful.</span>
                </h2>
                <MagneticButton>
                  <a 
                    href="mailto:batham.tushar2001@gmail.com" 
                    className="inline-block px-12 py-5 bg-accent text-white rounded-full hover:bg-bg hover:text-fg transition-colors duration-500 text-sm tracking-[0.2em] uppercase font-bold shadow-2xl"
                  >
                    Hire Me
                  </a>
                </MagneticButton>
                <p className="mt-32 md:mt-40 text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase opacity-40">
                  &copy; {new Date().getFullYear()} Tushar Batham. The Artisan Engineer.
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}