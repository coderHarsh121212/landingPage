import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CloseLogo, Hamburger } from "../icons/icons";
// import { CaretDown, CloseLogo, Hamburger, LockLogo } from "../icons/icons";

const Navbar = () => {
  const [shownav, setShowNav] = useState(false);
  return (
    <div className="">
      <div className="md-navbar">
        <div className="m-4 lg:ml-24 text-2xl font-bold">
          Chain<span className="sgh">Tech</span>
        </div>
        <div className="m-4 lg:mr-24">
          <div className="flex gap-5 lg:gap-10 lg:text-xl font-sans text-lg items-center">
            <a href="#" className="navlinks">
              Company
            </a>
            <a href="#" className="navlinks">
              Services
            </a>
            <a href="#" className="navlinks">
              Buisness Models
            </a>
            <a href="#" className="navlinks">
              Blogs
            </a>
            <a href="#" className="navlinks">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* //inital */}
      <div className="init-navbar">
      <div className="  text-2xl font-bold">
          Chain<span className="sgh">Tech</span>
        </div>
        <div className="flex justify-between  items-center">
          <div onClick={() => setShowNav(!shownav)}>
            {shownav ? <p>{<CloseLogo />}</p> : <p>{<Hamburger />}</p>}
          </div>
        </div>
        {shownav && (
          <div className="fixed top-16 left-0 bg-white text-black w-full  shadow-2xl transition-all">
            <div className="flex flex-col gap-2 ">
              <a href="#" className="navlinks p-2 border-b-2">
                Company
              </a>
              <a href="#" className="navlinks p-2 border-b-2">
                {" "}
                Services
              </a>
              <a href="#" className="navlinks p-2 border-b-2">
                Buisness Models
              </a>
              <a href="#" className="navlinks p-2 border-b-2">
                Blogs
              </a>
              <a href="#" className="navlinks p-2 border-b-2">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
