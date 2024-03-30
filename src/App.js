import React from "react";
import "./styles/tailwind.css";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/hero";
import Research from "./components/research";
import Activity from "./components/activity";
import About from "./components/About.js";
import Footer from "./components/footer";
import OverlayButton from "./components/overlay";
import Card from "./components/Card.jsx";
import RegistrationForm from "./post.js";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Lectures from "./Lectures.js";
function App() {
  return (
    <div className=" w-full flex flex-col overflow-hidden">
      <Navbar />
      <div className="px-4 md:px-10 space-y-5">
        <Hero className="mt-10" />

        <div className="flex flex-col justify-center">
          <div className="text-[#222222]">Recent Works</div>
          <div className="text-3xl text-black">
            Research & Development loremEu loremEu loremEu
          </div>
        </div>

        <Card className="ml-10" />
        <Card className="ml-10" />
        <Card className="ml-10" />
        <Card className="ml-10" />
        <Card className="ml-10" />
      </div>
      <div className="flex flex-col justify-center px-4 md:px-10 mt-10">
        <div className="text-[#222222]">Connections - Currency</div>
        <div className="text-3xl text-black">What People Say about me !</div>
      </div>
      <div className="w-full px-0 mt-10">
        <Marquee>
          <Marque
            name={"Shivathmika"}
            role={"working on Verizon"}
            desc={
              "Quis cillum pariatur voluptate est velit qui tempor aliquip reprehenderit occaecat. Adipisicing ex sunt non esse deserunt eu ad ut elit ex minim tempor reprehenderit. Anim magna laborum adipisicing ullamco est exercitation esse tempor."
            }
          />
          <Marque
            name={"Shivathmika"}
            role={"working on Verizon"}
            desc={
              "Quis cillum pariatur voluptate est velit qui tempor aliquip reprehenderit occaecat. Adipisicing ex sunt non esse deserunt eu ad ut elit ex minim tempor reprehenderit. Anim magna laborum adipisicing ullamco est exercitation esse tempor."
            }
          />
          <Marque
            name={"Shivathmika"}
            role={"working on Verizon"}
            desc={
              "Quis cillum pariatur voluptate est velit qui tempor aliquip reprehenderit occaecat. Adipisicing ex sunt non esse deserunt eu ad ut elit ex minim tempor reprehenderit. Anim magna laborum adipisicing ullamco est exercitation esse tempor."
            }
          />
          <Marque
            name={"Shivathmika VidhyaShankar"}
            role={"working on Verizon"}
            desc={
              "Quis cillum pariatur voluptate est velit qui tempor aliquip reprehenderit occaecat. Adipisicing ex sunt non esse deserunt eu ad ut elit ex minim tempor reprehenderit. Anim magna laborum adipisicing ullamco est exercitation esse tempor."
            }
          />
        </Marquee>
        <div className="flex flex-col justify-center px-4 md:px-10 mt-10 mb-10">
          <div className="text-[#222222]">From 1975 - Present</div>
          <div className="text-3xl text-black">About Me ! </div>
          <div className="mt-10">
            <About />
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 md:px-10 mt-10 mb-10">
          <div className="text-[#222222]">Irure non magna veniam qui officia occaecat fugiat ex incididunt voluptate deserunt.</div>
          <div className="text-3xl text-black">Lectures and Classes </div>
          <div className="mt-10">
            <Lectures />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-10 space-y-2 mb-20">
            <div className="flex">
              Crafted With  Respect using 
              <div className="space-x-2 flex ml-2 items-center justify-center">
                <FaReact color="sky-blue" /> <RiSupabaseFill color="green"/>
              </div>
            </div>
            <div>Navaneetha Krishnan K S</div>
            <div className="flex space-x-3">
              <button onClick={()=> window.open("https://github.com/navaneeenavan")}><FaGithub size={20} color={"black"}/></button>
              <button onClick={()=> window.open("https://www.linkedin.com/in/navaneetha-krishnan-k-s-5b7994224/")}><FaLinkedin size={20} /></button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

const Marque = ({ name, role, desc, pic }) => {
  return (
    <div className="flex flex-col h-96 w-96">
      <div className="h-10 w-20 rounded-full">
        <img src={pic} alt="pic" />
      </div>
      <div>{desc}</div>
      <div className="w-full justify-end flex flex-col mt-10">
        {name}
        <span className="text-[#222222]">{role}</span>
      </div>
    </div>
  );
};
