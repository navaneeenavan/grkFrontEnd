import { AiOutlineDingtalk } from "react-icons/ai";

function NavBar() {
    return (
        <div className="navbar fixed bg-white bg-opacity-80 backdrop-blur-sm w-full z-10 h-16 flex  justify-between px-5 font-font1 items-center ">
           <div className="flex items-center">
           <AiOutlineDingtalk size={60} className="text-gray-600"/>
           <div>DR GRK</div>
           
           <div className="lg:flex ml-5 "> 
            <ul className="space-x-5 text-black flex flex-row text-xs lg:text-lg" >
                <li>
                    Home
                </li> 
                <li>
                    Research
                </li>
                <li>
                    About
                </li>
                <li>
                    Lectures
                </li>
            </ul>
           </div>
           </div>
            <button className="bg-[#222222] text-white items-center rounded-3xl w-24 p-1 hidden lg:grid">Contact</button>
        </div>
    )
}

export default NavBar
