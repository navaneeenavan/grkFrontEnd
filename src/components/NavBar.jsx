import { AiOutlineDingtalk } from "react-icons/ai";

function NavBar() {
    return (
        <div className="navbar fixed bg-white bg-opacity-80 backdrop-blur-sm w-full z-10 h-16 flex  justify-between px-5 font-font1 items-center ">
            <AiOutlineDingtalk size={60} className="text-gray-600"/>
            <button className="bg-[#222222] text-white items-center rounded-3xl w-24 p-1">Contact</button>
        </div>
    )
}

export default NavBar
