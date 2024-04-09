import React, { useState } from "react";
import "./demo.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
     <div className="navbar fixed bg-white bg-opacity-80 backdrop-blur-sm w-full z-10 h-20 flex font-font1 items-center">

        <div className="nav w-full md:flex gap-[42px]  text-[18px] font-font1 pl-[42px] pr-[42px] min-h-[15px] align-middle justify-between">
            <div >
            
          <div className="md:flex gap-[3px] pl-[11px] pr-[11px] font-200 sm:hidden xsm:hidden">
          <span>GRK</span>
            <a href="#intro">
              <span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer ">
                Intro
              </span>
            </a>
            <a href="#research">
              <span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">
                Research
              </span>
            </a>
            <a href="#activity">
              <span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">
                Activity
              </span>
            </a>
            <a href="#about">
              <span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">
                About
              </span>
            </a>

            </div>
          
          </div>
          <div>
            contact 
          </div>
            

        </div>

        <nav
          className={`navbar md:hidden sm:block xsm:block ${
            isOpen ? "open" : ""
          }`}
        >
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className="navbar-menu">
            <li>
              <a href="#intro" onClick={toggleNavbar}>
                <span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">
                  Intro
                </span>
              </a>
            </li>
            <li>
              <a href="#research" onClick={toggleNavbar}>
                <span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">
                  Research
                </span>
              </a>
            </li>
            <li>
              <a href="#activity" onClick={toggleNavbar}>
                <span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">
                  Activity
                </span>
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleNavbar}>
                <span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">
                  About
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
