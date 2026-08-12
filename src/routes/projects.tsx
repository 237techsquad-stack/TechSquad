import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildPageHead({
      title: "Projects - TechSquad Cameroon | LaneForge, client work, hackathons",
      description:
        "See TechSquad Cameroon's flagship projects, including LaneForge, e-commerce work, CodeConnect, and CAMIHACK 2026.",
      path: "/projects",
      image: DEFAULT_OG_IMAGE,
    }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "LaneForge",
    category: "Career platform",
    year: "Launching soon",
    summary: "A platform that guides youths and students toward careers that fit them and helps them build actual skills.",
    stack: ["Career guidance", "Student skills", "Software platform"],
    gradient: "from-primary via-primary-glow to-pink",
    span: "md:col-span-2 md:row-span-2",
    image: "/demos/previews/laneforge-preview.svg",
    demoUrl: "/contact",
  },
  {
    title: "E-commerce-main",
    category: "E-commerce storefront",
    year: "2026",
    summary: "A polished shopping experience with product browsing, cart flow, and responsive storefront sections.",
    stack: ["HTML", "CSS", "UI/UX"],
    gradient: "from-pink via-pink-glow to-gold",
    span: "",
    image: "/demos/previews/ecommerce-dashboard.svg",
    demoUrl: "/demos/e-commerce-main/index.html",
  },
  {
    title: "ember-and-vine",
    category: "RMS dashboard",
    year: "2026",
    summary: "A lightweight resource management app with a simple dashboard and practical team workflows.",
    stack: ["Frontend", "JavaScript", "Dashboard"],
    gradient: "from-gold to-gold-deep",
    span: "",
    image: "/demos/previews/ember-dashboard.svg",
    demoUrl: "/demos/ember-and-vine/index.html",
  },
  {
    title: "CodeConnect idea showcase",
    category: "Conference",
    year: "Nov 30, 2025",
    summary: "TechSquad introduced LaneForge publicly and shared the vision for student career development.",
    stack: ["Pitch", "Community", "LaneForge"],
    gradient: "from-primary to-pink",
    span: "",
    image: "/demos/previews/laneforge-showcase.svg",
    demoUrl: "/contact",
  },
  {
    title: "CAMIHACK 2026",
    category: "Hackathon",
    year: "Apr 6-7, 2026",
    summary: "The team's first hackathon in Buea, where members learned, connected, and strengthened the movement.",
    stack: ["Hackathon", "Networking", "Learning"],
    gradient: "from-primary to-pink",
    span: "md:col-span-2",
    image: "/demos/previews/camihack-preview.svg",
    demoUrl: "/about",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="relative isolate">
        <AmbientBackground />
        <div className="mx-auto max-w-5xl px-4 py-24 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink">Projects</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-normal sm:text-7xl">
              What TechSquad is <span className="text-gradient-hero"><ScrambleText text="building now." /></span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              From LaneForge to client services and community events, these are the initiatives shaping the team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <Stagger className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[300px] md:grid-cols-3" stagger={0.08}>
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.demoUrl}
              target="_blank"
              rel="noreferrer"
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
              className={`group relative overflow-hidden rounded-2xl text-left shadow-glass transition-all hover:-translate-y-1 hover:shadow-elegant ${p.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <img src={p.image} alt={`${p.title} dashboard preview`} className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                    {p.category}
                  </span>
                  <span className="text-xs font-semibold text-white/75">{p.year}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-xl text-sm text-white/75">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </Stagger>
      </section>
    </SiteLayout>
  );
}
