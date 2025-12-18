import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20">
      <Navbar />

      <div className="pt-16">
        <Hero />
        <About />
        <Skills />

        <main className="px-6">
          <h1 className="text-4xl font-bold mt-8">Loaf Mode is working 🍞🐶</h1>
          <p className="mt-4 text-neutral-600">
            If you can see this, the navbar is rendering correctly.
          </p>
        </main>
      </div>
    </div>
  );
}
