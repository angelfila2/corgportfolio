import { SiJavascript, SiPython, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";
const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-10 md:p-12 space-y-5">
            <div className="rounded-xl border border-slate-200 bg-black shadow-sm text-center p-3">
              <h1 className="text-3xl font-bold text-white">Languages</h1>
            </div>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <SiJavascript className="text-5xl gap-10" />
                <span>JavaScript</span>
              </li>

              <li className="flex items-center gap-3">
                <SiPython className="text-5xl gap-10" />
                <span>Python</span>
              </li>

              <li className="flex items-center gap-3">
                <DiJava className="text-5xl gap-10" />
                <span>Java</span>
              </li>

              <li className="flex items-center gap-3">
                <SiMysql className="text-5xl gap-10" />
                <span>SQL</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-10 md:p-12 space-y-5">
            <div className="rounded-xl border border-slate-200 bg-black shadow-sm text-center p-3">
              <h1 className="text-3xl font-bold text-white">Frameworks</h1>
            </div>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <span>React</span>
              </li>

              <li className="flex items-center gap-3">
                <span> ExpressJs</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-10 md:p-12 space-y-5">
            <div className="rounded-xl border border-slate-200 bg-black shadow-sm text-center p-3">
              <h1 className="text-3xl font-bold text-white">Tools & Devops</h1>
            </div>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <SiJavascript className="text-5xl gap-10" />
                <span>Git - Version Control</span>
              </li>

              <li className="flex items-center gap-3">
                <SiPython className="text-5xl gap-10" />
                <span>Github Actions - CI/CD </span>
              </li>

              <li className="flex items-center gap-3">
                <span>Docker - Container</span>
              </li>

              <li className="flex items-center gap-3">
                <SiMysql className="text-5xl gap-10" />
                <span>SQL</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
