
import {
  ArrowUpRight,
  Mail,
  Network,
  GitBranch,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "Let's talk",
    href: "mailto:your@email.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
    icon: Network,
  },
  {
    label: "GitBranch",
    value: "View my code",
    href: "#",
    icon: GitBranch,
  },
];

export default function Contact() {
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
      id="contact"
      className="relative overflow-hidden bg-[#0A0F0D] py-24 md:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#34E5A0]/[0.035] blur-[130px]" />

        <div className="absolute right-[-180px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#7C3AED]/[0.035] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* ================= LABEL ================= */}

        <div
          className={`mb-6 flex items-center gap-5 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#34E5A0]/30" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-[#34E5A0] shadow-[0_0_14px_#34E5A0]" />
            </span>

            <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-[13px] font-semibold uppercase tracking-[0.3em] text-transparent">
              Contact
            </span>
          </div>

          <span className="h-px w-24 bg-gradient-to-r from-[#34E5A0]/40 via-[#6EE7F9]/20 to-transparent" />
        </div>

        {/* ================= MAIN AREA ================= */}

        <div className="relative min-h-[620px]">

          {/* ================= ORBIT SYSTEM ================= */}

          <div className="pointer-events-none absolute left-1/2 top-[45%] hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 md:block">

            {/* Outer Orbit */}

            <div className="absolute inset-0 animate-[spin_35s_linear_infinite] rounded-full border border-white/[0.025]" />

            {/* Second Orbit */}

            <div className="absolute inset-[65px] rounded-full border border-[#34E5A0]/[0.045]" />

            {/* Dashed Orbit */}

            <div className="absolute inset-[125px] animate-[spin_25s_linear_infinite_reverse] rounded-full border border-dashed border-white/[0.035]" />

            {/* Inner Orbit */}

            <div className="absolute inset-[190px] rounded-full border border-[#6EE7F9]/[0.04]" />

            {/* Orbit dots */}

            <div className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#34E5A0]/50 shadow-[0_0_12px_#34E5A0]" />

            <div className="absolute bottom-[78px] right-[48px] h-1.5 w-1.5 rounded-full bg-[#6EE7F9]/40 shadow-[0_0_12px_#6EE7F9]" />

            <div className="absolute bottom-[92px] left-[55px] h-1.5 w-1.5 rounded-full bg-[#A78BFA]/40 shadow-[0_0_12px_#A78BFA]" />
          </div>

          {/* ================= CENTER CTA ================= */}

          <div
            className={`absolute left-1/2 top-[45%] z-20 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-1000 ${
              isVisible
                ? "scale-100 opacity-100"
                : "scale-90 opacity-0"
            }`}
          >

            {/* Center Glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34E5A0]/[0.045] blur-[90px]" />

            {/* Message Icon */}

            <div className="relative mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0D1411]/90 shadow-[0_0_50px_rgba(52,229,160,0.06)] backdrop-blur-xl">

              <div className="absolute inset-0 rounded-2xl bg-[#34E5A0]/[0.05] blur-xl" />

              <MessageCircle
                size={25}
                strokeWidth={1.4}
                className="relative text-[#34E5A0]/75"
              />
            </div>

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Have a project in mind?
            </p>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              Let's build
              <br />

              <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-transparent">
                something great.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/40">
              I'm always open to interesting projects, creative ideas
              and opportunities to build something meaningful together.
            </p>

            {/* CTA */}

            <a
              href="mailto:your@email.com"
              className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#34E5A0]/25 bg-[#34E5A0]/[0.08] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#34E5A0] transition-all duration-300 hover:border-[#34E5A0]/50 hover:bg-[#34E5A0]/[0.14] hover:shadow-[0_10px_40px_rgba(52,229,160,0.1)]"
            >
              Start a conversation

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* ================= CONTACT CARDS ================= */}

          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 gap-3 md:grid-cols-3">

            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D1411]/70 p-5 backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:border-[#34E5A0]/25 hover:bg-[#101914] ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 120}ms`,
                  }}
                >

                  {/* Card Glow */}

                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#34E5A0]/[0.06] blur-2xl transition-all duration-500 group-hover:scale-150" />

                  <div className="relative flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#34E5A0]/25 group-hover:bg-[#34E5A0]/[0.06]">

                        <Icon
                          size={17}
                          strokeWidth={1.4}
                          className="text-white/45 transition-colors duration-300 group-hover:text-[#34E5A0]"
                        />

                      </div>

                      <div>
                        <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                          {item.label}
                        </p>

                        <p className="mt-1 text-xs font-medium text-white/65">
                          {item.value}
                        </p>
                      </div>

                    </div>

                    <ArrowUpRight
                      size={14}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#34E5A0]"
                    />

                  </div>

                  <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#34E5A0]/0 to-transparent transition-all duration-500 group-hover:via-[#34E5A0]/35" />

                </a>
              );
            })}

          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div
          className={`mt-12 flex justify-center transition-all delay-700 duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
            Let's connect · Let's create
          </p>
        </div>

      </div>
    </section>
  );
}

