


function hero() {
  const handlecreate = ()=>
  {

  }
  return (
    <div className="mt-32 w-full flex flex-col p-5 font-font1  items-center space-y-10">
      <div className="rounded-3xl  shadow-sm border border-gray-300 px-3 text-black text-sm">
        <span className="text-sm text-gray-500 ">Oct21,2023 </span>My New
        Research Paper was launched{" -> "}
      </div>
      <div className="text-4xl text-left text-[#222222] ">Some Important text from Mam {"->"} </div>
      <div className=" text-left text-xl  text-gray-500">
        <span className="text-[#222222]">Miles to go Until I Sleep</span> This is{" "}
        {"   "}
        {"   "}
        <span className="text-black">Dr G R Karpagam </span> For you...{" "}
        <span className="text-[#222222]">Mile to go Until I Sleep</span> This is{" "}
        {"   "}
        {"   "}
        <span className="text-black">Dr G R Karpagam </span> For you...
        <span className="text-[#222222]">Mile to go Until I Sleep</span> This is{" "}
        {"   "}
        {"   "}
        <span className="text-black">Dr G R Karpagam </span> For you...
      </div>
      <div className="w-full justify-start">
      <button className=" border border-gray-400 text-gray-500 items-center rounded-3xl w-24 px-2 text-nowrap" onclick={handlecreate}>Learn More</button>

      </div>
    </div>
  );
}

export default hero;
