import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Code2,
  Sparkles,
  FileDown,
} from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const text = "Building experiences.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A0F0D]">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-100px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#34E5A0]/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 pb-14 pt-10 sm:px-8 md:grid-cols-2 md:gap-8 md:px-12 md:pb-16 md:pt-14 lg:gap-12">
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div className="relative z-20">

          {/* Status */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34E5A0] shadow-[0_0_10px_#34E5A0]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/65">
              Open to opportunities
            </span>
          </div>

          {/* Heading */}
      <h1 className="font-extrabold leading-[0.95] tracking-tight">

  <span className="mb-2 block text-4xl text-white sm:text-6xl md:text-6xl lg:text-7xl">
    Sania
  </span>

  <span className="inline-block whitespace-nowrap rounded-full bg-[#34E5A0] px-3 py-1.5 text-lg font-extrabold text-[#06110C] sm:text-3xl md:text-2xl lg:text-5xl">
    Frontend Developer
  </span>

</h1>

          {/* Short Description */}
          <p className="mt-5 max-w-md text-sm leading-6 text-white/45 md:text-[14px]">
            I build clean, modern interfaces with{" "}
            <span className="font-medium text-white/75">
              React, Next.js
            </span>{" "}
            and{" "}
            <span className="font-medium text-white/75">
              Tailwind CSS
            </span>.
          </p>

          {/* Typing Line */}
          <div className="mt-5 flex h-8 items-center">
            <span className="text-xl font-bold text-[#34E5A0] sm:text-2xl md:text-2xl">
              {displayText}
            </span>

            <span className="ml-1 animate-pulse text-[#34E5A0]">
              |
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#34E5A0] px-5 py-2.5 text-sm font-semibold text-[#06110C] shadow-[0_4px_24px_rgba(52,229,160,0.35)] transition-colors hover:bg-[#4FF0B0]"
            >
              <ArrowUpRight size={16} />
              View Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <FileDown size={16} />
              Resume
            </a>

          </div>

        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE — ORBIT */}
        {/* ================================================= */}

        <div
          className="
            relative
            mx-auto
            flex
            w-full
            items-start
            justify-center
            pt-6
            sm:pt-8
            md:h-[560px]
            md:pt-0
            lg:h-[600px]
          "
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x =
              (e.clientX - rect.left) / rect.width - 0.5;

            const y =
              (e.clientY - rect.top) / rect.height - 0.5;

            setMousePosition({ x, y });
          }}
          onMouseLeave={() => {
            setMousePosition({ x: 0, y: 0 });
          }}
        >
          {/* ================================================= */}
          {/* ORBIT SCENE */}
          {/* ================================================= */}

          <div
            className="
              relative
              aspect-square
              w-[min(88vw,380px)]
              sm:w-[min(75vw,420px)]
              md:w-[420px]
              lg:w-[470px]
            "
          >
            <div
              className="relative h-full w-full [transform-style:preserve-3d]"
              style={{
                transform: `
                  rotateX(${mousePosition.y * -8}deg)
                  rotateY(${mousePosition.x * 10}deg)
                `,
                transition: "transform 200ms ease-out",
              }}
            >
              {/* ================================================= */}
              {/* AMBIENT GLOW */}
              {/* ================================================= */}

              <div className="absolute inset-[14%] z-0 rounded-full bg-[#34E5A0]/20 blur-[90px]" />

              {/* ================================================= */}
              {/* ORBIT RINGS */}
              {/* ================================================= */}

              <div className="absolute inset-[5%] z-0 rounded-full border border-[#34E5A0]/20" />

              <div className="absolute inset-[13%] z-0 rounded-full border border-[#34E5A0]/10" />

              <div className="absolute inset-[21%] z-0 rounded-full border border-[#34E5A0]/15 border-dashed" />

              {/* ================================================= */}
              {/* ROTATING ORBIT */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  inset-[5%]
                  z-0
                  rounded-full
                  border
                  border-[#34E5A0]/30
                  [transform:rotateX(65deg)_rotateZ(-20deg)]
                  animate-[spin_12s_linear_infinite]
                "
              />

              {/* ================================================= */}
              {/* ORBIT DOT */}
              {/* ================================================= */}

              <div className="absolute left-1/2 top-[3%] z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#34E5A0] shadow-[0_0_18px_#34E5A0]" />

              {/* ================================================= */}
              {/* 3D ORB */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  inset-[20%]
                  z-10
                  rounded-full
                  bg-[radial-gradient(circle_at_30%_25%,#B5FFE3_0%,#34E5A0_22%,#16845B_48%,#0A3A2A_70%,#06110C_100%)]
                  shadow-[0_0_80px_rgba(52,229,160,0.35)]
                  transition-all
                  duration-700
                  hover:scale-105
                  hover:rotate-6
                  hover:shadow-[0_0_120px_rgba(52,229,160,0.5)]
                "
              >
                <div className="absolute left-[15%] top-[11%] h-[11%] w-[23%] rotate-[-25deg] rounded-full bg-white/30 blur-xl" />

                <div className="absolute inset-[8%] rounded-full border border-white/10" />

                <div className="absolute -top-[2%] left-1/2 aspect-square w-[3%] -translate-x-1/2 rounded-full bg-[#34E5A0] shadow-[0_0_20px_#34E5A0]" />
              </div>

              {/* ================================================= */}
              {/* TECH CARD */}
              {/* Mobile/tablet: chhota, kam offset, kam rotation — collide nahi karega */}
              {/* md aur upar: EXACT wahi values jo pehle "sahi" thi */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  right-[2%]
                  top-[0%]
                  z-30
                  w-[46%]
                  max-w-[168px]
                  rotate-[3deg]
                  p-3.5
                  sm:right-[0%]
                  sm:top-[2%]
                  sm:w-[50%]
                  sm:max-w-[200px]
                  sm:rotate-[4deg]
                  sm:p-4
                  md:right-[-3%]
                  md:top-[4%]
                  md:w-[56%]
                  md:max-w-[240px]
                  md:rotate-[5deg]
                  md:p-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#101512]/95
                  shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:rotate-0
                "
              >
                <div className="mb-2.5 flex items-center justify-between sm:mb-3 md:mb-4">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Code2
                      size={12}
                      className="text-[#34E5A0] md:hidden"
                    />
                    <Code2
                      size={14}
                      className="hidden text-[#34E5A0] md:block"
                    />

                    <span className="text-[8px] font-semibold uppercase tracking-widest text-white/40 sm:text-[9px]">
                      Frontend Stack
                    </span>
                  </div>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#34E5A0] shadow-[0_0_10px_#34E5A0] md:h-2 md:w-2" />
                </div>

                <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/80 sm:text-xs">
                      React.js
                    </span>

                    <span className="text-[8px] tracking-widest text-[#34E5A0] sm:text-[9px]">
                      ●●●●●
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/80 sm:text-xs">
                      Next.js
                    </span>

                    <span className="text-[8px] tracking-widest text-[#34E5A0] sm:text-[9px]">
                      ●●●●○
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/80 sm:text-xs">
                      Tailwind
                    </span>

                    <span className="text-[8px] tracking-widest text-[#34E5A0] sm:text-[9px]">
                      ●●●●●
                    </span>
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* LEARNING CARD */}
              {/* Mobile/tablet: chhota, kam offset, kam rotation */}
              {/* md aur upar: EXACT wahi values jo pehle "sahi" thi */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  bottom-[14%]
                  left-[2%]
                  z-30
                  w-[46%]
                  max-w-[168px]
                  rotate-[-3deg]
                  p-3.5
                  sm:bottom-[11%]
                  sm:left-[0%]
                  sm:w-[50%]
                  sm:max-w-[200px]
                  sm:rotate-[-4deg]
                  sm:p-4
                  md:bottom-[9%]
                  md:left-[-3%]
                  md:w-[56%]
                  md:max-w-[240px]
                  md:rotate-[-6deg]
                  md:p-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#101512]/95
                  shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:rotate-0
                "
              >
                <div className="mb-2 flex items-center gap-1.5 sm:mb-3 md:gap-2">
                  <Sparkles
                    size={12}
                    className="text-[#34E5A0] md:hidden"
                  />
                  <Sparkles
                    size={14}
                    className="hidden text-[#34E5A0] md:block"
                  />

                  <span className="text-[8px] font-semibold uppercase tracking-widest text-white/40 sm:text-[9px]">
                    Currently Learning
                  </span>
                </div>

                <div className="text-lg font-extrabold text-white sm:text-xl md:text-2xl">
                  PHP
                </div>

                <p className="mt-1 text-[9px] text-white/40 sm:text-[10px]">
                  Expanding into backend development
                </p>
              </div>

              {/* ================================================= */}
              {/* AVAILABLE BADGE */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  bottom-[0%]
                  right-[0%]
                  z-30
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-[#101512]/95
                  px-2.5
                  py-1.5
                  shadow-xl
                  backdrop-blur-xl
                  sm:gap-2
                  sm:px-3
                  sm:py-1.5
                  md:px-3.5
                  md:py-2
                "
              >
                <span className="h-1 w-1 animate-pulse rounded-full bg-[#34E5A0] sm:h-1.5 sm:w-1.5" />

                <span className="text-[9px] text-white/70 sm:text-[10px] md:text-[11px]">
                  Available for work
                </span>
              </div>

              {/* ================================================= */}
              {/* PARTICLES */}
              {/* ================================================= */}

              <span className="absolute left-[5%] top-[18%] z-20 h-2 w-2 animate-pulse rounded-full bg-[#34E5A0]" />

              <span className="absolute right-[2%] top-[38%] z-20 h-1.5 w-1.5 animate-ping rounded-full bg-white/60" />

              <span className="absolute bottom-[27%] right-[12%] z-20 h-2 w-2 animate-pulse rounded-full bg-[#34E5A0]/70" />

              <span className="absolute bottom-[7%] left-[17%] z-20 h-1.5 w-1.5 animate-ping rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}