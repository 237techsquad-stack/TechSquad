import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Bell, ChevronDown, Code2, Lightbulb, ShieldCheck, Users, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ParticleCanvas } from "@/components/home/ParticleHero";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { Reveal, Stagger } from "@/components/animations/Reveal";
import { usePreferences, useT } from "@/lib/preferences";
import laneForgeLogo from "../../images/Laneforge-transparent.png";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: "TechSquad - African software, learning, and LaneForge",
      description:
        "TechSquad Cameroon builds software solutions, digital skills, and the LaneForge career platform for students and young professionals.",
      path: "/",
      image: DEFAULT_OG_IMAGE,
    }),
  component: Index,
});

const stats = [
  { value: 2025, label: "Started at VISHI" },
  { value: 12, label: "Core members" },
  { value: 2, label: "Months to LaneForge" },
  { value: 100, label: "Africa-focused" },
];

const services = [
  {
    title: "Software infrastructure",
    body: "We design and build practical web platforms, internal tools, and digital systems that help people work faster.",
    bullets: ["Product planning", "Frontend and backend development", "Deployment-ready systems"],
  },
  {
    title: "Web and app development",
    body: "From student-facing platforms to client service websites, we turn ideas into usable software with clean interfaces.",
    bullets: ["Responsive websites", "React applications", "Mobile-first experiences"],
  },
  {
    title: "Brand growth and digital content",
    body: "TECHSQUAD helps projects look credible, communicate clearly, and reach the people they were built for.",
    bullets: ["Brand identity", "Graphic design", "Social media growth"],
  },
  {
    title: "Training and collaboration",
    body: "We are building a team culture where young builders learn by shipping real solutions together.",
    bullets: ["Mentorship", "Team projects", "Hackathon readiness"],
  },
];

const method = [
  { step: "01", title: "Listen", body: "We begin with the real problem, the people affected, and the context around them." },
  { step: "02", title: "Prototype", body: "Ideas become quick screens, flows, and technical tests before we overbuild." },
  { step: "03", title: "Build", body: "Designers, developers, and growth leads work together until the solution is usable." },
  { step: "04", title: "Launch and learn", body: "We release, gather feedback, and keep improving toward meaningful impact." },
];

const terminalLines = [
  "npx create-solution --for africa",
  "sync team --design --code --growth",
  "deploy LaneForge --launch soon",
  "status: building digital futures",
];

const homeCopy = {
  en: {
    badge: "LaneForge is launching soon",
    heroLead: "Empowering ",
    heroFocus: "Africa's digital future.",
    intro: "TECHSQUAD Cameroon is a student-born tech team building software solutions, strengthening young builders, and preparing LaneForge to guide students toward careers that fit them.",
    story: "Our story",
    stats: ["Started at VISHI", "Core members", "Months to LaneForge", "Africa-focused"],
    marquee: ["Software Engineering", "LaneForge", "Digital Skills", "Brand Growth", "Student Innovation", "Cameroon"],
    whatWeDo: "What we do",
    serviceHeading: "We build, train, brand, and launch practical digital solutions.",
    services,
    methodLabel: "Our method",
    methodHeading: "A clear path from idea to working solution.",
    methodIntro: "Our process is progressive and collaborative: understand the problem, prototype quickly, build with discipline, then learn from real users.",
    method,
    comingSoon: "Coming soon",
    meet: "Meet",
    laneForgeIntro: "A career-building platform that guides youths and students toward a career that fits them and helps them build actual skills.",
    notify: "Notify me at launch",
    learnMore: "Learn more",
    earlyAccess: "Get early access",
    userBase: "Building a student user base before launch",
  },
  fr: {
    badge: "LaneForge sera bientot lance",
    heroLead: "Renforcer ",
    heroFocus: "l'avenir numerique de l'Afrique.",
    intro: "TECHSQUAD Cameroon est une equipe tech nee d'etudiants qui construit des solutions logicielles, renforce de jeunes talents et prepare LaneForge pour guider les etudiants vers des carrieres adaptees.",
    story: "Notre histoire",
    stats: ["Debut a VISHI", "Membres principaux", "Mois avant LaneForge", "Centre sur l'Afrique"],
    marquee: ["Genie logiciel", "LaneForge", "Competences numeriques", "Croissance de marque", "Innovation etudiante", "Cameroun"],
    whatWeDo: "Ce que nous faisons",
    serviceHeading: "Nous construisons, formons, marquons et lançons des solutions numeriques pratiques.",
    services: [
      {
        title: "Infrastructure logicielle",
        body: "Nous concevons et construisons des plateformes web, des outils internes et des systemes numeriques pratiques pour aider les gens a travailler plus vite.",
        bullets: ["Planification produit", "Developpement frontend et backend", "Systemes prets au deploiement"],
      },
      {
        title: "Developpement web et application",
        body: "Des plateformes pour etudiants aux sites clients, nous transformons les idees en logiciels utilisables avec des interfaces claires.",
        bullets: ["Sites responsive", "Applications React", "Experiences mobile-first"],
      },
      {
        title: "Croissance de marque et contenu",
        body: "TECHSQUAD aide les projets a paraitre credibles, communiquer clairement et atteindre les personnes visees.",
        bullets: ["Identite de marque", "Design graphique", "Croissance sur les reseaux sociaux"],
      },
      {
        title: "Formation et collaboration",
        body: "Nous construisons une culture d'equipe ou les jeunes builders apprennent en livrant de vraies solutions ensemble.",
        bullets: ["Mentorat", "Projets d'equipe", "Preparation aux hackathons"],
      },
    ],
    methodLabel: "Notre methode",
    methodHeading: "Un chemin clair de l'idee a la solution fonctionnelle.",
    methodIntro: "Notre processus est progressif et collaboratif: comprendre le probleme, prototyper vite, construire avec discipline, puis apprendre des vrais utilisateurs.",
    method: [
      { step: "01", title: "Ecouter", body: "Nous commencons par le vrai probleme, les personnes concernees et leur contexte." },
      { step: "02", title: "Prototyper", body: "Les idees deviennent rapidement des ecrans, des parcours et des tests techniques." },
      { step: "03", title: "Construire", body: "Designers, developpeurs et leads croissance travaillent ensemble jusqu'a une solution utilisable." },
      { step: "04", title: "Lancer et apprendre", body: "Nous publions, collectons les retours et continuons d'ameliorer l'impact." },
    ],
    comingSoon: "Bientot disponible",
    meet: "Decouvrez",
    laneForgeIntro: "Une plateforme de carriere qui guide les jeunes et les etudiants vers une voie adaptee et les aide a developper de vraies competences.",
    notify: "Me prevenir au lancement",
    learnMore: "En savoir plus",
    earlyAccess: "Acces anticipe",
    userBase: "Construction d'une base d'utilisateurs etudiants avant le lancement",
  },
} as const;

function Index() {
  const [openService, setOpenService] = useState(0);
  const { language } = usePreferences();
  const t = useT();
  const text = homeCopy[language];

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <ParticleCanvas />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/55 to-background" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-44 sm:pt-24 sm:pb-52 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-foreground/70 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
              </span>
              {text.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-normal sm:text-7xl md:text-[84px]"
            >
              <span className="text-[#071733]">{text.heroLead}</span>
              <span className="text-gradient-hero">
                <ScrambleText text={text.heroFocus} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              {text.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                <span>{t("startProject")}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="pointer-events-none absolute inset-0 animate-shimmer" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-4 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-pink hover:text-pink"
              >
                {text.story}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <TerminalPanel />
        </div>

        <div className="pointer-events-none absolute bottom-16 left-1/2 hidden h-14 w-px -translate-x-1/2 overflow-hidden rounded-full bg-border sm:block">
          <span className="block h-6 w-px animate-scroll-cue bg-pink" />
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-40 max-w-7xl px-4 pb-24 sm:-mt-52">
        <Stagger className="grid grid-cols-2 sm:grid-cols-4" stagger={0.08}>
          {stats.map((stat, index) => (
            <motion.div
              key={text.stats[index]}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="border-border px-4 py-4 text-center sm:border-l sm:first:border-l-0"
            >
              <div className="text-4xl font-black text-gradient-hero sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={index === 3 ? "%" : ""} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {text.stats[index]}
              </div>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="overflow-hidden border-y border-border bg-[#071733] py-4 text-white">
        <div className="marquee-track flex gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
          {Array.from({ length: 2 }).map((_, group) => (
            <span key={group} className="flex gap-8">
              {text.marquee.map((item) => <span key={item}>{item}</span>)}
            </span>
          ))}
        </div>
      </section>

      <section className="relative bg-[#071733] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#35b7ff]">{text.whatWeDo}</p>
            <h2 className="mt-3 text-4xl font-bold tracking-normal text-cyan-100 sm:text-5xl">
              <ScrambleText text={text.serviceHeading} />
            </h2>
          </Reveal>

          <div className="space-y-3">
            {text.services.map((service, index) => {
              const isOpen = openService === index;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="border-b border-white/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpenService(isOpen ? -1 : index)}
                    className="group flex w-full items-center gap-5 py-6 text-left transition-transform hover:-translate-x-1"
                  >
                    <span className="text-sm font-bold text-white/35">0{index + 1}</span>
                    <span className={`flex-1 text-2xl font-bold transition-colors ${isOpen ? "text-[#35b7ff]" : "text-white group-hover:text-cyan-100"}`}>
                      {service.title}
                    </span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180 text-[#35b7ff]" : "group-hover:rotate-45"}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-12 text-sm text-white/70">
                          <p>{service.body}</p>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                            {service.bullets.map((bullet) => (
                              <li key={bullet} className="text-white/80">
                                <span className="mr-2 text-[#35b7ff]">-</span>{bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{text.methodLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            <span className="text-gradient-hero">
              <ScrambleText text={text.methodHeading} />
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            {text.methodIntro}
          </p>
        </Reveal>

        <div className="relative space-y-8">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-primary via-pink to-gold" />
          {text.method.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative pl-16"
            >
              <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-gradient-hero text-sm font-bold text-primary-foreground shadow-elegant">
                {item.step}
              </span>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-1 shadow-glass">
          <div className="relative overflow-hidden rounded-[calc(1.75rem-4px)] bg-[#08172b] p-8 sm:p-14">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#1d4f7a]/20 blur-3xl" />
              <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#c5a64f]/12 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                  maskImage: "radial-gradient(ellipse at center, black 18%, transparent 72%)",
                }}
              />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  <Zap className="h-3.5 w-3.5" /> {text.comingSoon}
                </div>
                <div className="relative mt-5">
                  <div className="absolute right-0 top-0 w-[220px] sm:w-[280px] lg:w-[360px]">
                    <img
                      src={laneForgeLogo}
                      alt="LaneForge logo"
                      className="h-20 w-full object-contain sm:h-24 lg:h-28"
                    />
                  </div>
                  <h2 className="max-w-[calc(100%-235px)] pr-3 text-5xl font-bold leading-[1.05] tracking-normal text-white sm:max-w-[calc(100%-300px)] sm:pr-6 sm:text-6xl">
                    {text.meet}{" "}
                    <span className="text-[#d7bd66]">
                      <ScrambleText text="LaneForge" />
                    </span>
                  </h2>
                </div>
                <p className="mt-5 max-w-lg text-lg text-white/70">
                  {text.laneForgeIntro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#waitlist"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#d7bd66] px-6 py-3 text-sm font-bold text-[#071733] shadow-gold transition-colors hover:bg-[#e0c878]"
                  >
                    <Bell className="h-4 w-4" />
                    {text.notify}
                  </a>
                  <a
                    href="#waitlist"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/60"
                  >
                    {text.learnMore} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div id="waitlist">
                <CountdownTimer />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-6 flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
                  />
                  <button className="rounded-xl bg-[#2f74a8] px-5 py-3 text-sm font-bold text-white shadow-pink transition-colors hover:bg-[#3986bd]">
                    {text.earlyAccess}
                  </button>
                </form>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                  <Users className="h-3.5 w-3.5" />
                  {text.userBase}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const frames = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.round((value * frame) / frames));
      if (frame >= frames) window.clearInterval(timer);
    }, 24);
    return () => window.clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function ScrambleText({ text }: { text: string }) {
  const chars = "TECHSQUAD01";
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const timer = window.setInterval(() => {
      frame += 1;
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < frame / 2) return char;
            return chars[(index + frame) % chars.length];
          })
          .join(""),
      );
      if (frame > text.length * 2) window.clearInterval(timer);
    }, 35);
    return () => window.clearInterval(timer);
  }, [text]);

  return <span>{display}</span>;
}

function TerminalPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotateX: 4, rotateY: -5, scale: 1.02 }}
      className="mx-auto w-full max-w-md animate-terminal-float rounded-2xl border border-white/15 bg-[#071733] p-4 text-white shadow-elegant [transform-style:preserve-3d]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <span className="h-3 w-3 rounded-full bg-pink" />
        <span className="h-3 w-3 rounded-full bg-gold" />
        <span className="h-3 w-3 rounded-full bg-[#35b7ff]" />
        <span className="ml-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">TECHSQUAD terminal</span>
      </div>
      <div className="space-y-3 pt-5 font-mono text-xs sm:text-sm">
        {terminalLines.map((line, index) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.35, duration: 0.45 }}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="text-[#35b7ff]">$</span>
            <span className="terminal-type overflow-hidden whitespace-nowrap" style={{ animationDelay: `${0.7 + index * 0.35}s` }}>
              {line}
            </span>
            {index === terminalLines.length - 1 && <span className="h-5 w-2 animate-cursor bg-[#35b7ff]" />}
          </motion.div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
        {[
          { icon: Code2, label: "Software" },
          { icon: Lightbulb, label: "Ideas" },
          { icon: Users, label: "Youth" },
          { icon: ShieldCheck, label: "Impact" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm font-semibold text-white/70">
            <Icon className="h-4 w-4 text-[#35b7ff]" />
            {label}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
