import React, { useEffect, useState } from "react";
import "./styles/tailwind.css";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/hero";

import About from "./About.js";

import OverlayButton from "./components/overlay";
import Card from "./components/Card.jsx";

import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Lectures from "./Lectures.js";

import { supaBase } from "./SupaBaseClient.js";
function App() {
  const [Rdata, setRdata] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data, error } = await supaBase
          .from("research")
          .select("*")
          .limit(10);
        if (error) {
          throw error;
        }

        if (data != null) {
          setLoading(true);
          setRdata(data);

          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div id="Home" className=" w-full flex flex-col overflow-hidden">
      <Navbar />
      <div className="px-4 md:px-10 space-y-5">
        <Hero className="mt-10" />

        <div id="Research" className="flex flex-col justify-center mt-32">
          <div className="text-[#222222]">Recent Works</div>
          <div className="text-3xl text-black">Research & Development</div>
        </div>

        <div className="space-y-20">
          {Rdata.map(
            (
              data // Renamed the parameter to avoid confusion with the variable name
            ) => (
              <Card
                id={data.id} // Ensure each Card has a unique key prop
                className="ml-10"
                title={data.title}
                Authors={data.Authors}
                Tags={data.Tags}
                description1={data.description1}
                description2={data.description2}
                likes={data.likes}
              />
            )
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center px-4 md:px-20 mt-5 xjlg:mt-20">
        <div className="text-[#222222]">Connections - Currency</div>
        <div className="text-3xl text-black">What People Say about me !</div>
      </div>
      <div className="w-full px-0 mt-5 lg:mt-10">
        <Marquee>
          <Marque
            name={"Suvan Sathyendira B"}
            role={"Final Year Student PSG-Tech"}
            desc={
              "I highly recommend Dr. G. R. Karpagam as an exceptional educator and mentor. I had the privilege of being her student at PSG College of Technology, where she demonstrated true dedication to teaching and mentorship. Dr. Karpagam covered subjects such as Data Structures, Database Management Systems, and Cryptography, overseeing projects in Innovation Practices. Her teaching approach is characterized by clarity, making intricate concepts more accessible."
            }
          />
          <Marque
            name={"Manya Sriram"}
            role={"Branham High School, San Jose, California"}
            desc={
              "Dr. Karpagam's passion for learning is apparent and she shares it with her students with great enthusiasm. Her dedication to fostering a love for knowledge has had an impact on me, sparking a deeper interest in cognitive science and computer science. As a result of our interactions, I have decided to pursue a major in computer science with a specialization in artificial intelligence in my undergraduate college, aspiring to build a career in this emerging field.."
            }
          />
          <Marque
            name={"Tamilselvan AS"}
            role={"Infrastructure Sofware Engineer III Cisco Systems"}
            desc={
              "Dr. Karpagam's commitment to excellence is evident in her teaching, partcularly in subjects like Data Structures, DBMS, and Cryptography and Security. Her approach goes beyond traditonal classroom instructon, as she actvely addresses students' doubts both within and outside regular hours, showcasing her dedicaton to nurturing students' growth."
            }
          />
          <Marque
            name={"Prednya Ramesh"}
            role={"PSG College of Technology"}
            desc={
              "Beyond the academic sphere, Dr. Karpagam has been an instrumental support in my pursuit of higher education. When approached for letters of recommendation, she responded promptly and generously, aiding my applications to numerous universities. Notably, her encouragement to apply to competitive institutions demonstrated her belief in my capabilities, encouraging me to seize opportunities without hesitation."
            }
          />
        </Marquee>
        <div
          id="About"
          className="flex flex-col justify-center px-4 md:px-10 mt-10 mb-10"
        >
          <div className="text-[#222222]">From 1975 - Present</div>
          <div className="text-3xl text-black">About Me ! </div>
          <div className="mt-10">
            <About />
          </div>
        </div>
        <div
          id="Lectures"
          className="flex flex-col justify-center px-4 md:px-10 mt-10 mb-10"
        >
          <div className="text-[#222222]"></div>
          <div className="text-3xl text-black">Lectures and Classes </div>
          <div className="mt-10">
            <Lectures />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-10 space-y-2 mb-20">
          <div className="flex">
            Tailored with
            <div className="space-x-2 flex ml-2 items-center justify-center">
              <FaReact color="sky-blue" /> <RiSupabaseFill color="green" />
            </div>
          </div>
          <div>Navaneetha Krishnan K S</div>
          <div className="flex space-x-3">
            <button
              onClick={() => window.open("https://github.com/navaneeenavan")}
            >
              <FaGithub size={20} color={"black"} />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/navaneetha-krishnan-k-s-5b7994224/"
                )
              }
            >
              <FaLinkedin size={20} />
            </button>
          </div>
        </div>
        <OverlayButton />
      </div>
    </div>
  );
}

export default App;

const Marque = ({ name, role, desc, pic }) => {
  return (
    <div className="flex flex-col h-96 w-96 ml-16 text-justify">
      {/* <div className="h-10 w-20 rounded-full">
        <img src="{pic}" alt="pic" />
      </div> */}
      <div>{desc}</div>
      <div className="w-full justify-end flex flex-col mt-10 ">
        <span className="font-bold">{name}</span>
        <span className="text-[#222222]">{role}</span>
      </div>
    </div>
  );
};
