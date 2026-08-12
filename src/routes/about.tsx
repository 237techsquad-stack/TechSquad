import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { BookOpen, Compass, HeartHandshake, Rocket } from "lucide-react";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildPageHead({
      title: "About TechSquad Cameroon - Student-led software and training",
      description:
        "Discover TechSquad Cameroon's journey from a student initiative to a team building software infrastructure, client services, and LaneForge.",
      path: "/about",
      image: DEFAULT_OG_IMAGE,
    }),
  component: AboutPage,
});

const milestones = [
  {
    year: "October 2025",
    title: "Started at VISHI Higher Institute",
    body: "TechSquad began as a student initiative tech team built around learning, collaboration, and practical software problem solving.",
  },
  {
    year: "November 30, 2025",
    title: "CodeConnect conference",
    body: "The team introduced LaneForge, a career-building platform that guides youths and students toward careers that fit them and helps them build actual skills.",
  },
  {
    year: "April 6-7, 2026",
    title: "CAMIHACK 2026 in Buea",
    body: "TechSquad attended its first hackathon, made important connections, and learned from builders across the ecosystem.",
  },
  {
    year: "2026",
    title: "Client services and user base",
    body: "While preparing LaneForge for launch in about two months, the team began providing services to clients and building a student user base.",
  },
];

const values = [
  { icon: Compass, title: "African impact", body: "We focus on practical problems around students, youths, communities, and digital access." },
  { icon: BookOpen, title: "Learning by building", body: "Members grow through real projects, teamwork, hackathons, and mentorship." },
  { icon: HeartHandshake, title: "Team spirit", body: "Design, development, growth, and operations work together instead of moving in silos." },
  { icon: Rocket, title: "Software infrastructure", body: "Our long-term goal is to create infrastructure software solutions that empower Africa's digital future." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative isolate">
        <AmbientBackground />
        <div className="mx-auto max-w-5xl px-4 py-24 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink">Our story</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-normal sm:text-7xl">
              Started as students. <span className="text-gradient-hero"><ScrambleText text="Building for Africa." /></span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              TechSquad Cameroon began at VISHI Higher Institute in October 2025 and is growing
              into a team that builds software, trains young talent, and prepares LaneForge for launch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <Reveal className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Origin arc</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl"><ScrambleText text="From initiative to movement" /></h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-pink to-gold md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-14">
            {milestones.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="inline-flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-gradient-hero sm:text-4xl">{m.year}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold tracking-normal">{m.title}</h3>
                  <p className="mt-2 text-muted-foreground">{m.body}</p>
                </div>
                <span className="absolute left-4 top-2 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-background ring-4 ring-pink shadow-pink md:left-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink">Mission & values</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            <ScrambleText text="We exist to create useful software and capable builders." />
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className={`relative overflow-hidden rounded-2xl p-8 shadow-glass ${
                idx % 2 === 0
                  ? "border border-primary/30 bg-gradient-to-br from-primary/8 to-primary/2"
                  : "border border-gold/40 bg-gradient-to-br from-gold/12 to-transparent"
              }`}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-elegant ${idx % 2 === 0 ? "bg-gradient-primary" : "bg-gradient-gold"}`}>
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>
    </SiteLayout>
  );
}
