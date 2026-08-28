import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Layers3,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  { number: "01", 
    title: "OTech — IT Solutions", 
     type: "Web Development", 
     description: "A responsive IT solutions website built to showcase technology services and business solutions through a clean, modern interface.",
      technologies: ["HTML", "CSS", "JavaScript"], 
      liveUrl: "https://sania-devv.github.io/Trainee-task1/index.html", 
      githubUrl: "https://github.com/Sania-Devv/trainee-SE-Otech", 
      accent: "from-[#34E5A0] to-[#6EE7F9]", 
    },
  {
    number: "01",
    title: "Healthcare Dashboard",
    type: "Web Application",
    description:
      "A modern healthcare dashboard designed to manage patients, doctors, appointments and billing through a clean and responsive interface.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    accent: "from-[#34E5A0] to-[#6EE7F9]",
  },
  {
    number: "02",
    title: "Food Experience",
    type: "Frontend Project",
    description:
      "An interactive food application focused on clean layouts, smooth navigation and an engaging browsing experience.",
    technologies: ["React", "JavaScript", "CSS"],
    accent: "from-[#A78BFA] to-[#6EE7F9]",
  },
  {
    number: "03",
    title: "Portfolio",
    type: "Personal Website",
    description:
      "A dark, modern developer portfolio built to showcase projects, technical skills and creative frontend work.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    accent: "from-[#34E5A0] to-[#A78BFA]",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const project = projects[activeProject];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#0A0F0D] py-16 md:py-20 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-[#34E5A0]/[0.035] blur-[130px]" />
        <div className="absolute right-[-180px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#7C3AED]/[0.04] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* ================= LABEL ================= */}
        <div
          className={`mb-6 flex items-center gap-5 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#34E5A0]/40" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#34E5A0] shadow-[0_0_14px_#34E5A0]" />
            </span>
            <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-[13px] font-semibold uppercase tracking-[0.3em] text-transparent">
              Projects
            </span>
          </div>
          <span className="h-px w-24 bg-gradient-to-r from-[#34E5A0]/40 via-[#6EE7F9]/20 to-transparent" />
        </div>

        {/* ================= HEADING ================= */}
        <div
          className={`mb-12 max-w-2xl transition-all delay-100 duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
            Selected work
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Things I've
            <br />
            <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-transparent">
              built.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
            A selection of projects where design, development and
            problem-solving come together.
          </p>
        </div>

        {/* ================================================= */}
        {/* PROJECT SHOWCASE                                  */}
        {/* mobile/tablet: normal stacked flow                */}
        {/* desktop (lg+): absolute orbit layout               */}
        {/* ================================================= */}
        <div className="relative lg:min-h-[650px]">

          {/* ================= ORBIT — desktop only ================= */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="absolute inset-0 rounded-full border border-white/[0.035]" />
            <div className="absolute inset-[70px] rounded-full border border-[#34E5A0]/[0.06]" />
            <div className="absolute inset-[145px] rounded-full border border-dashed border-white/[0.035]" />
          </div>

          {/* ================= LEFT PROJECT — desktop only ================= */}
          <button
            onMouseEnter={() => setActiveProject(0)}
            onClick={() => setActiveProject(0)}
            className={`absolute left-0 top-[18%] z-30 hidden w-52 rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-500 lg:block ${
              activeProject === 0
                ? "border-[#34E5A0]/40 bg-[#34E5A0]/[0.07] shadow-[0_15px_50px_rgba(52,229,160,0.08)]"
                : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] tracking-[0.25em] text-white/25">
                {projects[0].number}
              </span>
              {activeProject === 0 && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#34E5A0] shadow-[0_0_10px_#34E5A0]" />
              )}
            </div>
            <h3 className="mt-2 text-sm font-semibold text-white">
              {projects[0].title}
            </h3>
            <p className="mt-1 text-[9px] uppercase tracking-wider text-white/25">
              {projects[0].type}
            </p>
          </button>

          {/* ================= RIGHT PROJECT — desktop only ================= */}
          <button
            onMouseEnter={() => setActiveProject(1)}
            onClick={() => setActiveProject(1)}
            className={`absolute right-0 top-[25%] z-30 hidden w-52 rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-500 lg:block ${
              activeProject === 1
                ? "border-[#A78BFA]/40 bg-[#A78BFA]/[0.07] shadow-[0_15px_50px_rgba(167,139,250,0.08)]"
                : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] tracking-[0.25em] text-white/25">
                {projects[1].number}
              </span>
              {activeProject === 1 && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA] shadow-[0_0_10px_#A78BFA]" />
              )}
            </div>
            <h3 className="mt-2 text-sm font-semibold text-white">
              {projects[1].title}
            </h3>
            <p className="mt-1 text-[9px] uppercase tracking-wider text-white/25">
              {projects[1].type}
            </p>
          </button>

          {/* ================= BOTTOM PROJECT — desktop only ================= */}
          <button
            onMouseEnter={() => setActiveProject(2)}
            onClick={() => setActiveProject(2)}
            className={`absolute bottom-[12%] left-[5%] z-30 hidden w-52 rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-500 lg:block ${
              activeProject === 2
                ? "border-[#6EE7F9]/40 bg-[#6EE7F9]/[0.07] shadow-[0_15px_50px_rgba(110,231,249,0.08)]"
                : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] tracking-[0.25em] text-white/25">
                {projects[2].number}
              </span>
              {activeProject === 2 && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7F9] shadow-[0_0_10px_#6EE7F9]" />
              )}
            </div>
            <h3 className="mt-2 text-sm font-semibold text-white">
              {projects[2].title}
            </h3>
            <p className="mt-1 text-[9px] uppercase tracking-wider text-white/25">
              {projects[2].type}
            </p>
          </button>

          {/* ================================================= */}
          {/* CENTER SHOWCASE                                    */}
          {/* mobile/tablet: normal block, in flow               */}
          {/* desktop: absolute, centered                        */}
          {/* ================================================= */}
          <div
            className={`relative z-20 mx-auto w-full max-w-[570px] transition-all duration-700 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Glow */}
            <div
              className={`pointer-events-none absolute -inset-16 rounded-full bg-gradient-to-r ${project.accent} opacity-[0.06] blur-[90px] transition-all duration-700`}
            />

            {/* Browser Window */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0D1411]/95 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">

              {/* Browser Header */}
              <div className="flex h-11 items-center justify-between border-b border-white/[0.06] px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                </div>
                <div className="rounded-md border border-white/[0.06] bg-white/[0.025] px-8 py-1 text-[8px] tracking-wider text-white/20">
                  project.preview
                </div>
                <ExternalLink size={13} className="text-white/20" />
              </div>

              {/* ================= PREVIEW ================= */}
             {/* ================= PREVIEW ================= */}
<div className="relative h-[180px] overflow-hidden sm:h-[220px] lg:h-[290px]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.07] transition-all duration-700`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:30px_30px]" />

                {/* Fake Dashboard */}
                <div className="absolute inset-4 rounded-xl border border-white/[0.07] bg-[#101713]/80 p-4 shadow-2xl backdrop-blur-md sm:inset-8 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2 w-20 rounded-full bg-white/15" />
                      <div className="mt-2 h-1.5 w-12 rounded-full bg-white/5" />
                    </div>
                    <div className="h-7 w-7 rounded-full border border-white/10 bg-white/[0.04]" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-7 sm:gap-3">
                    <div className="relative h-12 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.025] sm:h-16">
                      <div className="absolute bottom-2 left-2 h-1.5 w-8 rounded-full bg-[#34E5A0]/30 sm:bottom-3 sm:left-3 sm:w-10" />
                    </div>
                    <div className="relative h-12 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.025] sm:h-16">
                      <div className="absolute bottom-2 left-2 h-1.5 w-10 rounded-full bg-[#6EE7F9]/30 sm:bottom-3 sm:left-3 sm:w-12" />
                    </div>
                    <div className="relative h-12 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.025] sm:h-16">
                      <div className="absolute bottom-2 left-2 h-1.5 w-6 rounded-full bg-[#A78BFA]/30 sm:bottom-3 sm:left-3 sm:w-8" />
                    </div>
                  </div>

                  <div className="mt-3 hidden grid-cols-[1.5fr_1fr] gap-3 lg:mt-4 lg:grid">
                    <div className="h-24 rounded-lg border border-white/[0.06] bg-white/[0.025]">
                      <div className="m-4 h-2 w-16 rounded-full bg-white/10" />
                      <div className="mx-4 mt-5 flex items-end gap-2">
                        <div className="h-8 w-2 rounded-full bg-[#34E5A0]/30" />
                        <div className="h-12 w-2 rounded-full bg-[#34E5A0]/50" />
                        <div className="h-6 w-2 rounded-full bg-[#6EE7F9]/30" />
                        <div className="h-14 w-2 rounded-full bg-[#34E5A0]/40" />
                        <div className="h-10 w-2 rounded-full bg-[#A78BFA]/30" />
                        <div className="h-16 w-2 rounded-full bg-[#34E5A0]/50" />
                      </div>
                    </div>
                    <div className="h-24 rounded-lg border border-white/[0.06] bg-white/[0.025] p-4">
                      <div className="h-2 w-12 rounded-full bg-white/10" />
                      <div
                        className={`mt-5 h-2 w-3/4 rounded-full bg-gradient-to-r ${project.accent} opacity-50`}
                      />
                      <div className="mt-3 h-2 w-1/2 rounded-full bg-white/5" />
                    </div>
                  </div>
                </div>

                {/* Center Mark */}
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div
                    className={`absolute h-28 w-28 rounded-full bg-gradient-to-r ${project.accent} opacity-10 blur-2xl`}
                  />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#0A0F0D]/85 shadow-[0_0_40px_rgba(52,229,160,0.08)] backdrop-blur-xl sm:h-16 sm:w-16">
                    <Layers3 size={22} strokeWidth={1.3} className="text-white/50 sm:hidden" />
                    <Layers3 size={25} strokeWidth={1.3} className="hidden text-white/50 sm:block" />
                  </div>
                </div>
              </div>

              {/* ================= PROJECT INFO ================= */}
              <div className="border-t border-white/[0.06] p-5 sm:p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span
                        className={`bg-gradient-to-r ${project.accent} bg-clip-text text-[9px] font-semibold uppercase tracking-[0.25em] text-transparent`}
                      >
                        {project.number} · {project.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[11px] leading-5 text-white/35">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[9px] font-medium uppercase tracking-wider text-white/50 transition-all hover:border-[#34E5A0]/30 hover:bg-[#34E5A0]/10 hover:text-[#34E5A0]"
                    >
                      Live
                      <ArrowUpRight size={12} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[9px] font-medium uppercase tracking-wider text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                    >
                      Code
                      <GitBranch size={12} />
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[8px] uppercase tracking-wider text-white/35"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= SELECTOR — mobile + tablet ================= */}
          <div className="relative z-20 mt-6 grid grid-cols-3 gap-2 lg:hidden">
            {projects.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveProject(index)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  activeProject === index
                    ? "border-[#34E5A0]/30 bg-[#34E5A0]/[0.06]"
                    : "border-white/[0.07] bg-white/[0.02]"
                }`}
              >
                <span className="text-[8px] tracking-widest text-white/25">
                  {item.number}
                </span>
                <p className="mt-1 truncate text-[10px] font-medium text-white/70">
                  {item.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div
          className={`mt-10 flex justify-center transition-all delay-700 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
            Explore · Build · Create
          </p>
        </div>
      </div>
    </section>
  );
}