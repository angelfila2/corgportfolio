const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-white font-semibold tracking-wide text-lg">
            SYAFIQ
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#home"
              className="text-neutral-300 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-neutral-300 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-neutral-300 hover:text-white transition"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-neutral-300 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white px-4 py-2 text-sm text-white transition hover:bg-orange-400 hover:border-orange-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
