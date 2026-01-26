import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#083b44] to-[#062d33]">
      <Navbar />
      <Hero />
      <TrustedBy />
    </div>
  );
}

export default App;
