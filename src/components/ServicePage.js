import React, { useState } from "react";
import { ServiceData } from "../data/data";
import { BlackArrow } from "../icons/icons";

const ServicePage = () => {
  const [serviceData, setServiceData] = useState(ServiceData);
  return (
    <div className="w-3/4 mx-auto py-14  flex flex-col gap-2">
      <div className="text-2xl font-bold my-3">
        <h1>Services We Offers</h1>
        <p className="text-sm font-normal font-sans">
          Discover the digital possibilities for your brand with our
          comprehensive suite of services.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
          <div
            className={`rounded-lg bg-[#DFFFEE] text-black border-2 border-black flex flex-col `}
          >
            <div className="flex gap-2 border-b-2 border-black p-2">
              <p className="w-6 h-6 bg-black text-white rounded-full text-center font-thin">
                B
              </p>
              <p>John Development</p>
            </div>
            <div className="w-1/2 text-center mx-auto flex items-center justify-center flex-col gap-5">
              <p className="text-3xl font-sans font-semibold">
                Blockchain Devlopment
              </p>
              <img
                src="https://th.bing.com/th/id/OIP.87daAEieKuOrXtFy6CHKGgHaEE?rs=1&pid=ImgDetMain"
                alt="Blockchain Devlopment"
                className="w-full h-28 rounded mx-auto"
              ></img>
            </div>
            <div className="border-t-2 border-black p-2">
              <p className="cursor-pointer px-3 p-1 border-2 border-black rounded-full float-right hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                Explore
                <p className="p-1 bg-green-400 rounded-full ">
                  <BlackArrow />
                </p>
              </p>
            </div>
          </div>
          <div
            className={`rounded-lg bg-[#D9FDFF] text-black border-2 border-black flex flex-col `}
          >
            <div className="flex gap-2 border-b-2 border-black p-2">
              <p className="w-6 h-6 bg-black text-white rounded-full text-center font-thin">
                B
              </p>
              <p>John Development</p>
            </div>
            <div className="w-1/2 text-center mx-auto flex items-center justify-center flex-col gap-5">
              <p className="text-3xl font-sans font-semibold">
                Blockchain Devlopment
              </p>
              <img
                src="https://th.bing.com/th/id/OIP.zcwtO-r8Q0Yadl5g-oHrXQAAAA?rs=1&pid=ImgDetMain"
                alt="Blockchain Devlopment"
                className="w-full h-28 rounded mx-auto"
              ></img>
            </div>
            <div className="border-t-2 border-black p-2">
              <p className="cursor-pointer px-3 p-1 border-2 border-black rounded-full float-right hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                Explore
                <p className="p-1 bg-green-400 rounded-full ">
                  <BlackArrow />
                </p>
              </p>
            </div>
          </div>
          <div
            className={`rounded-lg bg-[#FFE6E6] text-black border-2 border-black flex flex-col `}
          >
            <div className="flex gap-2 border-b-2 border-black p-2">
              <p className="w-6 h-6 bg-black text-white rounded-full text-center font-thin">
                B
              </p>
              <p>John Development</p>
            </div>
            <div className="w-1/2 text-center mx-auto flex items-center justify-center flex-col gap-5">
              <p className="text-3xl font-sans font-semibold">Motion Graphic</p>
              <img
                src="https://th.bing.com/th/id/OIP.SPJsDip_LdqbiSSOOw1-LAHaEO?rs=1&pid=ImgDetMain"
                alt="Motion Graphic"
                className="w-full h-28 rounded mx-auto"
              ></img>
            </div>
            <div className="border-t-2 border-black p-2">
              <p className=" cursor-pointer px-3 p-1 border-2 border-black rounded-full float-right hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                Explore
                <p className="p-1 bg-green-400 rounded-full ">
                  <BlackArrow />
                </p>
              </p>
            </div>
          </div>
          <div
            className={`rounded-lg bg-[#E0E3FB] text-black border-2 border-black flex flex-col `}
          >
            <div className="flex gap-2 border-b-2 border-black p-2">
              <p className="w-6 h-6 bg-black text-white rounded-full text-center font-thin">
                B
              </p>
              <p>John Development</p>
            </div>
            <div className="w-1/2 text-center mx-auto flex items-center justify-center flex-col gap-5">
              <p className="text-3xl font-sans font-semibold">Security AAS</p>
              <img
                src="https://th.bing.com/th/id/OIP.zcwtO-r8Q0Yadl5g-oHrXQAAAA?rs=1&pid=ImgDetMain"
                alt="Security AAS"
                className="w-full h-28 rounded mx-auto"
              ></img>
            </div>
            <div className="border-t-2 border-black p-2">
              <p className="cursor-pointer px-3 p-1 border-2 border-black rounded-full float-right hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                Explore
                <p className="p-1 bg-green-400 rounded-full ">
                  <BlackArrow />
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
          {serviceData.slice(4, 8).map((e) => (
            <div
              className={`rounded-lg bg-[${e.boxColor}] text-black border-2 border-black flex flex-col `}
            >
              <div className="flex gap-2 border-b-2 border-black p-2">
                <p className="w-6 h-6 bg-black text-white rounded-full text-center font-thin">
                  B
                </p>
                <p>John Development</p>
              </div>
              <div className="w-1/2 text-center mx-auto flex items-center justify-center flex-col gap-5">
                <p className="text-3xl font-sans font-semibold">
                  {e.headofDevelopment}
                </p>
                <img
                  src={e.thumbimage}
                  alt={e.headofDevelopment}
                  className="w-full h-28 rounded mx-auto"
                ></img>
              </div>
              <div className="border-t-2 border-black p-2">
                <div className="cursor-pointer px-3 p-1 border-2 border-black rounded-full float-right hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                  Explore
                  <p className="p-1 bg-green-400 rounded-full ">
                    <BlackArrow />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
