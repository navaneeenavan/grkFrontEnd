import React, { useState } from 'react';
import "./demo.css";

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleNavbar = () => {
          setIsOpen(!isOpen);
        };

    return(
        <div>
        <div className="navbar fixed bg-white opacity-[0.9] w-[100%] z-10 pt-[42px] pb-[5px] font-font1">
        
        <div className="nav md:flex gap-[42px]  text-[18px] font-font1 pl-[42px] pr-[42px] min-h-[15px] align-middle">
                <span>GRK</span>
                <div className="md:flex gap-[3px] pl-[11px] pr-[11px] font-200 sm:hidden xsm:hidden">
                <a href="#intro"><span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">Intro</span></a>
                <a href="#research"><span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">Research</span></a>
                <a href="#activity"><span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">Activity</span></a>
                <a href="#about"><span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">About</span></a>
                </div>
        </div>

        <nav className={`navbar md:hidden sm:block xsm:block ${isOpen ? 'open' : ''}`}>
        <div className="navbar-toggle" onClick={toggleNavbar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <ul className="navbar-menu">
            <li><a href="#intro" onClick={toggleNavbar}><span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">Intro</span></a></li>
            <li><a href="#research" onClick={toggleNavbar}><span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">Research</span></a></li>
            <li><a href="#activity" onClick={toggleNavbar}><span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">Activity</span></a></li>
            <li><a href="#about" onClick={toggleNavbar}><span className="gap-[3px] pl-[11px] pr-[11px] rounded-[15px] hover:bg-[#ebeaea] hover:cursor-pointer">About</span></a></li>
        </ul>
        </nav>


        </div>
        </div>
    )
}

export default Navbar