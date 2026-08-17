import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { CustomCursor } from "./CustomCursor";
import { AccessibilityPanel } from "./AccessibilityPanel";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AccessibilityPanel />
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
      <FloatingActions />
      <CustomCursor />
    </div>
  );
}
