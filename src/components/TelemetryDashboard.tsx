"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiActivity, FiCpu, FiWifi } from "react-icons/fi";

export function TelemetryDashboard() {
  const [cpu, setCpu] = useState(24);
  const [memory, setMemory] = useState(45);
  const [requests, setRequests] = useState(1024);

  const [chartHeights, setChartHeights] = useState<number[]>([]);
  const [chartDurations, setChartDurations] = useState<number[]>([]);

  useEffect(() => {
    setChartHeights(Array.from({ length: 24 }).map(() => Math.max(10, Math.random() * 100)));
    setChartDurations(Array.from({ length: 24 }).map(() => 1.2 + Math.random()));

    const interval = setInterval(() => {
      setCpu(prev => Math.min(100, Math.max(0, prev + (Math.random() * 10 - 5))));
      setMemory(prev => Math.min(100, Math.max(0, prev + (Math.random() * 4 - 2))));
      setRequests(prev => prev + Math.floor(Math.random() * 25));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="hidden xl:block absolute left-8 top-1/4 glass-panel p-5 rounded-2xl w-64 border border-border/50 shadow-2xl z-20 font-mono backdrop-blur-2xl bg-card/40"
    >
      <div className="flex items-center justify-between mb-5 border-b border-border/50 pb-3">
        <div className="flex items-center gap-2 text-muted text-[10px] uppercase tracking-widest font-bold">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          Live Telemetry
        </div>
        <span className="text-[10px] text-muted">us-central1</span>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="flex items-center gap-2 text-muted"><FiCpu className="text-accent" /> CPU Load</span>
            <span className="text-fg font-bold">{cpu.toFixed(1)}%</span>
          </div>
          <div className="h-1.5 w-full bg-bg rounded-full overflow-hidden shadow-inner">
            <motion.div 
              className="h-full bg-accent" 
              animate={{ width: `${cpu}%` }} 
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="flex items-center gap-2 text-muted"><FiActivity className="text-[var(--gradient-1)]" /> Memory</span>
            <span className="text-fg font-bold">{memory.toFixed(1)}%</span>
          </div>
          <div className="h-1.5 w-full bg-bg rounded-full overflow-hidden shadow-inner">
            <motion.div 
              className="h-full bg-[var(--gradient-1)]" 
              animate={{ width: `${memory}%` }} 
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="flex items-center gap-2 text-muted"><FiWifi className="text-[var(--gradient-3)]" /> Net I/O</span>
            <span className="text-fg font-bold">{requests} req/s</span>
          </div>
          <div className="h-10 w-full flex items-end gap-[2px] mt-2 opacity-80">
            {chartHeights.map((height, i) => (
              <motion.div 
                key={i}
                className="flex-1 bg-gradient-to-t from-[var(--gradient-2)] to-transparent rounded-t-sm"
                animate={{ height: `${height}%` }}
                transition={{ repeat: Infinity, duration: chartDurations[i], repeatType: "mirror" }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}