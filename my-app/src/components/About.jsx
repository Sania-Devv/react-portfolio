import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
  ref={sectionRef}
  id="about"
  className="relative overflow-hidden bg-[#0A0F0D] pb-16 pt-8 md:pb-20 md:pt-10"
>
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-10 h-[400px] w-[400px] rounded-full bg-[#34E5A0]/5 blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-150px] h-[400px] w-[400px] rounded-full bg-[#7C3AED]/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* ================= ABOUT LABEL ================= */}
        <div
  className={`mb-5 md:mb-8 flex items-center gap-5 transition-all duration-700 ease-out ${
    isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
  }`}
>
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34E5A0]/40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34E5A0] shadow-[0_0_16px_#34E5A0]" />
            </span>
            <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent">
              About Me
            </span>
          </div>
          <span className="h-px w-24 bg-gradient-to-r from-[#34E5A0]/50 via-[#6EE7F9]/25 to-transparent" />
        </div>

        {/* ================================================= */}
        {/* CONTENT — mobile/tablet: normal stacked flow      */}
        {/* desktop (lg+): diagonal absolute layout           */}
        {/* ================================================= */}
        <div className="relative flex flex-col gap-16 lg:block lg:min-h-[500px] lg:gap-0">

          {/* ================= LEFT CONTENT ================= */}
          <div
            className={`z-20 w-full max-w-md transform transition-all duration-1000 ease-out lg:absolute lg:left-0 lg:top-[45px] ${
              isVisible ? "translate-x-0 opacity-100" : "opacity-0 lg:-translate-x-20"
            }`}
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              A little about me
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-white">Designing with</span>
              <br />
              <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-transparent">
                purpose.
              </span>
            </h2>

            <div className="mt-6 max-w-sm space-y-4 text-sm leading-6 text-white/50">
              <p>
                I'm a frontend developer who enjoys turning ideas into
                clean, modern and interactive digital experiences.
              </p>
              <p>
                I mainly work with{" "}
                <span className="font-medium text-white/80">React</span>,{" "}
                <span className="font-medium text-white/80">Next.js</span>{" "}
                and{" "}
                <span className="font-medium text-white/80">Tailwind CSS</span>.
              </p>
            </div>

            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#34E5A0] transition-all duration-300 hover:gap-3"
            >
              Explore my work
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* ================================================= */}
          {/* CENTER 3D VISUAL */}
          {/* mobile/tablet: normal block in the flow, smaller  */}
          {/* desktop: absolute, centered, behind text (z-0)    */}
          {/* ================================================= */}
          <div className="pointer-events-none relative z-0 mx-auto flex h-[280px] w-[280px] items-center justify-center opacity-60 sm:h-[340px] sm:w-[340px] lg:absolute lg:left-1/2 lg:top-1/2 lg:h-[560px] lg:w-[560px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:opacity-60">

            <div className="absolute inset-[15%] rounded-full bg-[#34E5A0]/15 blur-[90px] lg:inset-20 lg:blur-[110px]" />
            <div className="absolute inset-[8%] rounded-full border border-[#34E5A0]/10 lg:inset-10" />
            <div className="absolute inset-[20%] rounded-full border border-dashed border-[#34E5A0]/15 lg:inset-24" />

            <div className="absolute inset-[24%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#B5FFE3_0%,#34E5A0_22%,#16845B_48%,#0A3A2A_70%,#06110C_100%)] shadow-[0_0_100px_rgba(52,229,160,0.3)] lg:inset-[120px]">
              <div className="absolute left-[20%] top-[18%] h-[20%] w-[42%] rotate-[-25deg] rounded-full bg-white/25 blur-xl" />
              <div className="absolute inset-[8%] rounded-full border border-white/10" />
              <div className="absolute -top-[2%] left-1/2 h-[4%] w-[4%] -translate-x-1/2 rounded-full bg-[#34E5A0] shadow-[0_0_20px_#34E5A0]" />
            </div>

            <div className="absolute inset-[4%] animate-[spin_12s_linear_infinite] rounded-full border border-[#34E5A0]/20 [transform:rotateX(65deg)_rotateZ(-20deg)] lg:inset-5" />

            <span className="absolute left-[10%] top-[22%] h-2 w-2 animate-pulse rounded-full bg-[#34E5A0]" />
            <span className="absolute right-[6%] top-[36%] h-1.5 w-1.5 animate-ping rounded-full bg-white/50" />
            <span className="absolute bottom-[24%] right-[10%] h-2 w-2 animate-pulse rounded-full bg-[#34E5A0]/60" />
            <span className="absolute bottom-[12%] left-[14%] h-1.5 w-1.5 animate-ping rounded-full bg-white/30" />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div
            className={`z-20 w-full max-w-sm transform transition-all delay-200 duration-1000 ease-out lg:absolute lg:right-0 lg:top-[250px] ${
              isVisible ? "translate-x-0 opacity-100" : "opacity-0 lg:translate-x-20"
            }`}
          >
            <div className="border-l border-[#34E5A0]/20 pl-6">
              <div className="mb-4 flex items-center gap-3">
                <Sparkles size={15} className="text-[#34E5A0]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                  What I care about
                </span>
              </div>

              <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                Interfaces that feel{" "}
                <span className="bg-gradient-to-r from-[#34E5A0] to-[#6EE7F9] bg-clip-text text-transparent">
                  simple.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Good interfaces aren't only about how they look.
                They should feel intuitive, responsive and enjoyable to use.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-md">
                  Clean UI
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-md">
                  Responsive
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-md">
                  Interactive
                </span>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM STATEMENT ================= */}
          <div
            className={`z-20 text-center transition-all delay-500 duration-700 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <p className="bg-gradient-to-r from-[#34E5A0] to-[#6EE7F9] bg-clip-text text-[10px] uppercase tracking-[0.3em] text-transparent">
              React · Next.js · Tailwind · PHP
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}