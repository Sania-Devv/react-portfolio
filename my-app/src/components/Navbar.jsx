import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0F0D]/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-12 py-5">

        <span className="font-bold text-lg text-white transition-opacity duration-300 hover:opacity-80">
          Sania<span className="text-[#34E5A0]">.dev</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-sm text-white/60 transition-colors duration-300 hover:text-[#34E5A0]"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#34E5A0] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop button */}
        <a
          href="#contact"
          className="hidden md:inline-flex text-sm font-semibold px-5 py-2 rounded-full
            bg-[#34E5A0] text-[#06110C] transition-all duration-300 ease-out
            hover:bg-[#4FF0B0] hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(52,229,160,0.4)]
            active:scale-[0.98]"
        >
          Let's Talk
        </a>

        {/* Hamburger button - mobile/tablet only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full
            border border-white/10 bg-white/5 text-white transition-all duration-300
            hover:bg-white/10 hover:border-[#34E5A0]/30 active:scale-95"
            aria-label="Toggle menu"
        >
          <span className="transition-transform duration-300">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </span>
        </button>
      </div> 

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2 border-t border-white/10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="group relative text-sm text-white/70 transition-colors duration-300 hover:text-[#34E5A0] py-2.5 pl-0 hover:pl-2"
              style={{ transitionProperty: 'color, padding-left' }}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex justify-center text-sm font-semibold px-5 py-2.5 rounded-full
              bg-[#34E5A0] text-[#06110C] transition-all duration-300
              hover:bg-[#4FF0B0] hover:shadow-[0_0_20px_rgba(52,229,160,0.4)] active:scale-[0.98]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}