import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0F0D]/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(52,229,160,0.06)]">
      <div className="flex items-center justify-between px-6 md:px-12 py-4.5">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#34E5A0] shadow-[0_0_10px_#34E5A0] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-bold text-[17px] tracking-tight text-white transition-opacity duration-300 group-hover:opacity-80">
            Sania<span className="text-[#34E5A0]">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-[13.5px] font-medium tracking-wide text-white/55 transition-colors duration-300 hover:text-white"
            >
              {link}
              <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#34E5A0] shadow-[0_0_8px_#34E5A0] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-[13.5px] font-semibold px-5 py-2.5 rounded-full
            bg-[#34E5A0] text-[#06110C] tracking-wide transition-all duration-300 ease-out
            hover:bg-[#4FF0B0] hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(52,229,160,0.45)]
            active:scale-[0.97]"
        >
          Let's Talk
        </a>

        {/* Hamburger button - mobile/tablet only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full
            border border-white/10 bg-white/[0.04] text-white transition-all duration-300
            hover:bg-white/[0.08] hover:border-[#34E5A0]/40 active:scale-95"
          aria-label="Toggle menu"
        >
          <span className="transition-transform duration-300">
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-0.5 px-6 pb-6 pt-3 border-t border-white/[0.06]">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 text-[14px] font-medium text-white/65 transition-all duration-300 hover:text-white py-3 border-b border-white/[0.04] last:border-b-0"
            >
              <span className="text-[10px] text-white/25 tabular-nums">
                0{i + 1}
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {link}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex justify-center items-center text-[13.5px] font-semibold px-5 py-3 rounded-full
              bg-[#34E5A0] text-[#06110C] tracking-wide transition-all duration-300
              hover:bg-[#4FF0B0] hover:shadow-[0_0_24px_rgba(52,229,160,0.45)] active:scale-[0.97]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}