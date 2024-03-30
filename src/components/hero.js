import React from "react";
import Marquee from "react-fast-marquee";
function hero() {
  const handlecreate = () => {};
  return (
    <div className="mt-32 w-full flex flex-col  p-5 font-font1  items-center space-y-10">
      <div className="rounded-3xl  shadow-sm border border-gray-300 px-3 text-black text-sm">
        <span className="text-sm text-gray-500 ">Oct21,2023 </span>My New
        Research Paper was launched{" -> "}
      </div>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="text-4xl text-left text-[#222222] ">
            loremEu quis velit culpa ea consectetur duis.Mollit voluptate non
            amet id nulla in. Laboris aliqua magna amet sint laborum ad.
            Consequat nisi nostrud culpa occaecat sunt id. Veniam pariatur
            mollit veniam deserunt commodo {"->"}{" "}
          </div>
          <div className=" text-left text-xl  text-gray-500 mt-5 lg:mt-0">
            <span className="text-[#222222]">Miles to go Until I Sleep</span>{" "}
            This is <span className="text-black">Dr G R Karpagam </span> For
            you...{" "}
            <span className="text-[#222222]">Mile to go Until I Sleep</span>{" "}
            This is <span className="text-black">Dr G R Karpagam </span> For
            you...
            <span className="text-[#222222]">
              Mile to go Until I Sleep
            </span>{" "}
            This is <span className="text-black">Dr G R Karpagam </span> For
            you...
          </div>
        </div>

        <div className="w-full justify-start mt-5">
          <button
            className=" border border-gray-400 text-gray-500 items-center rounded-3xl w-24 px-2 text-nowrap"
            onclick={handlecreate}
          >
            Learn More
          </button>
        </div>
      </div>
      
     
    </div>
  );
}

export default hero;

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
