import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { supaBase } from "../SupaBaseClient";
function Hero() {
  const [Rdata, setRdata] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data, error } = await supaBase
          .from("General")
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
  
  const mainLine = Rdata[0]?.MainLine;
  const notification = Rdata[0]?.Notification;

  return (
    <div className="mt-32 w-full flex flex-col  p-5 font-font1  items-center space-y-10">
      <div className="w-auto rounded-3xl  shadow-sm border border-gray-300 px-3 py-3 text-black text-sm">
        <span className="text-sm text-gray-500 ">
          {notification}
          {" -> "}{" "}
        </span>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="text-3xl lg:text-4xl max-w-[1000px] text-left text-[#222222] ">
            {mainLine}
            {"->"}{" "}
          </div>
          <div className=" text-left text-xl  text-gray-500 mt-5 lg:mt-0">
            <span className="text-[#222222]">Mile to go Until I Sleep</span>{" "}
            This is <span className="text-black">Dr G R Karpagam </span> For
            you...
          </div>
        </div>

        <div className="w-full justify-start mt-5">
          <button
            className=" border border-gray-400 text-gray-500 items-center rounded-3xl w-24 px-2 text-nowrap"
          >
            <a href="https://psgtech.ac.in">Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

const Sponsors = ({ imgurl, title }) => {
  return (
    <div className="flex flex-col gap-y-2 w-48 lg:w-64">
      <div className="bg-opacity-50 bg-gray-200 flex justify-center items-center p-4 lg:p-6 h-28 lg:w-64 lg:h-36 rounded-2xl">
        <div
          style={{
            background: `url("${imgurl}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className={`w-full h-full`}
        ></div>
      </div>
      <p className="uppercase text-base lg:text-lg text-[#181818] tracking-wider text-center">
        {title}
      </p>
    </div>
  );
};
