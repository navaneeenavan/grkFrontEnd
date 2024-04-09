import { AiOutlinePlus } from "react-icons/ai";

const FAQItem = ({ question, answer, isOpened = false, onClick }) => {
    return (
      <div className="w-full">
        <button className="p-4 lg:px-8 border-t border-gray-300 text-lg flex w-full justify-between items-center font-semibold" onClick={onClick}>
          <div className={`text-left text-base lg:text-lg py-2 ${isOpened ? "text-blue-700" : "text-black"} font-normal`}>
            {question}
          </div>
          <div>
            <AiOutlinePlus className={`text-2xl ${isOpened ? "rotate-45" : "rotate-0"} transition-all`} />
          </div>
        </button>
        <div
          className={`${isOpened ? "h-fit px-4 lg:px-8 py-4 " : "h-0 overflow-y-hidden"
            } transition-all ease-in-out text-sm`}
        >
          {answer}
        </div>
      </div>
    );
  };
  
  const FAQContent = [
    {
      question: "What is Kriya?",
      answer:
        "Kriya is the largest technical symposium conducted by PSG College of Technology. The Students Union is ecstatic to spread the aura of knowledge and healthy competition through Kriya by carrying out 35+ Events, 12+ Workshops and 4 Technical Paper Presentations that encompasses an array of engineering streams, Kriya brings together the savviest brains on the planet, from proficient scholars to dexterous techno-wizards, to who’s who of the industrial domain, and also eminent leaders from different walks of life, to enrich and aggrandize the minds of participating students.",
    },
    {
      question: "Who can participate in Kriya?",
      answer:
        "The contest is open for all Undergraduate and Postgraduate students from AICTE approved Technical Higher Educational Institutions of India.",
    },
    {
      question: "What are the benefits of taking part in Kriya ?",
      answer:
        "Kriya is a national level technical fest where participants get an opportunity to compete in various events with students from across the country and win attractive cash prizes. Kriya is a also platform for participants to stay at the forefront of technical advancements through its industry-led workshops and technical paper presentations. ",
    },
    {
      question: "What is the fee to participate in Kriya?",
      answer:
        "The general registration fee is Rs. 150 for PSG Tech students and Rs. 200 for students from other colleges. No separate registration fee is required to participate in each event. However, participants have to pay separately to participate in workshops and technical paper presentations.",
    },
    {
      question: "Where can I stay if I want to participate in Kriya?",
      answer:
        "Accommodation is available on a first come first serve basis. The cost of on-campus accommodation be Rs. 150 per night. Food is available at the cost of Rs. 50 per meal.",
    },
    {
      question:
        "What are your office hours and preferred methods of communication for students seeking academic support or guidance?",
      answer:
        "Yes, we have to pay separately for each workshop. The general registration fee doesn’t cover workshop participation.",
    },
  ];
function Accordian() {
    return (
        <div>
           
        </div>
    )
}

export default Accordian
  