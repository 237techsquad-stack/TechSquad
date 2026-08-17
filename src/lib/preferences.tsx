import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Language = "en" | "fr";
type ColorMode = "default" | "contrast" | "deuteranopia" | "protanopia" | "tritanopia";

type PreferencesContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  largeText: boolean;
  setLargeText: (enabled: boolean) => void;
  reduceMotion: boolean;
  setReduceMotion: (enabled: boolean) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function readStored<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return (window.localStorage.getItem(key) as T | null) ?? fallback;
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => readStored("techsquad-language", "en"));
  const [colorMode, setColorModeState] = useState<ColorMode>(() => readStored("techsquad-color-mode", "default"));
  const [largeText, setLargeTextState] = useState(() => readStored("techsquad-large-text", "false") === "true");
  const [reduceMotion, setReduceMotionState] = useState(() => readStored("techsquad-reduce-motion", "false") === "true");

  const setLanguage = (value: Language) => {
    setLanguageState(value);
    window.localStorage.setItem("techsquad-language", value);
  };

  const setColorMode = (value: ColorMode) => {
    setColorModeState(value);
    window.localStorage.setItem("techsquad-color-mode", value);
  };

  const setLargeText = (value: boolean) => {
    setLargeTextState(value);
    window.localStorage.setItem("techsquad-large-text", String(value));
  };

  const setReduceMotion = (value: boolean) => {
    setReduceMotionState(value);
    window.localStorage.setItem("techsquad-reduce-motion", String(value));
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.colorMode = colorMode;
    document.documentElement.classList.toggle("large-text", largeText);
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
  }, [colorMode, language, largeText, reduceMotion]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      colorMode,
      setColorMode,
      largeText,
      setLargeText,
      reduceMotion,
      setReduceMotion,
    }),
    [colorMode, language, largeText, reduceMotion],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("usePreferences must be used inside PreferencesProvider");
  return value;
}

const dictionary = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    team: "Team",
    contact: "Contact",
    startProject: "Start a project",
    language: "Language",
    accessibility: "Accessibility",
    readPage: "Read page",
    stopReading: "Stop reading",
    largerText: "Larger text",
    reduceMotion: "Reduce motion",
    colorVision: "Color vision",
    defaultVision: "Default",
    highContrast: "High contrast",
    deuteranopia: "Deuteranopia",
    protanopia: "Protanopia",
    tritanopia: "Tritanopia",
  },
  fr: {
    home: "Accueil",
    about: "A propos",
    services: "Services",
    projects: "Projets",
    team: "Equipe",
    contact: "Contact",
    startProject: "Demarrer un projet",
    language: "Langue",
    accessibility: "Accessibilite",
    readPage: "Lire la page",
    stopReading: "Arreter la lecture",
    largerText: "Texte plus grand",
    reduceMotion: "Reduire les animations",
    colorVision: "Vision des couleurs",
    defaultVision: "Defaut",
    highContrast: "Contraste eleve",
    deuteranopia: "Deuteranopie",
    protanopia: "Protanopie",
    tritanopia: "Tritanopie",
  },
} as const;

export function useT() {
  const { language } = usePreferences();
  return (key: keyof typeof dictionary.en) => dictionary[language][key];
}
