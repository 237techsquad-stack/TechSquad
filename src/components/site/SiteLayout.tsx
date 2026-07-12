import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { SplashScreen } from "./SplashScreen";
import { CustomCursor } from "./CustomCursor";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SplashScreen />
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
      <FloatingActions />
      <CustomCursor />
    </div>
  );
}
