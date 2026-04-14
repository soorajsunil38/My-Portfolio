import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

function App() {
  return (
    <div className="min-h-screen pb-[100vh]">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
      </main>
    </div>
  );
}

export default App;