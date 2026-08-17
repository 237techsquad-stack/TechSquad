import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { AmbientBackground } from "@/components/site/AmbientBackground";
<<<<<<< HEAD
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpen, Camera, Compass, MapPin, Rocket, ShieldCheck, Users } from "lucide-react";
import { usePreferences } from "@/lib/preferences";
import codeconnectPhoto from "../../images/Team at codeconnect 2025.png";
import teamMeetingPhoto from "../../images/team meeting.png";
import vishiCampusImage from "../../images/vishi.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - TECHSQUAD" },
      { name: "description", content: "The story of TECHSQUAD Cameroon, from a student initiative at VISHI Higher Institute to LaneForge and client software services." },
      { property: "og:title", content: "About - TECHSQUAD" },
      { property: "og:description", content: "How TECHSQUAD Cameroon began and what it is building." },
    ],
  }),
=======
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
>>>>>>> 4f48a8fcb1c1af9212b616171d3f3bf33de77b11
  component: AboutPage,
});

const milestones = [
  {
    year: "October 2025",
    title: "Started at VISHI Higher Institute",
    body: "TECHSQUAD began as a student initiative tech team built around learning, collaboration, and practical software problem solving.",
  },
  {
    year: "November 30, 2025",
    title: "CodeConnect conference",
    body: "The team introduced LaneForge, a career-building platform that guides youths and students toward careers that fit them and helps them build actual skills.",
  },
  {
    year: "April 6-7, 2026",
    title: "CAMIHACK 2026 in Buea",
    body: "TECHSQUAD attended its first hackathon, made important connections, and learned from builders across the ecosystem.",
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
  { icon: Users, title: "Team spirit", body: "Design, development, growth, and operations work together instead of moving in silos." },
  { icon: Rocket, title: "Software infrastructure", body: "Our long-term goal is to create infrastructure software solutions that empower Africa's digital future." },
];

// imageUrl can be a local project path or a full web image URL.
const activityGallery = [
  {
    title: "CodeConnect showcase",
    caption: "Presenting LaneForge and sharing the team's career-building vision.",
    imageUrl: codeconnectPhoto,
  },
  {
    title: "Team meeting",
    caption: "Planning the next build, aligning ideas, and sharpening the roadmap.",
    imageUrl: teamMeetingPhoto,
  },
  {
    title: "Project studio",
    caption: "Building websites, dashboards, and digital tools as a team.",
    imageUrl: vishiCampusImage,
  },
];

const aboutCopy = {
  en: {
    kicker: "Our story",
    title: "Started as students.",
    focus: "Building for Africa.",
    intro: "TECHSQUAD Cameroon began at VISHI Higher Institute in October 2025 and is growing into a team that builds software, trains young talent, and prepares LaneForge for launch.",
    vishiLabel: "Institutional roots",
    vishiTitle: "VISHI Higher Institute of Cameroon",
    vishiBody: "VISHI Higher Institute of Cameroon is a private, accredited higher education institution founded in 2020 in Douala, Littoral Region, Cameroon. Officially recognized by the Ministry of Higher Education (MINESUP), the polytechnic operates as a classical higher institute with multi-level professional programs.",
    vishiAuthority: "Authorization No. 21-04405/I/MINESUP/SG/DDES/SD.ESUP/SDA/NA",
    vishiLocation: "Bonaberi, behind the Nestle factory in Minkwele",
    vishiCampus: "Private accredited polytechnic",
    vishiPrograms: "Professional multi-level programs",
    arc: "Origin arc",
    arcTitle: "From initiative to movement",
    milestones,
    valuesLabel: "Mission & values",
    valuesTitle: "We exist to create useful software and capable builders.",
    values,
    galleryLabel: "Activity history",
    galleryTitle: "A living gallery for TECHSQUAD moments.",
    galleryIntro: "This section is ready for photos, event notes, and updates from conferences, hackathons, trainings, and project work.",
    activityGallery,
  },
  fr: {
    kicker: "Notre histoire",
    title: "Nous avons commence comme etudiants.",
    focus: "Construire pour l'Afrique.",
    intro: "TECHSQUAD Cameroon a commence a VISHI Higher Institute en octobre 2025 et devient une equipe qui construit des logiciels, forme de jeunes talents et prepare le lancement de LaneForge.",
    vishiLabel: "Racines institutionnelles",
    vishiTitle: "VISHI Higher Institute of Cameroon",
    vishiBody: "VISHI Higher Institute of Cameroon est un institut prive et accredite fonde en 2020 a Douala, dans la region du Littoral au Cameroun. Reconnu par le Ministere de l'Enseignement Superieur (MINESUP), le polytechnique fonctionne comme un institut superieur classique avec des programmes professionnels a plusieurs niveaux.",
    vishiAuthority: "Autorisation No. 21-04405/I/MINESUP/SG/DDES/SD.ESUP/SDA/NA",
    vishiLocation: "Bonaberi, derriere l'usine Nestle a Minkwele",
    vishiCampus: "Polytechnique prive accredite",
    vishiPrograms: "Programmes professionnels multi-niveaux",
    arc: "Origine",
    arcTitle: "De l'initiative au mouvement",
    milestones: [
      { year: "Octobre 2025", title: "Debut a VISHI Higher Institute", body: "TECHSQUAD a commence comme une initiative etudiante basee sur l'apprentissage, la collaboration et la resolution pratique de problemes logiciels." },
      { year: "30 novembre 2025", title: "Conference CodeConnect", body: "L'equipe a presente LaneForge, une plateforme qui guide les jeunes et les etudiants vers des carrieres adaptees et de vraies competences." },
      { year: "6-7 avril 2026", title: "CAMIHACK 2026 a Buea", body: "TECHSQUAD a participe a son premier hackathon, a cree des connexions importantes et a appris d'autres builders." },
      { year: "2026", title: "Services clients et base utilisateurs", body: "Pendant la preparation de LaneForge, l'equipe fournit des services clients et construit une base d'utilisateurs etudiants." },
    ],
    valuesLabel: "Mission & valeurs",
    valuesTitle: "Nous existons pour creer des logiciels utiles et des builders capables.",
    values: [
      { icon: Compass, title: "Impact africain", body: "Nous nous concentrons sur les problemes pratiques des etudiants, des jeunes, des communautes et de l'acces numerique." },
      { icon: BookOpen, title: "Apprendre en construisant", body: "Les membres progressent avec de vrais projets, le travail d'equipe, les hackathons et le mentorat." },
      { icon: Users, title: "Esprit d'equipe", body: "Design, developpement, croissance et operations avancent ensemble." },
      { icon: Rocket, title: "Infrastructure logicielle", body: "Notre objectif est de creer des solutions logicielles d'infrastructure qui renforcent l'avenir numerique de l'Afrique." },
    ],
    galleryLabel: "Historique des activites",
    galleryTitle: "Une galerie vivante des moments TECHSQUAD.",
    galleryIntro: "Cette section est prete pour les photos, notes d'evenements et mises a jour des conferences, hackathons, formations et projets.",
    activityGallery,
  },
} as const;

function AboutPage() {
  const { language } = usePreferences();
  const text = aboutCopy[language];

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

      <section className="bg-[#071733] px-4 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg border border-white/12 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.26)]">
              <img
                src={vishiCampusImage}
                alt="VISHI Higher Institute campus"
                className="h-[320px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#35b7ff]">{text.vishiLabel}</p>
            <h2 className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-5xl">
              <ScrambleText text={text.vishiTitle} />
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
              {text.vishiBody}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: text.vishiAuthority },
                { icon: MapPin, label: text.vishiLocation },
                { icon: BookOpen, label: text.vishiCampus },
                { icon: Users, label: text.vishiPrograms },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-h-20 items-start gap-3 border-t border-white/14 pt-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#35b7ff]" />
                  <span className="text-sm font-semibold leading-6 text-white/86">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-20 pb-16 sm:pt-24">
        <Reveal className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{text.arc}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl"><ScrambleText text={text.arcTitle} /></h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-pink to-gold md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-14">
            {text.milestones.map((m, i) => (
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">{text.galleryLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            <ScrambleText text={text.galleryTitle} />
          </h2>
          <p className="mt-5 text-muted-foreground">{text.galleryIntro}</p>
        </Reveal>
        <div className="mt-10">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {text.activityGallery.map((item) => (
                <CarouselItem key={item.title} className="pl-4 basis-full md:basis-1/2 xl:basis-1/3">
                  <motion.figure
                    variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-lg bg-card"
                  >
                    <div className="relative h-[320px] overflow-hidden bg-[#071733] sm:h-[380px]">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(2,6,23,0.18)_55%,rgba(2,6,23,0.82)_100%)]" />
                      <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-md bg-white/90 text-brand-blue shadow-glass">
                        <Camera className="h-5 w-5" />
                      </div>
                      <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                        <h3 className="text-lg font-bold sm:text-xl">{item.title}</h3>
                        <p className="mt-1 max-w-md text-sm text-white/82">{item.caption}</p>
                      </figcaption>
                    </div>
                  </motion.figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex items-center justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">{text.valuesLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            <ScrambleText text={text.valuesTitle} />
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {text.values.map((v, idx) => (
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
