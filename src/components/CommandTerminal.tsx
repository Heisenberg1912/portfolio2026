"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { FiTerminal, FiMail, FiPhone, FiGithub, FiLinkedin, FiDownloadCloud, FiMoon, FiSun } from "react-icons/fi";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export function CommandTerminal() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast.success(message);
    setOpen(false);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-card/50 border border-border/50 rounded-lg text-xs text-muted hover:text-fg hover:bg-card transition-colors shadow-inner"
        data-cursor="Terminal"
      >
        <FiTerminal className="text-accent" />
        <span>Command Menu</span>
        <kbd className="ml-2 font-mono text-[10px] bg-bg px-1.5 py-0.5 rounded border border-border/50 text-muted shadow-sm">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pt-[20vh] pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              <Command className="w-full bg-transparent flex flex-col">
                <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
                  <Command.Input 
                    autoFocus
                    placeholder="Type a command or search..." 
                    className="w-full bg-transparent p-4 text-sm text-fg outline-none placeholder:text-muted"
                  />
                </div>

                <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                  <Command.Empty className="p-4 text-center text-sm text-muted">No results found.</Command.Empty>

                  <Command.Group heading="Contact & Connect" className="text-[10px] font-bold tracking-widest uppercase text-muted px-2 py-2">
                    <Command.Item 
                      onSelect={() => copyToClipboard("batham.tushar2001@gmail.com", "Email copied to clipboard!")}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-fg cursor-pointer aria-selected:bg-accent aria-selected:text-white transition-colors"
                    >
                      <FiMail className="opacity-70" /> Copy Email Address
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => copyToClipboard("+919755247877", "Phone number copied to clipboard!")}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-fg cursor-pointer aria-selected:bg-accent aria-selected:text-white transition-colors"
                    >
                      <FiPhone className="opacity-70" /> Copy Phone Number
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => openLink("https://linkedin.com/in/tusharbatham")}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-fg cursor-pointer aria-selected:bg-accent aria-selected:text-white transition-colors"
                    >
                      <FiLinkedin className="opacity-70" /> View LinkedIn
                    </Command.Item>
                  </Command.Group>

                  <Command.Group heading="Resources" className="text-[10px] font-bold tracking-widest uppercase text-muted px-2 py-2 mt-2">
                    <Command.Item 
                      onSelect={() => openLink("https://drive.google.com/file/d/10XRUUeLeBFdrs4m8IdhNn1_bTZEtq0O7/view?usp=sharing")}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-fg cursor-pointer aria-selected:bg-accent aria-selected:text-white transition-colors"
                    >
                      <FiDownloadCloud className="opacity-70" /> Download Resume PDF
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => openLink("https://github.com/Heisenberg1912")}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-fg cursor-pointer aria-selected:bg-accent aria-selected:text-white transition-colors"
                    >
                      <FiGithub className="opacity-70" /> View GitHub
                    </Command.Item>
                  </Command.Group>

                  <Command.Group heading="Preferences" className="text-[10px] font-bold tracking-widest uppercase text-muted px-2 py-2 mt-2">
                    <Command.Item 
                      onSelect={() => {
                        setTheme(theme === 'dark' ? 'light' : 'dark');
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-fg cursor-pointer aria-selected:bg-accent aria-selected:text-white transition-colors"
                    >
                      {theme === 'dark' ? <FiSun className="opacity-70" /> : <FiMoon className="opacity-70" />}
                      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}