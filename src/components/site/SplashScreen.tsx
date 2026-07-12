import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoFull from "../../../images/logo-full.png";

const bootLines = [
  "Initializing TechSquad systems...",
  "Loading Cameroon digital future...",
  "Syncing LaneForge roadmap...",
  "Preparing builders, designers, and leaders...",
  "Launch interface ready.",
];

export function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("techsquad-booted")) return;
    sessionStorage.setItem("techsquad-booted", "true");
    setVisible(true);

    const progressTimer = window.setInterval(() => {
      setProgress((value) => Math.min(value + 4, 100));
    }, 80);
    const lineTimer = window.setInterval(() => {
      setLineCount((value) => Math.min(value + 1, bootLines.length));
    }, 360);
    const hideTimer = window.setTimeout(() => setVisible(false), 3000);

    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(lineTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#071733] px-6 text-white"
        >
          <div className="w-full max-w-md text-center">
            <motion.img
              src={logoFull}
              alt="TechSquad logo"
              animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto h-28 w-28 object-contain"
            />
            <div className="mt-8 space-y-2 rounded-2xl bg-white/10 p-5 text-left font-mono text-xs text-cyan-100 shadow-[0_20px_60px_rgba(7,23,51,0.4)] backdrop-blur">
              {bootLines.slice(0, lineCount).map((line) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <span className="text-[#35b7ff]">&gt;</span>
                  <span>{line}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full rounded-full bg-[#35b7ff]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="mt-2 text-right font-mono text-xs text-white/60">{progress}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
