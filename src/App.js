import React from "react";
import "./styles/tailwind.css";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/hero";
import Research from "./components/research";
import Activity from "./components/activity";
import About from "./components/about";
import Footer from "./components/footer";
import OverlayButton from "./components/overlay";
import Card from "./components/Card.jsx";
import RegistrationForm from "./post.js";
function App() {
  return (
    <div className=" w-full  mx-auto flex flex-col overflow-hidden">
      <Navbar/>
      <Hero className= "mt-10" />
      <Card className="ml-10"/>
      {/* <RegistrationForm/> */}
    </div>

    
  );
}

export default App;
