import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-16 px-6">
        <h1 className="text-4xl font-bold mt-8">Loaf Mode is working 🍞🐶</h1>
        <p className="mt-4 text-neutral-600">
          If you can see this, the navbar is rendering correctly.
        </p>
      </main>
    </>
  );
}
