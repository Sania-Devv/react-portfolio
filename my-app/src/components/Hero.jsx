import { ArrowUpRight, Mail } from 'lucide-react';
import profileImg from '../assets/profileimg.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#0a0a0a]">
      {/* Rich ambient glow - top-left, jaisa reference image mein highlighted tha */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#F4A384]/50 rounded-full blur-3xl" />
        <div className="absolute -top-20 left-10 w-[400px] h-[400px] bg-[#7A5063]/60 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-[350px] h-[350px] bg-[#F4A384]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full
            bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#F4A384]" />
            <span className="text-sm font-medium text-white/90">
              Available for new opportunities
            </span>
          </div>

          <h1 className="font-extrabold leading-[0.95] tracking-tight">
            <span className="block text-5xl md:text-6xl text-white">
              Zain Abbas
            </span>
            <span className="block text-5xl md:text-6xl text-white/40">
              builds interfaces
            </span>
          </h1>

          <div className="flex items-center gap-3 mt-6 mb-5">
            <span className="bg-[#F4A384] text-black text-xs font-bold px-3 py-1 rounded-full">
              Frontend
            </span>
            <span className="font-medium text-white/80">
              Developer based in Karachi
            </span>
          </div>

          <p className="leading-relaxed max-w-md mb-8 text-white/60">
            I design and build fast, responsive web interfaces with React,
            Next.js and Tailwind CSS — turning ideas into products people
            enjoy using.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full
                bg-[#F4A384]/90 backdrop-blur-md border border-white/30
                text-black shadow-[0_4px_20px_rgba(244,163,132,0.4)]
                hover:bg-[#F4A384] transition-colors"
            >
              <ArrowUpRight size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full
                bg-white/10 backdrop-blur-md border border-white/20
                text-white hover:bg-white/20 transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 flex items-center justify-center md:justify-end">
            <div className="w-[360px] h-[360px] rounded-full border border-dashed
              border-white/25 animate-spin-slow" />
          </div>

          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden
            border-4 border-[#1b3a5c]">
            < img
              src={profileImg}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}