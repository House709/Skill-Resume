import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Passion from "./component/Passions";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="flex flex-col justify-center items-center p-[50px] gap-[50px] w-[1900px]  pl-[150px] pr-[150px] pt-[40px] font-link bg-[url('./Background.png')] ">
      <Navbar />
      <About />
      <Passion />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
