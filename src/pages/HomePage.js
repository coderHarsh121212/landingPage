import React from "react";
import ServicePage from "../components/ServicePage";
import { WhiteArrow } from "../icons/icons";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-[60vh] bg-black text-white flex flex-col items-center justify-center pt-20 gap-3 pb-10">
        <div className="text-4xl font-bold text-center md:text-7xl w-[90%] mx-auto">
          Welcome<p className="sm:block hidden my-1">To <span className="sgh">CHAINTECH</span></p>
          <span className="sm:hidden my-1">To <span className="sgh">CHAINTECH</span></span>
        </div>
        <div className="text-sm text-center w-3/4 mx-auto sm:w-1/2">
          from square one to enginerring excellence picselpage assits in
          full-cycle software developemnt.jumps in to take it over or brings
          dedicated top-demanded skills.
        </div>
        <div className="flex justify-center">
          <p className="bg-white px-4 rounded-full text-black p-2 flex items-center gap-2">
            Get Started
            <p className="p-1 bg-black rounded-full">
              <WhiteArrow />
            </p>
          </p>
        </div>
      </div>
      <ServicePage />
    </>
  );
};

export default HomePage;
