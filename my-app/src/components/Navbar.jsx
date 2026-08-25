export default function Navbar() {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5
      bg-[#0A0F0D]/80 backdrop-blur-xl border-b border-white/10">

      <span className="font-bold text-lg text-white">
        Sania<span className="text-[#34E5A0]">.dev</span>
      </span>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
           href={`#${link.toLowerCase()}`}
            className="text-sm text-white/60 hover:text-[#34E5A0] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="text-sm font-semibold px-5 py-2 rounded-full
          bg-[#34E5A0] text-[#06110C] hover:bg-[#4FF0B0] transition-colors"
      >
        Let's Talk
      </a>
    </nav>
  );
}