import { useState } from "react";
import { Eye, Volume2, VolumeX } from "lucide-react";
import { usePreferences, useT } from "@/lib/preferences";

export function AccessibilityPanel() {
  const t = useT();
  const { colorMode, setColorMode, largeText, setLargeText, reduceMotion, setReduceMotion } = usePreferences();
  const [open, setOpen] = useState(false);
  const [reading, setReading] = useState(false);

  const toggleReadAloud = () => {
    if (!("speechSynthesis" in window)) return;

    if (reading) {
      window.speechSynthesis.cancel();
      setReading(false);
      return;
    }

    const content = document.querySelector("main")?.textContent?.replace(/\s+/g, " ").trim();
    if (!content) return;
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.rate = 0.92;
    utterance.onend = () => setReading(false);
    utterance.onerror = () => setReading(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setReading(true);
  };

  return (
    <div className="fixed left-4 top-4 z-[70]">
      <button
        type="button"
        aria-label={t("accessibility")}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="grid h-11 w-11 place-items-center rounded-full border border-brand-sky/30 bg-white/90 text-brand-navy shadow-glass backdrop-blur transition-colors hover:bg-brand-sky hover:text-white"
      >
        <Eye className="h-5 w-5" />
      </button>

      {open && (
        <div className="mt-3 w-72 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-elegant">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-bold">{t("accessibility")}</p>
            <button
              type="button"
              onClick={toggleReadAloud}
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-blue"
            >
              {reading ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              {reading ? t("stopReading") : t("readPage")}
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <label className="flex items-center justify-between gap-3 text-sm">
              <span>{t("largerText")}</span>
              <input type="checkbox" checked={largeText} onChange={(event) => setLargeText(event.target.checked)} />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm">
              <span>{t("reduceMotion")}</span>
              <input type="checkbox" checked={reduceMotion} onChange={(event) => setReduceMotion(event.target.checked)} />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block">{t("colorVision")}</span>
              <select
                value={colorMode}
                onChange={(event) => setColorMode(event.target.value as typeof colorMode)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand-sky"
              >
                <option value="default">{t("defaultVision")}</option>
                <option value="contrast">{t("highContrast")}</option>
                <option value="deuteranopia">{t("deuteranopia")}</option>
                <option value="protanopia">{t("protanopia")}</option>
                <option value="tritanopia">{t("tritanopia")}</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
