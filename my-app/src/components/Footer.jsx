
import React from "react";
import {
  Mail,
  ArrowRight,
  Heart,
  ArrowUp,
  Code,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const navigation = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050806] px-5 pt-16 pb-6 text-[#c9d1d9]">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#34E5A0]/[0.025] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.06] pb-12 md:grid-cols-3 md:gap-16">

          {/* ================= BRAND ================= */}

          <div className="text-center md:text-left">

            <p className="mb-3 font-mono text-[9px] leading-5 text-white/20">
              /* Building modern interfaces with clean code & creativity. */
            </p>

            <h2 className="font-mono text-2xl font-bold tracking-wide text-white">
              &gt;_ SANIA{" "}
              <span className="text-[#34E5A0]">
                DEV
              </span>
            </h2>

            <p className="mt-3 max-w-xs mx-auto text-xs leading-5 text-white/30 md:mx-0">
              Frontend developer focused on creating clean,
              modern and engaging digital experiences.
            </p>

            <div className="mt-5 flex justify-center md:justify-start">
              <div className="flex items-center gap-2 rounded-full border border-[#34E5A0]/15 bg-[#34E5A0]/[0.025] px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#34E5A0]" />

                <span className="text-[9px] uppercase tracking-[0.18em] text-[#34E5A0]/60">
                  Available for work
                </span>
              </div>
            </div>

          </div>

          {/* ================= NAVIGATION ================= */}

          <div className="text-center">

            <h3 className="mb-5 font-mono text-xs font-bold tracking-wider text-[#34E5A0]">
              // Navigate
            </h3>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">

              {navigation.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group flex items-center gap-1 font-mono text-[10px] text-white/35 transition-colors hover:text-[#34E5A0]"
                >
                  <span className="text-white/15">
                    0{index + 1}.
                  </span>

                  {item}

                  <ArrowRight
                    size={10}
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}

            </div>

          </div>

          {/* ================= SOCIALS ================= */}

          <div className="text-center md:text-right">

            <h3 className="mb-5 font-mono text-xs font-bold tracking-wider text-[#34E5A0]">
              // Connect
            </h3>

            <div className="flex justify-center gap-3 md:justify-end">

              <a
                href="mailto:your@email.com"
                aria-label="Email"
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-2.5 text-white/35 transition-all hover:border-[#34E5A0]/30 hover:bg-[#34E5A0]/[0.04] hover:text-[#34E5A0]"
              >
                <Mail size={16} />
              </a>

              <a
                href="#github"
                aria-label="GitHub"
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-2.5 text-white/35 transition-all hover:border-[#34E5A0]/30 hover:bg-[#34E5A0]/[0.04] hover:text-[#34E5A0]"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-2.5 text-white/35 transition-all hover:border-[#34E5A0]/30 hover:bg-[#34E5A0]/[0.04] hover:text-[#34E5A0]"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#code"
                aria-label="Code"
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-2.5 text-white/35 transition-all hover:border-[#34E5A0]/30 hover:bg-[#34E5A0]/[0.04] hover:text-[#34E5A0]"
              >
                <Code size={16} />
              </a>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col items-center justify-between gap-4 pt-5 text-[9px] text-white/20 sm:flex-row">

          <p>
            © 2026 Sania Dev. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS

            <Heart
              size={12}
              className="fill-[#34E5A0] text-[#34E5A0]"
            />
          </p>

          <a
            href="#top"
            className="flex items-center gap-1 transition-colors hover:text-[#34E5A0]"
          >
            Back to top

            <ArrowUp size={12} />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

