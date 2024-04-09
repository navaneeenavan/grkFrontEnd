import { useState } from "react";
import { useRef } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
function Card() {
  const [like, setLike] = useState(false);
  return (
    <>
    <div className="flex flex-col h-full w-full bg-white shadow-lg rounded-lg px-5 py-2">
      <div className="text-black text-xl lg:text-3xl ">
      Local Binary Pattern-Based Criminal Identification System
      </div>
      <div className="text-gray text-xs lg:text-md mt-1">
      Srinivasan D.S.;Ravichandran S.;Indrani T.S.;Karpagam G.R.
      </div>
      <div className="flex flex-col  lg:flex-row space-x-3 mt-3 text-black">
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Deep Learning
        </div>
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Research
        </div>
      </div>
      <div className="mt-2">
        <div>
        In this chapter, we present an IoT and Machine Learning–based criminal identification system, using face recognition and text summarization, which takes images from surveillance cameras as input. The application makes use of a Local Binary Pattern (LBP) algorithm for face recognition and a TextRank algorithm for criminal record summarization.
        </div>
        <br />
        <div>
        This system can be used by any institution or organization that attempts to identify lawbreakers who ardently wait for opportunities to commit felonies in crowded areas such as malls and airports. The system is made to learn various features from a database of criminal facial images, which typically contains images pertaining to different views of a single criminal.
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

    <div className="flex flex-col h-full w-full bg-white shadow-lg rounded-lg px-5 py-2">
      <div className="text-black text-xl lg:text-3xl ">
      Security and privacy in federated learning- based internet of medical things
      </div>
      <div className="text-gray text-xs lg:text-md mt-1">
      Swathi J.;Karpagam G.R.;Singh R.
      </div>
      <div className="flex flex-col  lg:flex-row space-x-3 mt-3 text-black">
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Deep Learning
        </div>
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Research
        </div>
      </div>
      <div className="mt-2">
        <div>
        This chapter discusses a FL-based healthcare system that is secure and protects user privacy. The framework is proposed using the Paillier cryptosystem. It uses additive homomorphism for the aggregation and training of data in the global data centers. Initially, the model collects data specific to each organization and trains the model locally. On a periodic basis, the data available in each data center is encrypted and sent to the global data center. At the global data center, the data from the wearable resources and the medical data centers are aggregated using unique identifiers. A public key cryptography with additive homomorphism is applied to ensure secure data aggregation and training in the global data center. A trusted party is involved to generate private and public keys for the local and global data centers.
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

    <div className="flex flex-col h-full w-full bg-white shadow-lg rounded-lg px-5 py-2">
      <div className="text-black text-xl lg:text-3xl ">
      GPU Accelerated QoSE based Web Service Selection Framework
      </div>
      <div className="text-gray text-xs lg:text-md mt-1">
      Swetha N.G.;Karpagam G.R.
      </div>
      <div className="flex flex-col  lg:flex-row space-x-3 mt-3 text-black">
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          GPU
        </div>
        <div className="flex  text-xs h-5 w-max rounded-3xl items-center  p-2 border border-zinc-300 justify-center">
          Research
        </div>
      </div>
      <div className="mt-2">
        <div>
        This work focuses on Multi Criteria Decision Making methods to solve the real world Web Service Selection issue. The current research trend in the area of applying Multi Criteria Decision Making for Web Service Selection is found to be in discordance with the real world data. Hence, this work aims analyzing the prevalent real world issues related to Web Service Selection and proposes a feasible solution to solve it. An original framework that incorporates the power of QoS and QoE values with GPU acceleration for selection of web services is proposed and it is found that the proposed framework is highly time efficient when compared with the literature works. Also, the correlation of the ranking scheme given by the proposed framework with the original ranking is higher which is a clear indication that the proposed framework is more suitable for real time Web Service Selection process.
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

    
    </>
  );
}

export default Card;
