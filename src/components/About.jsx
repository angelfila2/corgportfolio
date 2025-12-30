import avatar from "../assets/portfolio.png";

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

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image */}
          <div className="w-72 h-72">
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl border border-slate-200"
            />
          </div>

          {/* Text card matches image size */}
          <div className="h-72 rounded-xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col justify-center">
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              I am Muhammad Syafiq Bin Wahinudin, a Singapore-based{" "}
              <span className="font-semibold text-slate-900">
                backend developer
              </span>{" "}
              and recent graduate specializing in{" "}
              <span className="font-semibold text-slate-900">Node.js</span>.
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              I{" "}
              <span className="font-medium text-slate-900">take ownership</span>{" "}
              of my work,{" "}
              <span className="font-medium text-slate-900">
                actively seek feedback
              </span>
              , and continuously refine my skills through real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
