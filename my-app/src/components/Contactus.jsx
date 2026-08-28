import {
  ArrowUpRight,
  Mail,
  Network,
  GitBranch,
  Terminal,
  Send,
} from "lucide-react";

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
    label: "GitHub",
    value: "View my code",
    href: "#",
    icon: GitBranch,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0A0F0D] py-20 sm:py-24 md:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#34E5A0]/[0.035] blur-[120px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute -right-40 top-0 h-[350px] w-[350px] rounded-full bg-[#34E5A0]/[0.025] blur-[120px] sm:h-[450px] sm:w-[450px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">

        {/* ================= SECTION LABEL ================= */}

        <div className="mb-12 flex items-center gap-4 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#34E5A0]/40" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-[#34E5A0] shadow-[0_0_14px_#34E5A0]" />
            </span>

            <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-[11px] font-semibold uppercase tracking-[0.3em] text-transparent sm:text-[13px]">
              Contact
            </span>
          </div>

          <span className="h-px w-16 bg-gradient-to-r from-[#34E5A0]/40 to-transparent sm:w-24" />
        </div>

        {/* ================= 2 COLUMN LAYOUT ================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div className="relative">

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 sm:text-xs">
              Have a project in mind?
            </p>

            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Let's build
              <br />

              <span className="bg-gradient-to-r from-[#34E5A0] via-[#6EE7F9] to-[#A78BFA] bg-clip-text text-transparent">
                something great.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40 sm:text-[15px]">
              I'm always open to interesting projects, creative ideas and
              opportunities to build something meaningful together.
            </p>

            {/* Contact Links */}

            <div className="mt-9 max-w-md space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-[#0D1411]/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#34E5A0]/25 hover:bg-[#101914]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] transition-all group-hover:border-[#34E5A0]/25 group-hover:bg-[#34E5A0]/[0.06]">
                        <Icon
                          size={17}
                          strokeWidth={1.4}
                          className="text-white/40 transition-colors group-hover:text-[#34E5A0]"
                        />
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                          {item.label}
                        </p>

                        <p className="mt-1 text-xs font-medium text-white/65 sm:text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#34E5A0]"
                    />
                  </a>
                );
              })}
            </div>

            {/* Small status */}

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#34E5A0]/15 bg-[#34E5A0]/[0.025] px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#34E5A0] shadow-[0_0_8px_#34E5A0]" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#34E5A0]/65">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE — ORBIT + TERMINAL */}
          {/* ================================================= */}

          <div className="relative flex min-h-[480px] items-center justify-center sm:min-h-[530px]">

            {/* Orbit Glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34E5A0]/[0.05] blur-[90px] sm:h-80 sm:w-80" />

            {/* Outer Orbit */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#34E5A0]/10 sm:h-[420px] sm:w-[420px] md:h-[500px] md:w-[500px]" />

            {/* Dashed Orbit */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-white/[0.06] sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px]" />

            {/* Inner Orbit */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6EE7F9]/[0.06] sm:h-[250px] sm:w-[250px] md:h-[310px] md:w-[310px]" />

            {/* Orbit Dot Top */}

            <div className="absolute left-1/2 top-[25px] z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-[#34E5A0] shadow-[0_0_15px_#34E5A0] sm:top-[15px]" />

            {/* Orbit Dot Right */}

            <div className="absolute right-[5%] top-1/2 z-10 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#6EE7F9]/70 shadow-[0_0_12px_#6EE7F9] sm:right-[8%] md:right-[4%]" />

            {/* Orbit Dot Left */}

            <div className="absolute left-[5%] top-[65%] z-10 h-1.5 w-1.5 rounded-full bg-[#A78BFA]/60 shadow-[0_0_12px_#A78BFA] sm:left-[8%] md:left-[4%]" />

            {/* ================================================= */}
            {/* TERMINAL */}
            {/* ================================================= */}

            <div className="relative z-20 w-full max-w-[450px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0B110E]/95 shadow-[0_0_70px_rgba(52,229,160,0.10)] backdrop-blur-xl">

              {/* Terminal Header */}

              <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#101612] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#34E5A0]/70" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                  </div>

                  <span className="ml-2 font-mono text-[10px] text-white/35">
                    &gt;_ send_message.js
                  </span>
                </div>

                <Terminal
                  size={14}
                  className="text-[#34E5A0]/50"
                />
              </div>

              {/* Form */}

              <form
                className="space-y-5 p-5 sm:p-6"
                onSubmit={(e) => e.preventDefault()}
              >

                {/* Name */}

                <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs">
                  <span className="text-[#f1c40f]">const</span>

                  <span className="text-[#58a6ff]">name</span>

                  <span className="text-white/35">=</span>

                  <span className="text-[#34E5A0]">"</span>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="min-w-0 flex-1 border-b border-transparent bg-transparent text-[#34E5A0] outline-none transition-colors placeholder:text-white/20 focus:border-[#34E5A0]/50"
                  />

                  <span className="text-[#34E5A0]">";</span>
                </div>

                {/* Email */}

                <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs">
                  <span className="text-[#f1c40f]">const</span>

                  <span className="text-[#58a6ff]">email</span>

                  <span className="text-white/35">=</span>

                  <span className="text-[#34E5A0]">"</span>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="min-w-0 flex-1 border-b border-transparent bg-transparent text-[#34E5A0] outline-none transition-colors placeholder:text-white/20 focus:border-[#34E5A0]/50"
                  />

                  <span className="text-[#34E5A0]">";</span>
                </div>

                {/* Message */}

                <div className="flex items-start gap-1.5 font-mono text-[10px] sm:text-xs">
                  <span className="text-[#f1c40f]">const</span>

                  <span className="text-[#58a6ff]">message</span>

                  <span className="text-white/35">=</span>

                  <span className="text-[#34E5A0]">`</span>

                  <textarea
                    rows="3"
                    placeholder="Let's work together..."
                    className="min-w-0 flex-1 resize-none border-b border-transparent bg-transparent text-[#34E5A0] outline-none transition-colors placeholder:text-white/20 focus:border-[#34E5A0]/50"
                  />

                  <span className="text-[#34E5A0]">`;</span>
                </div>

                {/* Submit */}

                <div className="flex items-center justify-between border-t border-white/[0.05] pt-4">
                  <div className="font-mono text-[10px] text-white/30 sm:text-xs">
                    <span className="text-[#f1c40f]">
                      sendMessage
                    </span>
                    <span className="text-white/40">()</span>
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center gap-2 rounded-full border border-[#34E5A0]/25 bg-[#34E5A0]/[0.07] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#34E5A0] transition-all hover:border-[#34E5A0]/50 hover:bg-[#34E5A0]/[0.13] hover:shadow-[0_0_25px_rgba(52,229,160,0.12)]"
                  >
                    Send

                    <Send
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
