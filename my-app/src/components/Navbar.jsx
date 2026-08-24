export default function Navbar() {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5
      bg-white/80 backdrop-blur-xl border-b border-[#7A5063]/10">

      <span className="font-bold text-lg text-[#7A5063]">
        Zain<span className="text-[#F4A384]">.dev</span>
      </span>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-[#7A5063] hover:text-[#F4A384] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
<a
      
        href="#contact"
        className="text-sm font-semibold px-5 py-2 rounded-full
          bg-[#F4A384] text-white hover:opacity-90 transition-opacity"
      >
        Let's Talk
      </a>
    </nav>
  );
}