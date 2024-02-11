import React from "react";
import "./styles/tailwind.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Research from "./components/research";
import Activity from "./components/activity";
import About from "./components/about";
import Footer from "./components/footer";
import OverlayButton from "./components/overlay";
function App() {
  return (
    <main className=" max-w-[1480px] ml-auto mr-auto">
      <Navbar />
      <Hero />
      <Research />
      <Activity />
      <About />
      <OverlayButton />
      <Footer />
    </main>
    
  );
}

export default App;
