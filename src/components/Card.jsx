import { useEffect, useState } from "react";
import { useRef } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { supaBase } from "../SupaBaseClient";


function Card({title,Authors,description1,description2,likes,Tags, id}) {
  const handleLike = ()=>
  {
    setLike(!like)
    async function editCard() {
      try {
        const { data, error } = await supaBase
          .from("research")
          .update({
            likes: like ? likes + 1 : likes - 1,
          })
          .eq("id", id);
          window.location.reload()
        if (error)
        {
          throw error;
        } 
        else{
          console.log("Updated Successfully")
        }
  
      } catch (error) {
        alert(error.message);
      }
    }
    editCard();
  }
  
  const [like, setLike] = useState(true);
  return (
    <>
    <div className="flex flex-col h-full w-full bg-white shadow-lg rounded-lg px-5 py-2">
      <div className="text-black text-xl lg:text-3xl ">
      {title}
      </div>
      <div className="text-gray text-xs lg:text-md mt-1">
      {Authors}
      </div>
      <div className="w-full  item-start lg:space-y-0 flex flex-row space-x-3 mt-3 text-black">
        {Tags?.map((val)=>
        (
            <div className="flex text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center" >
            {val.title}
          </div>
         ) )
      }
      </div>
      <div className="mt-2">
        <div>
       {description1}
        </div>
        <br />
        <div>
        {description2}
        </div>
       
      </div>

      <button className={`w-full flex justify-end items-center text-sm `} size={80}>
        <IoIosHeart
        color={`${like ? "gray" : "red"}`}
        className={`${like ? "" : "bg-red"} mr-1`}
        onClick={handleLike}
        />
        {likes}
      </button>

    </div>
    </>
  );
}

export default Card;
