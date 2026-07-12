import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-background">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-gradient-hero opacity-10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandLogo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            TechSquad Cameroon empowers Africa's digital future by building software infrastructure,
            training young talent, and launching practical solutions like LaneForge.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-pink hover:shadow-pink"
              >
                <Icon className="h-4 w-4 text-foreground/70 transition-colors group-hover:text-pink" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["About", "/about"],
              ["Services", "/services"],
              ["Projects", "/projects"],
              ["Team", "/members"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="inline-flex items-center gap-1 transition-colors hover:text-pink">
                  {label} <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>237techsquad@gmail.com</li>
            <li>Cameroon</li>
            <li>VISHI Higher Institute roots</li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-pink"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} TechSquad Cameroon. All rights reserved.</p>
          <p>Empowering Africa's digital future.</p>
        </div>
      </div>
    </footer>
  );
}
