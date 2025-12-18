import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 py-16 md:py-24 pt-24 md:pt-32 relative">
      <div className="max-w-4xl mx-auto">
        {/* Subtle Corgi Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-lg">
              <div className="text-5xl">🐕</div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
              {"{ }"}
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 text-center text-balance">
          Junior Backend Developer
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 text-center text-balance leading-relaxed">
          Building robust APIs and database solutions with clean, maintainable
          code
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md border border-slate-300 text-slate-800 hover:bg-slate-100 transition"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-slate-100 transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-slate-100 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:hello@example.com"
            className="p-3 rounded-full hover:bg-slate-100 transition"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-0 right-0">
        <ScrollIndicator targetSection="about" label="Learn About Me" />
      </div> */}
    </section>
  );
};

export default Hero;
