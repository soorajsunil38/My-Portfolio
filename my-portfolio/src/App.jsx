import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
      </main>
    </div>
  );
}

export default App;