import { useReducer, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
const inital_State = {
  dataStructure: true,
  blockChain: false,
  CryptoGraphy: false,
  status :  "dataStructures",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataStructures":
      return {
        ...state,
        dataStructure: true,
        blockChain: false,
        CryptoGraphy: false,
        status: "dataStructures",
      };
    case "blockChain":
      return {
        ...state,
        dataStructure: false,
        blockChain: true,
        CryptoGraphy: false,
        status: "blockChain",
      };
    case "CryptoGraphy":
      return {
        ...state,
        dataStructure: false,
        blockChain: false,
        CryptoGraphy: true,
        status: "CryptoGraphy",
      };

    default: {
      throw new Error("invalid Option");
    }
  }
};
function Lectures() {
  const [{ dataStructure, blockChain, CryptoGraphy, status }, dispatch] =
    useReducer(reducer, inital_State);

  return (
    <div className=" lg:px-36 flex flex-col">
      
      <div className="h-10 w-full border border-1 mt-10 rounded-full  items-center">
        <ul className="flex justify-between items-center hover:cursor-pointer">
          <li
            className={`w-full text-sm md:text-xl px-3 rounded-full items-center  text-center text-black h-10 flex justify-center ${
              dataStructure ? "bg-black bg-opacity-5 " : "text-black"
            } `}
            onClick={() => dispatch({ type: "dataStructures" })}
          >
            Data Structures
          </li>
          <li
            className={`w-full text-sm md:text-xl  px-3 rounded-full items-center  text-center text-black h-10 flex justify-center  ${
              blockChain ? "bg-black bg-opacity-5 " : ""
            } `}
            onClick={() => dispatch({ type: "blockChain" })}
          >
            Block Chain
          </li>
          <li
            className={`w-full text-sm md:text-xl px-3 rounded-full items-center  text-center text-black h-10  flex justify-center  ${
              CryptoGraphy ? "bg-black bg-opacity-5 " : ""
            } `}
            onClick={() => dispatch({ type: "CryptoGraphy" })}
          >
            CryptoGraphy
          </li>
        </ul>
      </div>
      <div className="h-full w-full border border-1 mt-3 rounded-2xl  items-center mb-10">
        {status === "dataStructures" && (
          <>
            <div className="px-10 mb-10">
              <div className="text-xl font-regular mt-2">
                Course Name : Data Structures and Alogorithms
              </div>
              <div className="space-y-10 mt-2">
                <div>
                  <h3 className="font-regular">Decription About the Course</h3>
                  <br></br>
                  <p>    
                  Data structures are methods of organizing and storing data efficiently, such as arrays, linked lists, stacks, queues, trees, and graphs. Algorithms are step-by-step procedures for solving computational problems, including sorting, searching, graph traversal, dynamic programming, recursion, and divide-and-conquer techniques. Understanding these concepts is essential for efficient coding and problem-solving in computer science.
                  </p>
                </div>
              </div>

              <div className="w-full h-auto lg:space-x-5 space-y-3 flex flex-col lg:flex-row justify-between mt-7">
                <div className="bg-white h-auto w-full shadow-lg rounded-xl flex justify-between p-2">
                  <div className="font-regular ml-10">
                  Unlocking Efficiency: Harnessing Data Structures and Algorithms for Optimal Performance.
                  </div>
                  <div className=" h-full flex flex-col justify-end ">
                    <button className="h-6 w-7 rounded-full border item-center flex justify-center">
                      <MdArrowOutward
                        classNam="item-center flex justify-center"
                        size={20}
                      />
                    </button>
                  </div>
                </div>
                <div className="bg-white h-auto w-full shadow-lg rounded-xl flex justify-between p-2">
                  <div className="font-regular ml-10">
                  Building Tomorrow's Solutions Today: Empowering Innovation Through Data Structures and Algorithms.
                  </div>
                  <div className=" h-full flex flex-col justify-end ">
                    <button className="h-6 w-7 rounded-full border item-center flex justify-center">
                      <MdArrowOutward
                        classNam="item-center flex justify-center"
                        size={20}
                      />
                    </button>
                  </div>
                </div>
                <div className="bg-white h-auto w-full shadow-lg rounded-xl flex justify-between p-2">
                  <div className="font-regular ml-10">
                  From Complexity to Clarity: Navigating Digital Landscapes with Data Structures and Algorithms.
                  </div>
                  <div className=" h-full flex flex-col justify-end ">
                    <button className="h-6 w-7 rounded-full border item-center flex justify-center">
                      <MdArrowOutward
                        classNam="item-center flex justify-center"
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {status === "blockChain" && (
          <>
            <RefCard />
          </>
        )}
        {status === "CryptoGraphy" && (
          <>
            <RefCard />
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
  l1name,
  l1,
  l2name,
  l2,
  l3name,
  l3,
}) => {
  const [faqOpenIdx, setFaqOpenIdx] = useState(-1);
  return (
    <div className="px-10 mb-10">
      <div className="text-xl font-regular mt-2">Course Name : {name}</div>
      <div className="space-y-3 mt-2">
        <div>
          <h3 className="font-regular">Decription About the Course</h3>
          <br/>
          <p>Blockchain technology is a decentralized and distributed ledger system that securely records and verifies transactions across a network of computers. It operates on the principle of consensus, where multiple nodes in the network agree on the validity of transactions before they are added to the blockchain.</p>
        </div>
        <div>
          
          <br/>
          <p>The core components of blockchain include blocks, cryptographic hashing, consensus algorithms, and smart contracts. Each block contains a batch of transactions, a timestamp, and a cryptographic hash of the previous block. This linking of blocks through hashes creates a chain, ensuring the integrity and immutability of the data. Any attempt to alter data in a block would require changing all subsequent blocks, making it computationally infeasible and providing a high level of security against tampering.</p>
        </div>
        <div>

          <br/>
          <p>Smart contracts, which are self-executing contracts with predefined rules, automate and enforce agreements on the blockchain. They enable decentralized applications (dApps) to execute transactions and enforce rules without the need for intermediaries, reducing costs and increasing efficiency.</p>
        </div>
      </div>

      <div className="w-full h-auto lg:space-x-5 flex flex-col lg:flex-row lg:justify-between justify-center space-y-5 lg:space-y-0 mt-7">
        <div className="bg-white h-auto w-full shadow-lg rounded-xl flex justify-between p-2 ">
          <div className="font-regular ml-10">{l1name}</div>
          <div className=" h-full flex flex-col justify-end ">
            <button className="h-6 w-7 rounded-full border item-center flex justify-center">
              <MdArrowOutward
                classNam="item-center flex justify-center"
                size={20}
                onClick={() => window.open(l1)}
              />
            </button>
          </div>
        </div>
        <div className="bg-white h-auto w-full shadow-lg rounded-xl flex justify-between p-2">
          <div className="font-regular ml-10">{l2name}</div>
          <div className=" h-full flex flex-col justify-end ">
            <button className="h-6 w-7 rounded-full border item-center flex justify-center">
              <MdArrowOutward
                classNam="item-center flex justify-center"
                size={20}
                onClick={() => window.open(l2)}
              />
            </button>
          </div>
        </div>
        <div className="bg-white h-auto w-full shadow-lg rounded-xl flex justify-between p-2">
          <div className="font-regular ml-10">{l3name}</div>
          <div className=" h-full flex flex-col justify-end ">
            <button className="h-6 w-7 rounded-full border item-center flex justify-center">
              <MdArrowOutward
                classNam="item-center flex justify-center"
                size={20}
                onClick={() => window.open(l3)}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
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
      </div>
      <div className="flex space-x-3">
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
