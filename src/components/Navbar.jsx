import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import {
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Firma from "../assets/svgs/firma.svg";

const WINDOW_INNERWIDTH = window.innerWidth;

const NavList = ({closeMenu}) => {

  const handleClose = () => {
    closeMenu();
  }

  return (
    <>
      <ul className="lg:hidden z-10 mt-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

        {/* Home */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-white/50 lg:border-none"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            duration={1300}
            onClick={handleClose}
            className="cursor-pointer flex items-center font-poppins text-white font-normal text-base transition-colors"
          >
            Home
          </Link>
        </Typography>

        {/* About */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-white/50 lg:border-none"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            duration={1300}
            onClick={() => handleClose()}
            className="cursor-pointer flex items-center font-poppins text-white font-normal text-base transition-colors"
          >
            About
          </Link>
        </Typography>

        {/* Work */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-white/50 lg:border-none"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            duration={1300}
            onClick={() => handleClose()}
            className="cursor-pointer flex items-center font-poppins text-white font-normal text-base transition-colors"
          >
            Projects
          </Link>
        </Typography>

        {/* Contact */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:pl-4 lg:py-3 pt-3 pb-5"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            duration={1300}
            onClick={() => handleClose()}
            className="cursor-pointer flex items-center font-poppins text-white font-normal text-base transition-colors"
          >
            Contact
          </Link>
        </Typography>
      </ul>

      <ul className="hidden z-10 mt-6 lg:flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

        {/* Home */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-white/50 lg:border-none"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            duration={1300}
            className="cursor-pointer flex items-center font-poppins text-white font-normal text-base transition-colors"
          >
            Home
          </Link>
        </Typography>

        {/* About */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-white/50 lg:border-none"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            duration={1300}
            className="cursor-pointer flex items-center font-poppins text-white font-normal text-base transition-colors"
          >
            About
          </Link>
        </Typography>

        {/* Work */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-white/50 lg:border-none"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            duration={1300}
            className="cursor-pointer flex items-center font-poppins text-white font-normal text-base transition-colors"
          >
            Projects
          </Link>
        </Typography>

        {/* Contact */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:pl-4 lg:py-3 pt-3 pb-5"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            duration={1300}
            className="cursor-pointer flex items-center font-poppins text-white font-normal text-base transition-colors"
          >
            Contact
          </Link>
        </Typography>
      </ul>
    </>
  );
};

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    WINDOW_INNERWIDTH >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const closeMenu = () => {
    setOpenNav(false);
  };

  return (
    <div className="z-50 fixed top-0 w-full bg-white/5 backdrop-blur-lg">
      <nav className="mx-auto max-w-[1050px] shadow-none px-4 md:px-8 py-0 lg:px-0 border-none">
        <div className="flex items-center justify-between py-2">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer"
          >
            <div>
              <Link
              to="home"
              smooth={true}
              offset={-80}
              className="cursor-pointer"
              duration={1300}
              >
                <img
                  className="w-[4.5rem]"
                  src={Firma}
                  loading="lazy"
                  alt="Esteban Pelutiero | Frontend Developer"
                />
              </Link>
            </div>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-7 text-white" strokeWidth={1.5} />
            ) : (
              <Bars3Icon className="w-7 text-white" strokeWidth={1.5} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList closeMenu={closeMenu}/>
        </Collapse>
      </nav>
    </div>
  );
};



export default Navbar;
