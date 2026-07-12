import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Team - TechSquad" },
      { name: "description", content: "Meet the builders, designers, growth leads, and software developers at TechSquad Cameroon." },
      { property: "og:title", content: "Team - TechSquad" },
      { property: "og:description", content: "Meet the members of TechSquad Cameroon." },
    ],
  }),
  component: MembersPage,
});

const members = [
  {
    name: "Edjaugue Moussombo Champlain",
    role: "Founder and Team Leader",
    field: "Software Engineering",
    skills: "Leadership, project management, software architecture, teaching, mentoring, and social media management.",
    message: "Technology creates possibilities, but leadership turns those possibilities into measurable impact. That is where TechSquad comes in: building solutions, empowering people, and transforming communities.",
  },
  {
    name: "Emma Julienne",
    role: "Technical Lead",
    field: "Software Engineering",
    skills: "Full-stack development, project management, graphic design, and vibe coding cleanup.",
    message: "Technology can solve real problems with minimal resources. TechSquad proves that impactful systems need smart engineering and team spirit.",
  },
  {
    name: "KIMBI DENIS KINJUO",
    role: "Growth Division Lead",
    field: "Software Engineering",
    skills: "Frontend development, prompt engineering, social media management, and import/export specialization.",
    message: "TechSquad empowers Africa's digital future in Cameroon by creating infrastructure software solutions.",
  },
  {
    name: "Mogah Celine",
    role: "Disciplinary Lead",
    field: "Software Engineering",
    skills: "Web development, leadership, teamwork, and communication.",
    message: "I joined TechSquad to learn, grow, collaborate with like-minded people, and build digital solutions that create impact in Africa.",
  },
  {
    name: "Nfor Precious",
    role: "Graphic Design Lead",
    field: "Software Engineering",
    skills: "Graphic design, UI/UX design, branding and visual identity, and frontend web development.",
    message: "I am passionate about using technology to solve real-world problems and excited to help young people create meaningful impact.",
  },
  {
    name: "KANGNUOH ADRIAN",
    role: "Marketing and Branding",
    field: "Software Engineering",
    skills: "Public speaking and marketing.",
    message: "I am passionate about solving basic African problems with technology and helping Africa know what TechSquad has to offer.",
  },
  {
    name: "Ngamfon Dalenton Semernyuy",
    role: "Software Developer",
    field: "Software Engineering",
    skills: "JavaScript, React, Laravel, Flutter, critical thinking, and problem solving.",
    message: "Technology turns real problems into working solutions people actually use. That is what TechSquad is about.",
  },
  {
    name: "Tarshi Williams Ngarfon",
    role: "Software Developer",
    field: "Software Engineering",
    skills: "HTML, CSS, JavaScript, React, Node.js, PHP, Laravel, Supabase, Git/GitHub, UI/UX, problem solving, and critical thinking.",
    message: "Technology transforms ideas into real-world solutions that improve people's lives.",
  },
  {
    name: "Fon Ramsey",
    role: "Frontend Developer and UI/UX Vibe Code Cleanup Specialist",
    field: "Frontend Development and UI/UX",
    skills: "Frontend development, interface cleanup, and user-focused implementation.",
    message: "What draws me to technology is turning a real-world problem into a working solution people rely on.",
  },
  {
    name: "Saha Keudjeu Sorelle",
    role: "Software Engineering Student and Member",
    field: "Software Engineering and Web Development",
    skills: "C/C++, HTML, CSS, PHP, MySQL database management, and UI/UX design with Canva.",
    message: "TechSquad is a place to build innovative solutions, collaborate with passionate developers, and solve problems that make positive impact.",
  },
  {
    name: "Kimbi Jessica",
    role: "Growth Team Member",
    field: "Content Creation and Brand Growth",
    skills: "Video editing, content strategy, and graphic design.",
    message: "TechSquad Cameroon equips young people with practical tech skills and builds innovative software solutions for real-world challenges.",
  },
  {
    name: "Forghab Lucie Ange",
    role: "Operation Team Member",
    field: "Software Engineering",
    skills: "Web development, graphics, leadership, communication, and UI/UX design.",
    message: "I am passionate about using technology to solve real-world problems and growing with people who share the same vision.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function MembersPage() {
  return (
    <SiteLayout>
      <section className="relative isolate">
        <AmbientBackground />
        <div className="mx-auto max-w-5xl px-4 py-24 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink">The team</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-normal sm:text-7xl">
              Meet the <span className="text-gradient-hero"><ScrambleText text="TechSquad builders." /></span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Pictures can be added later. For now, every card introduces the member, their position, skills, and message.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" stagger={0.05}>
          {members.map((member, index) => (
            <motion.article
              key={member.name}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-glass transition-all hover:-translate-y-1 hover:border-pink/50 hover:shadow-pink"
            >
              <div
                className="relative grid aspect-[16/10] place-items-center overflow-hidden"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, oklch(0.78 0.16 ${210 + index * 12}) 0%, oklch(0.48 0.22 ${230 + index * 10}) 55%, oklch(0.2 0.06 260) 100%)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="relative text-6xl font-black text-white/90">{initials(member.name)}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-normal"><ScrambleText text={member.name} /></h3>
                    <p className="mt-1 text-sm font-semibold text-pink">{member.role}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a aria-label={`${member.name} LinkedIn`} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-pink hover:text-pink">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a aria-label={`${member.name} GitHub`} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-pink hover:text-pink">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">Field: {member.field}</p>
                <p className="mt-2 text-sm text-muted-foreground">Skills: {member.skills}</p>
                <p className="mt-4 text-sm text-muted-foreground">{member.message}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </section>
    </SiteLayout>
  );
}
