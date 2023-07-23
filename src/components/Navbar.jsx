import { useState } from "react";
import Logo from "../assets/logo-S.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-8 fixed top-0 pt-5 z-20 bg-opacity-[58%] bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo  */}
        <Link
          to="/"
          className="flex items-center relative"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className="w-9 h-9 object-contain hover:animate-spin "
          />

          <div className="flex flex-col  absolute w-72 left-7 top-2">
            <span className="font-sans text-[21px] text-sky-500">
              ubrat Kumar Behera
            </span>
            <span className=" text-[9px]  font-prompt text-slate-300 tracking-widestest relative right-4">
              FRONT END DEVELOPER || WEB DESIGNER
            </span>
          </div>
        </Link>

        {/* For Larger Screen Menu  */}

        <ul className="list-none hidden  sm:flex flex-row gap-10  pt-3 justify-end">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-slate-200" : "text-secondary"
              }  hover:text-green-500 hover:animate-pulse text-[18px] font-medium cursor-pointer hover:ease-linear`}
              onClick={() => setActive(nav.title)}
            >
              <a className="font-prompt" href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* For Mobile View Menu  */}

        <div className="sm:hidden flex flex-1 justify-end items-center pt-3 ">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[18px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-[88px]   w-full max-w-[768px]  z-10 rounded-xl justify-center right-0 alignSelf: 'center',
            `}
          >
            <ul className="list-none flex flex-col gap-4 items-center">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-slate-200" : "text-secondary"
                  }  hover:animate-pulse hover:text-green-500  text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}
                >
                  <a className="font-prompt" href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
