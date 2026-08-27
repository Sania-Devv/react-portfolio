import {
  Code2,
  Database,
  GitBranch,
  Layers3,
  Rocket,
  Server,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Building modern interfaces",
    description:
      "Creating responsive, interactive and component-based web experiences.",
    icon: Code2,
    skills: ["React", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    number: "02",
    title: "UI & Styling",
    subtitle: "Clean visual experiences",
    description:
      "Turning ideas into clean, responsive and modern user interfaces.",
    icon: Layers3,
    skills: ["Tailwind CSS", "Responsive UI", "Modern Design"],
  },
  {
    number: "03",
    title: "Backend",
    subtitle: "Logic behind the interface",
    description:
      "Building server-side functionality and connecting applications with APIs.",
    icon: Server,
    skills: ["PHP", "APIs", "Server Logic"],
  },
  {
    number: "04",
    title: "Database",
    subtitle: "Working with data",
    description:
      "Managing structured application data using relational database systems.",
    icon: Database,
    skills: ["MySQL", "SQLite", "SQL"],
  },
  {
    number: "05",
    title: "Deployment",
    subtitle: "From code to production",
    description:
      "Deploying applications and working with modern cloud hosting platforms.",
    icon: Rocket,
    skills: ["Vercel", "Railway", "Deployment"],
  },
  {
    number: "06",
    title: "Tools & Workflow",
    subtitle: "Development essentials",
    description:
      "Managing projects, source code and everyday development workflows.",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#0A0F0D] py-20 md:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#34E5A0]/5 blur-[130px]" />

        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#7C3AED]/5 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* ================= SECTION LABEL ================= */}

        <div
          className={`mb-6 flex items-center gap-5 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#34E5A0]/40" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-[#34E5A0] shadow-[0_0_14px_#34E5A0]" />
            </span>

            <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-[13px] font-semibold uppercase tracking-[0.3em] text-transparent">
              Skills
            </span>
          </div>

          <span className="h-px w-24 bg-gradient-to-r from-[#34E5A0]/40 via-[#6EE7F9]/20 to-transparent" />
        </div>

        {/* ================= HEADING ================= */}

        <div
          className={`mb-14 max-w-2xl transition-all delay-100 duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
            My toolkit
          </p>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Technologies behind
            <br />

            <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-transparent">
              the work.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">
            A focused collection of technologies and tools I use to
            design, develop and deploy modern web experiences.
          </p>
        </div>

        {/* ================= SKILLS GRID ================= */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className={`group relative h-[310px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D1411]/90 p-6 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-[#34E5A0]/30 hover:shadow-[0_24px_70px_rgba(52,229,160,0.10)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${150 + index * 100}ms`,
                }}
              >
                {/* ================= MOVING LIGHT ================= */}

                <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#34E5A0]/10 blur-3xl transition-all duration-1000 group-hover:left-[55%] group-hover:top-[30%] group-hover:bg-[#34E5A0]/15" />

                <div className="pointer-events-none absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-[#7C3AED]/10 blur-3xl transition-all duration-1000 group-hover:right-[10%] group-hover:bottom-[10%]" />

                {/* ================= CARD GRADIENT ================= */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#34E5A0]/[0.07] via-transparent to-[#7C3AED]/[0.07] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* ================= LARGE NUMBER ================= */}

                <div className="pointer-events-none absolute -right-2 -top-7 select-none text-[110px] font-black leading-none tracking-tighter text-white/[0.025] transition-all duration-700 group-hover:text-[#34E5A0]/[0.07] group-hover:translate-x-1">
                  {group.number}
                </div>

                {/* Small number */}

                <div className="absolute right-5 top-5 z-10 text-[9px] font-medium tracking-[0.25em] text-white/25 transition-colors duration-300 group-hover:text-[#34E5A0]/60">
                  {group.number}
                </div>

                {/* ================= ICON ================= */}

                <div className="relative z-10 mb-7 flex items-center justify-between">
                  <div className="relative">
                    {/* Icon glow */}

                    <div className="absolute inset-0 rounded-2xl bg-[#34E5A0]/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                    {/* Icon box */}

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:border-[#34E5A0]/30 group-hover:bg-[#34E5A0]/10">
                      <Icon
                        size={25}
                        strokeWidth={1.5}
                        className="text-white/65 transition-all duration-500 group-hover:scale-110 group-hover:text-[#34E5A0]"
                      />
                    </div>
                  </div>

                  <span className="mr-10 text-[9px] uppercase tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-white/40">
                    {group.title}
                  </span>
                </div>

                {/* ================= TITLE ================= */}

                <div className="relative z-10">
                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#34E5A0]/60">
                    {group.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-[12px] leading-5 text-white/40">
                    {group.description}
                  </p>
                </div>

                {/* ================= SKILL TAGS ================= */}

                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider transition-all duration-300 ${
                        skillIndex === 0
                          ? "border-[#34E5A0]/15 bg-[#34E5A0]/[0.06] text-[#34E5A0]/70 group-hover:border-[#34E5A0]/30 group-hover:bg-[#34E5A0]/10 group-hover:text-[#34E5A0]"
                          : "border-white/[0.08] bg-white/[0.025] text-white/40 group-hover:border-white/[0.12] group-hover:text-white/60"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* ================= BOTTOM LINE ================= */}

                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#34E5A0]/0 to-transparent transition-all duration-500 group-hover:via-[#34E5A0]/50" />

                {/* ================= CORNER DETAIL ================= */}

                <div className="absolute bottom-5 right-5 flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-xs text-white/20 transition-all duration-500 group-hover:border-[#34E5A0]/30 group-hover:bg-[#34E5A0]/10 group-hover:text-[#34E5A0]">
                  ↗
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= FOOTER ================= */}

        <div
          className={`mt-14 flex justify-center transition-all delay-700 duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
            Design · Develop · Deploy
          </p>
        </div>
      </div>
    </section>
  );
}