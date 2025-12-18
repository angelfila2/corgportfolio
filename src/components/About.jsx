const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen container mx-auto px-4 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          About Me
        </h2>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-10 md:p-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a passionate backend developer with a strong foundation in
            server-side technologies and database management. I thrive on
            solving complex problems and building scalable solutions that power
            modern applications.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            When I'm not coding, you'll find me learning new technologies,
            contributing to open source, or spending time with my corgi who's
            the best debugging companion a developer could ask for! 🐾
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
