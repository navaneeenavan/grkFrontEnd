import { useEffect, useReducer, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import { supaBase } from "./SupaBaseClient";

const FetchVal = async () => {
  try {
    const { data, error } = await supaBase.from("courses").select("*").limit(10);
    if (error) {
      throw error;
    }
  
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};



const inital_State = {
  dataStructure: true,
  blockChain: false,
  CryptoGraphy: false,
  status :  "",
  datas : []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "dataStructures":
      return {
        ...state,
        dataStructure: true,
        blockChain: false,
        CryptoGraphy: false,
        status: "dataStructures",
        datas : action.payload
      };
    case "blockChain":
      return {
        ...state,
        dataStructure: false,
        blockChain: true,
        CryptoGraphy: false,
        status: "blockChain",
        datas : action.payload
      };
    case "CryptoGraphy":
      return {
        ...state,
        dataStructure: false,
        blockChain: false,
        CryptoGraphy: true,
        status: "CryptoGraphy",
        datas : action.payload
      };

    default: {
      
      throw new Error("invalid Option");
    }
  }
};
function Lectures() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await FetchVal();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const [{ dataStructure, blockChain, CryptoGraphy, status, datas}, dispatch] =
    useReducer(reducer, inital_State);
    const [loading, setLoading] = useState(false);
  return (
    <div className=" lg:px-36 flex flex-col">
      
      <div className="h-10 w-full border border-1 mt-10 rounded-full  items-center">
        <ul className="flex justify-between items-center hover:cursor-pointer">
          <li
            className={`w-full text-sm md:text-xl px-3 rounded-full items-center  text-center text-black h-10 flex justify-center ${
              dataStructure ? "bg-black bg-opacity-5 " : "text-black"
            } `}
            onClick={() => dispatch({ type: "dataStructures", payload : data[0] })}
          >
            Block Chain 
          </li>
          <li
            className={`w-full text-sm md:text-xl  px-3 rounded-full items-center  text-center text-black h-10 flex justify-center  ${
              blockChain ? "bg-black bg-opacity-5 " : ""
            } `}
            onClick={() => dispatch({ type: "blockChain", payload : data[1] })}
          >
            Data Structures
          </li>
          <li
            className={`w-full text-sm md:text-xl px-3 rounded-full items-center  text-center text-black h-10  flex justify-center  ${
              CryptoGraphy ? "bg-black bg-opacity-5 " : ""
            } `}
            onClick={() => dispatch({ type: "CryptoGraphy", payload : data[2]})}
          >
            CryptoGraphy
          </li>
        </ul>
      </div>
      <div className={`transition-all ease-in delay-200 h-full w-full ${status && "border border-1"} mt-3 rounded-2xl  items-center mb-10`}>
        {status === "dataStructures" && (
          <>
             <RefCard name={datas?.name} desc1={datas?.desc1} desc2={datas?.desc2} desc3={datas?.desc3} links={datas?.Link}/>
          </>
        )}
        {status === "blockChain" && (
          <>
             <RefCard name={datas?.name} desc1={datas?.desc1} desc2={datas?.desc2} desc3={datas?.desc3} links={datas?.Link}/>
          </>
        )}
        {status === "CryptoGraphy" && (
          <>
            <RefCard name={datas?.name} desc1={datas?.desc1} desc2={datas?.desc2} desc3={datas?.desc3} links={datas?.Link}/>
          </>
        )}
      </div>
    </div>
  );
}

const RefCard = ({
  name,
  desc1,
  desc2,
  desc3,
  links
}) => {
  const [faqOpenIdx, setFaqOpenIdx] = useState(-1);
  return (
    <div className="px-10 mb-10">
      <div className="text-xl font-regular mt-2">Course Name : {name}</div>
      <div className="space-y-3 mt-2">
        <div>
          <h3 className="font-regular">Description About the Course</h3>
          <br/>
          <p>{desc1}</p>
        </div>
        <div>
          
          <br/>
          <p>{desc2}</p>
        </div>
        <div>

          <br/>
          <p>{desc3}</p>
        </div>
      </div>
      {links?.map((link)=>(
        <div className="w-full h-auto lg:space-x-5 flex flex-col lg:flex-row lg:justify-between justify-center space-y-5 lg:space-y-0 mt-7">
        <div className="bg-white h-auto w-full shadow-lg rounded-xl flex justify-between p-2 ">
          <div className="font-regular ml-10">{link.name}</div>
          <div className=" h-full flex flex-col justify-end ">
            <button className="h-6 w-7 rounded-full border item-center flex justify-center">
              <MdArrowOutward
                classNam="item-center flex justify-center"
                size={20}
                onClick={() => window.open(link.link)}
              />
            </button>
          </div>
        </div>
        
      </div>
      ))}
      
      {/* <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center w-full lg:w-[60vw] mt-16">
          {FAQContent.map((item, index) => (
            <FAQItem
              question={item.question}
              answer={item.answer}
              isOpened={index === faqOpenIdx}
              onClick={() => {
                index === faqOpenIdx ? setFaqOpenIdx(-1) : setFaqOpenIdx(index);
              }}
            />
          ))}
        </div>
      </div> */}
      <div className="flex space-x-3 mt-10">
        <input
          className="w-full h-12 pl-3 text-left shadow-lg mt-3 rounded-xl text-sm lg:text-xl"
          placeholder="Enter Your Question (Doubt) !"
        ></input>
        <button className="w-24 h-12 border rounded-xl shadow-lg mt-3 bg-gray-200 ">
          Post
        </button>
      </div>
    </div>
  );
};
const FAQItem = ({ question, answer, isOpened = false, onClick }) => {
  return (
    <div className="w-full">
      <button
        className="p-4 lg:px-8 border-t border-gray-300 text-lg flex w-full justify-between items-center font-semibold"
        onClick={onClick}
      >
        <div
          className={`text-left text-base lg:text-lg py-2 ${
            isOpened ? "text-blue-700" : "text-black"
          } font-normal`}
        >
          {question}
        </div>
        <div>
          <AiOutlinePlus
            className={`text-2xl ${
              isOpened ? "rotate-45" : "rotate-0"
            } transition-all`}
          />
        </div>
      </button>
      <div
        className={`${
          isOpened ? "h-fit px-4 lg:px-8 py-4 " : "h-0 overflow-y-hidden"
        } transition-all ease-in-out text-sm`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQContent = [
  {
    question: "What courses do you teach in Computer Science and Engineering?",
    answer:
      "Kriya is the largest technical symposium conducted by PSG College of Technology. The Students Union is ecstatic to spread the aura of knowledge and healthy competition through Kriya by carrying out 35+ Events, 12+ Workshops and 4 Technical Paper Presentations that encompasses an array of engineering streams, Kriya brings together the savviest brains on the planet, from proficient scholars to dexterous techno-wizards, to who’s who of the industrial domain, and also eminent leaders from different walks of life, to enrich and aggrandize the minds of participating students.",
  },
  {
    question: "How can students schedule appointments or office hours with you?",
    answer:
      "The contest is open for all Undergraduate and Postgraduate students from AICTE approved Technical Higher Educational Institutions of India.",
  },
  {
    question: "Are there any research projects or areas of focus you are currently working on?",
    answer:
      "Kriya is a national level technical fest where participants get an opportunity to compete in various events with students from across the country and win attractive cash prizes. Kriya is a also platform for participants to stay at the forefront of technical advancements through its industry-led workshops and technical paper presentations. ",
  },
  {
    question: "What resources or tools do you recommend for students interested in CSE?",
    answer:
      "The general registration fee is Rs. 150 for PSG Tech students and Rs. 200 for students from other colleges. No separate registration fee is required to participate in each event. However, participants have to pay separately to participate in workshops and technical paper presentations.",
  },
  {
    question: "Can you provide guidance on internships, job placements, or career opportunities in the field of Computer Science and Engineering?",
    answer:
      "Accommodation is available on a first come first serve basis. The cost of on-campus accommodation be Rs. 150 per night. Food is available at the cost of Rs. 50 per meal.",
  },
  {
    question: "What are your office hours and preferred methods of communication for students seeking academic support or guidance?",
    answer:
      "Yes, we have to pay separately for each workshop. The general registration fee doesn’t cover workshop participation.",
  },
];

export default Lectures;
