// import { ArrowUpRight, Sparkles } from "lucide-react";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#0A0F0D] py-16 md:py-20"
//     >
//       {/* ================= BACKGROUND ================= */}

//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[-180px] top-10 h-[400px] w-[400px] rounded-full bg-[#34E5A0]/5 blur-[120px]" />

//         <div className="absolute right-[-150px] bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#7C3AED]/5 blur-[120px]" />

//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
//       </div>

//       {/* ================= MAIN ================= */}

//       <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

//         {/* Section Label */}

//         <div className="mb-4 flex items-center gap-3">
//           <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#34E5A0]">
//             01 / About
//           </span>

//           <span className="h-px w-12 bg-white/10" />
//         </div>

//         {/* ================= DIAGONAL LAYOUT ================= */}

//         <div className="relative min-h-[460px]">

//           {/* ================================================= */}
//           {/* LEFT TEXT — SLIGHTLY UP                         */}
//           {/* ================================================= */}

//           <div
//             className="
//               absolute
//               left-0
//               top-[45px]
//               z-20
//               w-full
//               max-w-md
//               animate-[slideFromLeft_0.9s_ease-out]
//             "
//           >
//             <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
//               A little about me
//             </p>

//             <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
//               <span className="text-white">Designing with</span>
//               <br />
//               <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-transparent">
//                 purpose.
//               </span>
//             </h2>

//             <div className="mt-6 max-w-sm space-y-4 text-sm leading-6 text-white/50">
//               <p>
//                 I'm a frontend developer who enjoys turning ideas into
//                 clean, modern and interactive digital experiences.
//               </p>

//               <p>
//                 I mainly work with{" "}
//                 <span className="font-medium text-white/80">
//                   React
//                 </span>
//                 ,{" "}
//                 <span className="font-medium text-white/80">
//                   Next.js
//                 </span>{" "}
//                 and{" "}
//                 <span className="font-medium text-white/80">
//                   Tailwind CSS
//                 </span>
//                 .
//               </p>
//             </div>

//             <a
//               href="#projects"
//               className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#34E5A0] transition-all hover:gap-3"
//             >
//               Explore my work
//               <ArrowUpRight size={16} />
//             </a>
//           </div>


//           {/* ================================================= */}
//           {/* CENTER — SAME 3D VISUAL AS HERO                 */}
//           {/* ================================================= */}

//           <div className="absolute left-1/2 top-1/2 z-10 flex h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">

//             {/* Ambient Glow */}

//             <div className="absolute inset-16 rounded-full bg-[#34E5A0]/20 blur-[90px]" />

//             {/* Large Radar Circle */}

//             <div className="absolute inset-10 rounded-full border border-[#34E5A0]/10" />

//             <div className="absolute inset-20 rounded-full border border-dashed border-[#34E5A0]/15" />

//             {/* 3D ORB */}

//             <div
//               className="
//                 absolute
//                 inset-20
//                 rounded-full
//                 bg-[radial-gradient(circle_at_30%_25%,#B5FFE3_0%,#34E5A0_22%,#16845B_48%,#0A3A2A_70%,#06110C_100%)]
//                 shadow-[0_0_80px_rgba(52,229,160,0.35)]
//                 transition-all
//                 duration-700
//                 hover:scale-105
//                 hover:rotate-6
//                 hover:shadow-[0_0_120px_rgba(52,229,160,0.5)]
//               "
//             >

//               {/* Orb Highlight */}

//               <div className="absolute left-16 top-12 h-12 w-24 rotate-[-25deg] rounded-full bg-white/30 blur-xl" />

//               {/* Inner Ring */}

//               <div className="absolute inset-8 rounded-full border border-white/10" />

//               {/* Orbit Dot */}

//               <div className="absolute -top-3 left-1/2 h-3 w-3 rounded-full bg-[#34E5A0] shadow-[0_0_20px_#34E5A0]" />
//             </div>

//             {/* Rotating Orbit */}

//             <div
//               className="
//                 absolute
//                 inset-5
//                 rounded-full
//                 border
//                 border-[#34E5A0]/25
//                 [transform:rotateX(65deg)_rotateZ(-20deg)]
//                 animate-[spin_12s_linear_infinite]
//               "
//             />

//             {/* Floating Dot */}

//             <span className="absolute left-8 top-20 h-2 w-2 rounded-full bg-[#34E5A0] animate-pulse" />

//             <span className="absolute right-[-5px] top-40 h-1.5 w-1.5 rounded-full bg-white/60 animate-ping" />

//             <span className="absolute bottom-32 right-14 h-2 w-2 rounded-full bg-[#34E5A0]/70 animate-pulse" />

//             <span className="absolute bottom-10 left-20 h-1.5 w-1.5 rounded-full bg-white/40 animate-ping" />
//           </div>


//           {/* ================================================= */}
//           {/* RIGHT TEXT — SLIGHTLY DOWN                      */}
//           {/* ================================================= */}

//           <div
//             className="
//               absolute
//               right-0
//               top-[250px]
//               z-20
//               w-full
//               max-w-sm
//               animate-[slideFromRight_0.9s_ease-out]
//             "
//           >
//             <div className="border-l border-[#34E5A0]/20 pl-6">

//               <div className="mb-4 flex items-center gap-3">
//                 <Sparkles
//                   size={15}
//                   className="text-[#34E5A0]"
//                 />

//                 <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
//                   What I care about
//                 </span>
//               </div>

//               <h3 className="text-2xl font-bold leading-tight text-white">
//                 Interfaces that feel
//                 <span className="bg-gradient-to-r from-[#34E5A0] to-[#6EE7F9] bg-clip-text text-transparent">
//                   {" "}simple.
//                 </span>
//               </h3>

//               <p className="mt-4 text-sm leading-6 text-white/45">
//                 Good interfaces aren't only about how they look.
//                 They should feel intuitive, responsive and enjoyable
//                 to use.
//               </p>

//               {/* Small details */}

//               <div className="mt-6 flex flex-wrap gap-3">
//                 <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-md">
//                   Clean UI
//                 </span>

//                 <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-md">
//                   Responsive
//                 </span>

//                 <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-md">
//                   Interactive
//                 </span>
//               </div>

//             </div>
//           </div>


//           {/* ================================================= */}
//           {/* BOTTOM CENTER STATEMENT                          */}
//           {/* ================================================= */}

//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
//             <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 bg-gradient-to-r from-[#34E5A0] to-[#6EE7F9] bg-clip-text text-transparent">
//               React · Next.js · Tailwind · PHP
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* ================= ANIMATION ================= */}

//       <style>{`
//         @keyframes slideFromLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-70px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideFromRight {
//           from {
//             opacity: 0;
//             transform: translateX(70px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

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
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#0A0F0D] py-16 md:py-20"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-10 h-[400px] w-[400px] rounded-full bg-[#34E5A0]/5 blur-[120px]" />

        <div className="absolute bottom-[-100px] right-[-150px] h-[400px] w-[400px] rounded-full bg-[#7C3AED]/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* ================= ABOUT LABEL ================= */}

        <div
          className={`mb-8 flex items-center gap-5 transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">

            {/* Green glowing dot */}

            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34E5A0]/40" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34E5A0] shadow-[0_0_16px_#34E5A0]" />
            </span>

            {/* Label */}

            <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent">
              About Me
            </span>
          </div>

          {/* Gradient line */}

          <span className="h-px w-24 bg-gradient-to-r from-[#34E5A0]/50 via-[#6EE7F9]/25 to-transparent" />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative min-h-[500px]">

          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div
            className={`absolute left-0 top-[45px] z-20 w-full max-w-md transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              A little about me
            </p>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              <span className="text-white">
                Designing with
              </span>

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
                <span className="font-medium text-white/80">
                  React
                </span>
                ,{" "}
                <span className="font-medium text-white/80">
                  Next.js
                </span>{" "}
                and{" "}
                <span className="font-medium text-white/80">
                  Tailwind CSS
                </span>
                .
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
          {/* CENTER — BACKGROUND 3D VISUAL */}
          {/* ================================================= */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 items-center justify-center opacity-50 md:h-[560px] md:w-[560px] md:opacity-60">

            {/* Ambient Glow */}

            <div className="absolute inset-20 rounded-full bg-[#34E5A0]/15 blur-[110px]" />

            {/* Radar Circle */}

            <div className="absolute inset-10 rounded-full border border-[#34E5A0]/10" />

            {/* Dashed Circle */}

            <div className="absolute inset-24 rounded-full border border-dashed border-[#34E5A0]/15" />

            {/* 3D ORB */}

            <div className="absolute inset-[120px] rounded-full bg-[radial-gradient(circle_at_30%_25%,#B5FFE3_0%,#34E5A0_22%,#16845B_48%,#0A3A2A_70%,#06110C_100%)] shadow-[0_0_100px_rgba(52,229,160,0.3)]">

              {/* Orb Highlight */}

              <div className="absolute left-14 top-10 h-12 w-24 rotate-[-25deg] rounded-full bg-white/25 blur-xl" />

              {/* Inner Ring */}

              <div className="absolute inset-8 rounded-full border border-white/10" />

              {/* Orbit Dot */}

              <div className="absolute -top-3 left-1/2 h-3 w-3 rounded-full bg-[#34E5A0] shadow-[0_0_20px_#34E5A0]" />
            </div>

            {/* Rotating Orbit */}

            <div className="absolute inset-5 animate-[spin_12s_linear_infinite] rounded-full border border-[#34E5A0]/20 [transform:rotateX(65deg)_rotateZ(-20deg)]" />

            {/* Floating Dots */}

            <span className="absolute left-16 top-24 h-2 w-2 animate-pulse rounded-full bg-[#34E5A0]" />

            <span className="absolute right-10 top-40 h-1.5 w-1.5 animate-ping rounded-full bg-white/50" />

            <span className="absolute bottom-32 right-16 h-2 w-2 animate-pulse rounded-full bg-[#34E5A0]/60" />

            <span className="absolute bottom-16 left-24 h-1.5 w-1.5 animate-ping rounded-full bg-white/30" />
          </div>

          {/* ================================================= */}
          {/* RIGHT CONTENT */}
          {/* ================================================= */}

          <div
            className={`absolute right-0 top-[250px] z-20 w-full max-w-sm transform transition-all delay-200 duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="border-l border-[#34E5A0]/20 pl-6">

              {/* Small heading */}

              <div className="mb-4 flex items-center gap-3">
                <Sparkles
                  size={15}
                  className="text-[#34E5A0]"
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                  What I care about
                </span>
              </div>

              {/* Heading */}

              <h3 className="text-2xl font-bold leading-tight text-white">
                Interfaces that feel{" "}
                <span className="bg-gradient-to-r from-[#34E5A0] to-[#6EE7F9] bg-clip-text text-transparent">
                  simple.
                </span>
              </h3>

              {/* Description */}

              <p className="mt-4 text-sm leading-6 text-white/45">
                Good interfaces aren't only about how they look.
                They should feel intuitive, responsive and enjoyable
                to use.
              </p>

              {/* Tags */}

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

          {/* ================================================= */}
          {/* BOTTOM STATEMENT */}
          {/* ================================================= */}

          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-center transition-all delay-500 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
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