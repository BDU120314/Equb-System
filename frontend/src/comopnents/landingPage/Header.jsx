import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/equb.png";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 w-screen flex flex-wrap items-center lg:h-[70px] justify-between bg-[#f7f7f7] shadow-lg mb-1 z-[1]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              exact
              to="/"
              className={`text-lg font-bold flex justify-center items-center mr-4 py-2 whitespace-nowrap uppercase text-center text-blue-500 brand ${
                location.pathname === "/" ? "text-gray-400" : ""
              }`}
            >
              <div className="flex justify-center items-center gap-5">
                <img
                  className="w-[100px] h-[60px] object-cover rounded-xl"
                  src={logo}
                  alt="equb_logo"
                />
              </div>
            </NavLink>
            <button
              className="text-black cursor-pointer absolute top-[0px] right-[0px] text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none h-full flex justify-center items-center"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose className="closeIcon" />
              ) : (
                <GiHamburgerMenu className="menuBar" />
              )}
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex text-black flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="flex items-center">
                <NavLink
                  exact
                  to="/"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/" ? "text-gray-400" : ""
                  }`}
                >
                  Home
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/dashboard"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/services" ? "text-gray-400" : ""
                  }`}
                >
                  Services
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/about"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/about" ? "text-gray-400" : ""
                  }`}
                >
                  About
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/login"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <button className="w-[100px] h-[40px] text-white bg-blue-500 items-center hover:bg-blue-300 hover:text-black">
                    Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
