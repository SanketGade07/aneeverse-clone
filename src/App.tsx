import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import WhatWeCreate from "./components/WhatWeCreate";
import CommandCenter from "./components/CommandCenter";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#073742] to-[#062d33]">
      <Navbar />
      <Hero />
      <TrustedBy />
      <WhatWeCreate />
      <CommandCenter />
    </div>
  );
}

export default App;
