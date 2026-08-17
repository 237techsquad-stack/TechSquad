import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { ArrowRight, Brain, Code2, Palette, Smartphone, Users, Wand2 } from "lucide-react";
import { usePreferences, useT } from "@/lib/preferences";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - TECHSQUAD" },
      { name: "description", content: "Software development, web platforms, brand growth, UI/UX, and student-focused digital solutions from TECHSQUAD Cameroon." },
      { property: "og:title", content: "Services - TECHSQUAD" },
      { property: "og:description", content: "Explore TECHSQUAD Cameroon services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Web and software development", body: "Responsive websites, practical web apps, and digital systems for students, teams, and clients.", tags: ["React", "Laravel", "PHP", "JavaScript"] },
  { icon: Smartphone, title: "Mobile-first experiences", body: "Interfaces that fit real screens and real users, with a focus on clarity and usability.", tags: ["Responsive", "PWA", "Flutter"] },
  { icon: Palette, title: "Graphic design and UI/UX", body: "Visual identity, interface design, brand assets, and user-friendly layouts for digital products.", tags: ["Branding", "Canva", "UI/UX"] },
  { icon: Brain, title: "Career and learning platforms", body: "LaneForge is our flagship direction: helping youths discover fitting careers and build actual skills.", tags: ["LaneForge", "Guidance", "Skills"] },
  { icon: Wand2, title: "Brand growth and content", body: "Content strategy, video editing, social media management, and launch communication.", tags: ["Growth", "Content", "Marketing"] },
  { icon: Users, title: "Training and collaboration", body: "We help young builders learn by working together on real projects, hackathons, and client needs.", tags: ["Mentorship", "Teamwork", "Hackathons"] },
];

const process = [
  { step: "01", title: "Discover", body: "We understand the problem, the users, and the real constraints before choosing a solution." },
  { step: "02", title: "Design", body: "We map flows, create visuals, and shape the experience for clarity on every screen." },
  { step: "03", title: "Build", body: "Developers and designers turn the idea into working software with focused iterations." },
  { step: "04", title: "Launch", body: "We deliver, gather feedback, and improve the solution so it keeps serving people." },
];

const servicesCopy = {
  en: {
    kicker: "Services",
    title: "Practical services for",
    focus: "digital growth.",
    intro: "TECHSQUAD combines software engineering, design, branding, and collaboration to build solutions that can serve real users.",
    services,
    processLabel: "Process",
    processTitle: "How a project moves through TECHSQUAD.",
    process,
  },
  fr: {
    kicker: "Services",
    title: "Des services pratiques pour la",
    focus: "croissance numerique.",
    intro: "TECHSQUAD combine genie logiciel, design, branding et collaboration pour construire des solutions utiles aux vrais utilisateurs.",
    services: [
      { icon: Code2, title: "Developpement web et logiciel", body: "Sites responsive, applications pratiques et systemes numeriques pour etudiants, equipes et clients.", tags: ["React", "Laravel", "PHP", "JavaScript"] },
      { icon: Smartphone, title: "Experiences mobile-first", body: "Des interfaces adaptees aux vrais ecrans et aux vrais utilisateurs, avec priorite a la clarte.", tags: ["Responsive", "PWA", "Flutter"] },
      { icon: Palette, title: "Design graphique et UI/UX", body: "Identite visuelle, design d'interface, assets de marque et layouts faciles a utiliser.", tags: ["Branding", "Canva", "UI/UX"] },
      { icon: Brain, title: "Plateformes de carriere et apprentissage", body: "LaneForge est notre direction phare: aider les jeunes a decouvrir des carrieres adaptees et a construire de vraies competences.", tags: ["LaneForge", "Orientation", "Competences"] },
      { icon: Wand2, title: "Croissance de marque et contenu", body: "Strategie de contenu, montage video, gestion des reseaux sociaux et communication de lancement.", tags: ["Croissance", "Contenu", "Marketing"] },
      { icon: Users, title: "Formation et collaboration", body: "Nous aidons les jeunes builders a apprendre ensemble sur de vrais projets, hackathons et besoins clients.", tags: ["Mentorat", "Equipe", "Hackathons"] },
    ],
    processLabel: "Processus",
    processTitle: "Comment un projet avance chez TECHSQUAD.",
    process: [
      { step: "01", title: "Decouvrir", body: "Nous comprenons le probleme, les utilisateurs et les contraintes avant de choisir une solution." },
      { step: "02", title: "Designer", body: "Nous mappons les parcours, creons les visuels et clarifions l'experience sur chaque ecran." },
      { step: "03", title: "Construire", body: "Developpeurs et designers transforment l'idee en logiciel fonctionnel par iterations." },
      { step: "04", title: "Lancer", body: "Nous livrons, collectons les retours et ameliorons la solution pour continuer a servir." },
    ],
  },
} as const;

function ServicesPage() {
  const { language } = usePreferences();
  const t = useT();
  const text = servicesCopy[language];

  return (
    <SiteLayout>
      <section className="relative isolate">
        <AmbientBackground />
        <div className="mx-auto max-w-5xl px-4 pt-24 pb-36 text-center sm:pb-44">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">{text.kicker}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-normal sm:text-7xl">
              {text.title} <span className="text-gradient-hero"><ScrambleText text={text.focus} /></span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {text.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 pb-24 sm:pt-24">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {text.services.map((s) => (
            <motion.article
              key={s.title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-left shadow-glass transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant transition-transform group-hover:rotate-6">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-6 text-2xl font-bold tracking-normal">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.body}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-pink/40 bg-pink/10 px-3 py-1 text-xs font-semibold text-pink">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{text.processLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl"><ScrambleText text={text.processTitle} /></h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary via-pink to-gold lg:left-1/2 lg:hidden" />
          <div className="hidden lg:block">
            <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-primary via-pink to-gold" />
          </div>
          <Stagger className="grid gap-8 lg:grid-cols-4" stagger={0.12}>
            {text.process.map((p) => (
              <motion.div key={p.step} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} className="relative pl-16 lg:pl-0">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-lg font-bold text-primary-foreground shadow-elegant">
                  {p.step}
                </div>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-16 flex justify-center">
          <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105">
            {t("startProject")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
