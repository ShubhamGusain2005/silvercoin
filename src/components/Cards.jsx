import React from "react";
import Single from "../assets/creditCard.png";
import Double from "../assets/creditCard.png";
import Triple from "../assets/creditCard.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            CS Reenkey Gupta
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Never thought of using my money such a way. thanks to silvercoin
              they made me use my money right way.
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Ramishu digimark solution private ltd
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Excellent support from their experts in tax planning
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Nidhi Manchanda
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Very professional and great customer support, my secretarial
              compliances went very smooth with their suppport.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
