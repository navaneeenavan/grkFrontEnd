import { AiOutlineDingtalk } from "react-icons/ai";

function NavBar() {
    return (
        <div className="navbar fixed bg-white bg-opacity-80 backdrop-blur-sm w-full z-10 h-16 flex  justify-between px-5 font-font1 items-center ">
         
           <AiOutlineDingtalk size={55} className="text-gray-600"/>
           <div className="lg:flex ml-5 "> 
            <ul className="space-x-5 text-black flex flex-row text-xs  font-regular lg:text-lg" >
                <li className="hover:cursor-pointer"
                onClick={(e) => {
                    const element = document.getElementById("Home");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}
                  >
                    Home
                </li> 
                <li className="hover:cursor-pointer"
                 onClick={(e) => {
                    const element = document.getElementById("Research");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Research
                </li>
                <li className="hover:cursor-pointer"
                 onClick={(e) => {
                    const element = document.getElementById("About");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}>
                    About
                </li>
                <li className="hover:cursor-pointer"
                 onClick={(e) => {
                    const element = document.getElementById("Lectures");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Lectures
                </li>
            </ul>
           </div>


        </div>
    )
}

export default NavBar
