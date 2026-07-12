import { Link } from "@tanstack/react-router";
import logoFull from "../../../images/logo-full.png";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2">
      <img
        src={logoFull}
        alt="TechSquad logo"
        className="h-10 w-10 shrink-0 rounded-xl object-contain shadow-glass transition-transform group-hover:scale-105"
      />
      {!compact && (
        <span className="truncate text-lg font-black tracking-normal sm:text-xl">
          <span className="text-[#071733]">TECH</span>
          <span className="text-[#35b7ff]">SQUAD</span>
        </span>
      )}
    </Link>
  );
}
