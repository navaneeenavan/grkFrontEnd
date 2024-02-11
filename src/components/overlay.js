import React, { useState } from "react";

const OverlayButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="xsm:fixed md:bottom-6 md:right-6 sm:bottom-8 sm:right-8 xsm:bottom-4 xsm:right-4">
      <button
        className="bg-[#636359] grid place-content-center text-white w-[70px] h-[70px] px-4 py-2 rounded-[50%] shadow-md transition duration-300 ease-in-out"
        onClick={toggleOverlay}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            fill-rule="nonzero"
            d="M14.1972579,8.17124146e-14 C17.3979916,0.00978563072 19.990286,2.62120148 20,5.84554455 L20,5.84554455 L20,7.30693069 L19.99354,7.4036631 C19.9466817,7.75161611 19.6506049,8.01980198 19.2923485,8.01980198 L19.2923485,8.01980198 L19.2835029,8.0019802 L19.1721336,7.99309967 C19.0257158,7.96959451 18.889286,7.90013647 18.7831177,7.79318503 C18.6504073,7.65949573 18.5758514,7.47817413 18.5758514,7.28910891 L18.5758514,7.28910891 L18.5758514,5.84554455 C18.5518871,3.41954659 16.6054921,1.45879454 14.1972579,1.43465347 L14.1972579,1.43465347 L5.80274215,1.43465347 C3.39450789,1.45879454 1.44811291,3.41954659 1.42414861,5.84554455 L1.42414861,5.84554455 L1.42414861,12.1544554 C1.44811291,14.5804534 3.39450789,16.5412055 5.80274215,16.5653465 L5.80274215,16.5653465 L14.1972579,16.5653465 C16.6054921,16.5412055 18.5518871,14.5804534 18.5758514,12.1544554 C18.6163388,11.7890822 18.922975,11.5127474 19.2879257,11.5127474 C19.6528764,11.5127474 19.9595126,11.7890822 20,12.1544554 C19.990286,15.3787985 17.3979916,17.9902144 14.1972579,18 L14.1972579,18 L5.80274215,18 C2.599996,17.995093 0.00487110525,15.3808258 -1.42108547e-14,12.1544554 L-1.42108547e-14,12.1544554 L-1.42108547e-14,5.84554455 C-1.42108547e-14,2.61713944 2.59797615,8.17124146e-14 5.80274215,8.17124146e-14 L5.80274215,8.17124146e-14 Z M4.29443312,5.38692655 C4.48070099,5.36682207 4.6671823,5.42289927 4.81203008,5.54257426 L4.81203008,5.54257426 L8.96948253,8.85742574 C9.48880627,9.2678976 10.2192875,9.2678976 10.7386112,8.85742574 L10.7386112,8.85742574 L14.8518355,5.54257426 L14.8606811,5.54257426 L14.9473987,5.48291804 C15.2462388,5.30808809 15.6344967,5.37260085 15.8602388,5.64950495 C15.9785304,5.79800076 16.0329385,5.98799536 16.0113373,6.17714498 C15.9897361,6.36629461 15.8939207,6.53887938 15.7452455,6.65643564 L15.7452455,6.65643564 L11.6320212,9.98019802 C10.5861526,10.8280382 9.09540423,10.8280382 8.0495356,9.98019802 L8.0495356,9.98019802 L3.92746572,6.65643564 L3.8513546,6.58355583 C3.61891283,6.32594359 3.59998262,5.92999594 3.821318,5.64950495 C3.93770999,5.50163353 4.10816526,5.40703103 4.29443312,5.38692655 Z"
            transform="translate(2 3)"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 bg-white border border-gray-300 rounded-[30px] shadow-md transition duration-300 ease-in-out mb-5"
          style={{ transformOrigin: "top", transform: "scaleY(1)" }}
        >
          <ul className="list-none p-4 w-[300px]">
            <li className=" py-2 px-4" onClick={toggleOverlay}>
              <div>
                <h3 className="font-bold">Lets chat..!</h3>
                <span>We normally reply within 12 hours.</span>
              </div>
            </li>
            <hr></hr>
            <li
              className="hover:bg-gray-100 py-2 px-4 cursor-pointer"
              onClick={toggleOverlay}
            >
              Send a Message
              <span className=" float-right font-bold">&rarr;</span>
            </li>
            <li
              className="hover:bg-gray-100 py-2 px-4 cursor-pointer"
              onClick={toggleOverlay}
            >
              Book a Call<span className=" float-right font-bold">&rarr;</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OverlayButton;
