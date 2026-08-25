// import { ArrowUpRight, Mail, Code2, Sparkles } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden min-h-screen bg-[#0A0F0D]">
//       {/* Background ambient glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#34E5A0]/10 rounded-full blur-[120px]" />
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
//         {/* Left: Intro */}
//         <div>
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#34E5A0]" />
//             <span className="text-xs tracking-widest uppercase font-medium text-white/70">
//               Open to opportunities
//             </span>
//           </div>

//           <h1 className="font-extrabold leading-[0.95] tracking-tight">
//             <span className="block text-6xl md:text-7xl text-white mb-2">
//               Sania
//             </span>
//             <span className="inline-block text-4xl md:text-5xl font-extrabold px-5 py-1.5 rounded-full bg-[#34E5A0] text-[#06110C]">
//               Frontend Developer
//             </span>
//           </h1>

//           <p className="leading-relaxed max-w-md mt-7 mb-9 text-white/50 text-[15px]">
//             A frontend developer crafting clean, modern interfaces.{' '}
//             <span className="text-white/80 font-medium">React, Tailwind</span>, and one
//             obsession with <span className="text-white/80 font-medium">pixel-perfect design</span>{' '}
//             doing all the heavy lifting.
//           </p>

//           <div className="flex items-center gap-3 mb-10">
//             <span className="text-2xl md:text-3xl font-extrabold text-white">Building</span>
//             <span className="text-2xl md:text-3xl font-extrabold text-[#34E5A0]">experiences.</span>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             <a
//               href="#projects"
//               className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-[#34E5A0] text-[#06110C] shadow-[0_4px_24px_rgba(52,229,160,0.35)] hover:bg-[#4FF0B0] transition-colors"
//             >
//               <ArrowUpRight size={18} />
//               View Work
//             </a>
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors"
//             >
//               <Mail size={18} />
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* Right Section: Exact Back Shape & Card Positions */}
//         <div className="relative h-[550px] hidden md:block w-full">

//           {/* EXACT BACKGROUND SVG (Green organic curve + Radar Rings) */}
//           <div className="absolute inset-0 pointer-events-none z-0">
//             <svg
//               className="w-full h-full overflow-visible"
//               viewBox="0 0 500 550"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <defs>
//                 {/* Reference smooth ink-green fill gradient */}
//                 <linearGradient id="inkGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#1E5C46" stopOpacity="0.8" />
//                   <stop offset="50%" stopColor="#25A973" stopOpacity="0.45" />
//                   <stop offset="100%" stopColor="#0F3326" stopOpacity="0.1" />
//                 </linearGradient>

//                 {/* Light green glow for edge border stroke */}
//                 <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#34E5A0" stopOpacity="0.4" />
//                   <stop offset="100%" stopColor="#34E5A0" stopOpacity="0.05" />
//                 </linearGradient>
//               </defs>

//               {/* Concentric radar circle guides behind shape */}
//               <circle cx="310" cy="270" r="140" stroke="#34E5A0" strokeOpacity="0.08" strokeWidth="1" />
//               <circle cx="310" cy="270" r="220" stroke="#34E5A0" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 3" />
//               <circle cx="310" cy="270" r="290" stroke="#34E5A0" strokeOpacity="0.04" strokeWidth="1" />

//               {/* Exact Organic Green S-Curve Shape connects Card 1 to Card 2 */}
//               <path
//                 d="M 330 60
//                    C 420 80, 440 210, 360 260
//                    C 280 310, 200 320, 230 430
//                    C 255 510, 390 480, 350 400
//                    C 310 320, 430 200, 320 110 Z"
//                 fill="url(#inkGreenGrad)"
//                 stroke="url(#strokeGrad)"
//                 strokeWidth="1.5"
//                 className="filter drop-shadow-[0_10px_35px_rgba(30,92,70,0.3)]"
//               />
//             </svg>
//           </div>

//           {/* Top Pill - Top Right */}
//           <div className="absolute top-2 right-12 flex items-center gap-2 px-4 py-2 rounded-full bg-[#101512]/90 border border-white/10 backdrop-blur-md z-10 shadow-lg">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#34E5A0]" />
//             <span className="text-xs text-white/70 font-medium">React · Next.js · Tailwind</span>
//           </div>

//           {/* Card 1: TOP RIGHT (Tech Stack) */}
//           <div className="absolute top-14 right-2 w-64 rounded-2xl p-5 rotate-[6deg] bg-[#101512]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20 backdrop-blur-md">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-1.5">
//                 <Code2 size={13} className="text-[#34E5A0]" />
//                 <span className="text-[11px] tracking-wide uppercase text-white/40 font-semibold">Tech Stack</span>
//               </div>
//               <span className="w-2 h-2 rounded-full bg-[#34E5A0]" />
//             </div>

//             <div className="space-y-3">
//               <div className="flex justify-between items-center text-xs">
//                 <span className="text-white/80">React.js</span>
//                 <span className="text-[#34E5A0] tracking-widest text-[10px]">●●●●○</span>
//               </div>
//               <div className="flex justify-between items-center text-xs">
//                 <span className="text-white/80">Next.js</span>
//                 <span className="text-[#34E5A0] tracking-widest text-[10px]">●●●○○</span>
//               </div>
//               <div className="flex justify-between items-center text-xs">
//                 <span className="text-white/80">Tailwind CSS</span>
//                 <span className="text-[#34E5A0] tracking-widest text-[10px]">●●●●●</span>
//               </div>
//             </div>
//           </div>

//           {/* Card 2: BOTTOM LEFT (Currently Learning) */}
//           <div className="absolute bottom-20 left-12 w-64 rounded-2xl p-5 -rotate-[6deg] bg-[#101512]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20 backdrop-blur-md">
//             <div className="flex items-center justify-between mb-3">
//               <div className="flex items-center gap-1.5">
//                 <Sparkles size={13} className="text-[#34E5A0]" />
//                 <span className="text-[11px] tracking-wide uppercase text-white/40 font-semibold">Currently Learning</span>
//               </div>
//             </div>
//             <div className="text-2xl font-extrabold text-white mb-1">
//               PHP <span className="text-xs font-normal text-white/40">(Backend)</span>
//             </div>
//             <div className="text-[11px] text-white/50">
//               Expanding into backend development
//             </div>
//           </div>

//           {/* Action Button Pill */}
//           <a
//             href="#work"
//             className="absolute bottom-10 left-36 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#34E5A0] text-[#06110C] text-sm font-semibold z-30 shadow-[0_4px_20px_rgba(52,229,160,0.35)] hover:bg-[#4FF0B0] transition-colors"
//           >
//             View Work <ArrowUpRight size={15} />
//           </a>

//           {/* Bottom Right Badge */}
//           <div className="absolute bottom-4 right-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[#101512]/90 border border-white/10 z-30 backdrop-blur-md shadow-lg">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#34E5A0]" />
//             <span className="text-xs text-white/70 font-medium">Completed Graduate</span>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Code2, Sparkles } from "lucide-react";

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
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#34E5A0]/10 rounded-full blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-8 grid md:grid-cols-2 gap-12 items-start">
        {/* ================= LEFT SIDE ================= */}

        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34E5A0]" />

            <span className="text-xs tracking-widest uppercase font-medium text-white/70">
              Open to opportunities
            </span>
          </div>

          <h1 className="font-extrabold leading-[0.95] tracking-tight">
            <span className="block text-6xl md:text-7xl text-white mb-2">
              Sania
            </span>

            <span className="inline-block text-4xl md:text-5xl font-extrabold px-5 py-1.5 rounded-full bg-[#34E5A0] text-[#06110C]">
              Frontend Developer
            </span>
          </h1>

          <p className="leading-relaxed max-w-md mt-7 mb-5 text-white/50 text-[15px]">
            A frontend developer crafting clean, modern interfaces.{" "}
            <span className="text-white/80 font-medium">React, Tailwind</span>,
            and one obsession with{" "}
            <span className="text-white/80 font-medium">
              pixel-perfect design
            </span>{" "}
            doing all the heavy lifting.
          </p>
          <div className="flex items-center gap-5 mb-2">
            <a
              href="YOUR_GITHUB_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-[#34E5A0] transition-colors"
            >
              GitHub ↗
            </a>

            <a
              href="YOUR_LINKEDIN_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-[#34E5A0] transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
         <div className="flex items-center mb-10">
  <span className="text-2xl md:text-3xl font-extrabold text-[#34E5A0]">
    {displayText}
  </span>

  <span className="ml-1 text-[#34E5A0] animate-pulse">
    |
  </span>
</div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-[#34E5A0] text-[#06110C] shadow-[0_4px_24px_rgba(52,229,160,0.35)] hover:bg-[#4FF0B0] transition-colors"
            >
              <ArrowUpRight size={18} />
              View Work
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="relative h-[500px] hidden md:block w-full [perspective:1200px]"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            setMousePosition({ x, y });
          }}
          onMouseLeave={() => {
            setMousePosition({ x: 0, y: 0 });
          }}
        >
          {/* Main 3D Scene */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative w-[420px] h-[420px] [transform-style:preserve-3d] transition-transform duration-200 ease-out"
              style={{
                transform: `
      rotateX(${mousePosition.y * -8}deg)
      rotateY(${mousePosition.x * 10}deg)
    `,
              }}
            >
              {/* Ambient Glow */}
              <div className="absolute inset-16 rounded-full bg-[#34E5A0]/20 blur-[90px]" />

              {/* Large Circle Behind */}
              <div className="absolute inset-10 rounded-full border border-[#34E5A0]/10" />

              <div className="absolute inset-20 rounded-full border border-[#34E5A0]/15 border-dashed" />

              {/* 3D ORB */}
              <div
                className="
                  absolute
                  inset-20
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
                {/* Orb Highlight */}
                <div className="absolute top-12 left-16 w-24 h-12 rounded-full bg-white/30 blur-xl rotate-[-25deg]" />

                {/* Inner glow */}
                <div className="absolute inset-8 rounded-full border border-white/10" />

                {/* Small orbit dot */}
                <div className="absolute -top-3 left-1/2 w-3 h-3 rounded-full bg-[#34E5A0] shadow-[0_0_20px_#34E5A0]" />
              </div>

              {/* Rotating Orbit */}
              <div
                className="
                  absolute
                  inset-5
                  rounded-full
                  border border-[#34E5A0]/25
                  [transform:rotateX(65deg)_rotateZ(-20deg)]
                  animate-[spin_12s_linear_infinite]
                "
              />

              {/* ================= TECH CARD ================= */}

              <div
                className="
                  absolute
                  top-4
                  right-[-20px]
                  w-60
                  rounded-2xl
                  p-5
                  bg-[#101512]/90
                  border border-white/10
                  backdrop-blur-xl
                  shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                  rotate-[5deg]
                  transition-all
                  duration-500
                  hover:rotate-0
                  hover:-translate-y-2
                "
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-[#34E5A0]" />

                    <span className="text-[10px] tracking-widest uppercase text-white/40 font-semibold">
                      Frontend Stack
                    </span>
                  </div>

                  <span className="w-2 h-2 rounded-full bg-[#34E5A0] shadow-[0_0_10px_#34E5A0]" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">React.js</span>

                    <span className="text-[10px] tracking-widest text-[#34E5A0]">
                      ●●●●●
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">Next.js</span>

                    <span className="text-[10px] tracking-widest text-[#34E5A0]">
                      ●●●●○
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">Tailwind</span>

                    <span className="text-[10px] tracking-widest text-[#34E5A0]">
                      ●●●●●
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= LEARNING CARD ================= */}

              <div
                className="
                  absolute
                  bottom-12
                  left-[-30px]
                  w-60
                  rounded-2xl
                  p-5
                  bg-[#101512]/90
                  border border-white/10
                  backdrop-blur-xl
                  shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                  rotate-[-6deg]
                  transition-all
                  duration-500
                  hover:rotate-0
                  hover:-translate-y-2
                "
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} className="text-[#34E5A0]" />

                  <span className="text-[10px] tracking-widest uppercase text-white/40 font-semibold">
                    Currently Learning
                  </span>
                </div>

                <div className="text-2xl font-extrabold text-white">PHP</div>

                <p className="text-[11px] text-white/40 mt-1">
                  Expanding into backend development
                </p>
              </div>

              {/* ================= FLOATING BADGE ================= */}

              <div
                className="
                  absolute
                  bottom-[-5px]
                  right-[-10px]
                  px-4
                  py-2.5
                  rounded-full
                  bg-[#101512]/90
                  border border-white/10
                  backdrop-blur-xl
                  shadow-xl
                  flex items-center gap-2
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#34E5A0] animate-pulse" />

                <span className="text-xs text-white/70">
                  Available for work
                </span>
              </div>

              {/* ================= FLOATING PARTICLES ================= */}

              <span className="absolute top-20 left-8 w-2 h-2 rounded-full bg-[#34E5A0] animate-pulse" />

              <span className="absolute top-40 right-[-5px] w-1.5 h-1.5 rounded-full bg-white/60 animate-ping" />

              <span className="absolute bottom-32 right-14 w-2 h-2 rounded-full bg-[#34E5A0]/70 animate-pulse" />

              <span className="absolute bottom-10 left-20 w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
