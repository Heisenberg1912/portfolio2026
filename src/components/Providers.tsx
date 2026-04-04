"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

interface ViewModeContextType {
  isRecruiterView: boolean;
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
}

export function Providers({ children }: { children: ReactNode }) {
  const [isRecruiterView, setIsRecruiterView] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleViewMode = () => {
    setIsRecruiterView((prev) => !prev);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ViewModeContext.Provider value={{ isRecruiterView, toggleViewMode }}>
        {mounted && children}
        <Toaster position="bottom-right" richColors />
      </ViewModeContext.Provider>
    </ThemeProvider>
  );
}