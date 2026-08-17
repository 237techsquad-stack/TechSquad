import { Link } from "@tanstack/react-router";
import logoFull from "../../../images/logo-full.png";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2">
      <img
        src={logoFull}
        alt="TECHSQUAD logo"
        className="h-10 w-10 shrink-0 rounded-xl object-contain shadow-glass transition-transform group-hover:scale-105"
      />
      {!compact && (
        <span className="truncate text-xl font-black leading-none tracking-[0.03em] sm:text-2xl">
          <span className="text-brand-blue">TECH</span>
          <span className="text-brand-navy">SQUAD</span>
        </span>
      )}
    </Link>
  );
}
