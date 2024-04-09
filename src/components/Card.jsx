import { useState } from "react";
import { useRef } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
function Card() {
  const [like, setLike] = useState(false);
  return (
    <div className="flex flex-col h-full w-full bg-white shadow-lg rounded-lg px-5 py-2">
      <div className="text-black text-xl lg:text-3xl ">
        Cloud Sourcing (this is a title)
      </div>
      <div className="text-gray text-xs lg:text-md mt-1">
        This is the Sub-Caption for the title
      </div>
      <div className="flex flex-col  lg:flex-row space-x-3 mt-3 text-black">
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Cloud Computing
        </div>
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Open Source
        </div>
        <div className="flex text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Block Chain
        </div>
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Research
        </div>
      </div>
      <div className="mt-2">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          pariatur dolores similique voluptatum beatae incidunt perspiciatis
          provident odit ad, ab quia excepturi rem corporis sit sed eveniet
          nihil! Nam, iste?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          pariatur dolores similique voluptatum beatae incidunt perspiciatis
          provident odit ad, ab quia excepturi rem corporis sit sed eveniet
          nihil! Nam, iste?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          pariatur dolores similique voluptatum beatae incidunt perspiciatis
          provident odit ad, ab quia excepturi rem corporis sit sed eveniet
          nihil! Nam, iste?
        </div>
       
      </div>

      <button className={`w-full flex justify-end items-center text-sm `} size={80}>
        <IoIosHeart
        color={`${like ? "gray" : "red"}`}
        className={`${like ? "" : "bg-red"} mr-1`}
          onClick={() => setLike(!like) }
        />
        (22)
      </button>

    </div>
  );
}

export default Card;
