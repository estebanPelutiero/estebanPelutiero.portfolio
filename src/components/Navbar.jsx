import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
            smooth={true}
            spy={true}
            to="home"
            duration={1300}
            onClick={handleClose}
            className="cursor-pointer flex items-center font-poppins text-white font-semibold text-base transition-colors"
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
            smooth={true}
            spy={true}
            to="about"
            duration={1300}
            onClick={() => handleClose()}
            className="cursor-pointer flex items-center font-poppins text-white font-semibold text-base transition-colors"
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
            smooth={true}
            spy={true}
            to="work"
            duration={1300}
            onClick={() => handleClose()}
            className="cursor-pointer flex items-center font-poppins text-white font-semibold text-base transition-colors"
          >
            Projects
          </Link>
        </Typography>

        {/* Contact */}

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:pl-4 lg:py-3 pt-3 pb-4"
        >
          <Link
            smooth={true}
            spy={true}
            to="contact"
            duration={1300}
            onClick={() => handleClose()}
            className="cursor-pointer flex items-center font-poppins text-white font-semibold text-base transition-colors"
          >
            Contact
          </Link>
        </Typography>
      </ul>

      {/* desktop */}

      <ul className="hidden z-10 mt-6 lg:flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-white/50 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="home"
            duration={1300}
            className="hover:text-purple ease-linear duration-100 cursor-pointer flex items-center font-poppins text-white font-semibold text-base transition-colors"
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
            smooth={true}
            spy={true}
            to="about"
            duration={1300}
            className="hover:text-purple ease-linear duration-100 cursor-pointer flex items-center font-poppins text-white font-semibold text-base transition-colors"
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
            smooth={true}
            spy={true}
            to="work"
            duration={1300}
            className="hover:text-purple ease-linear duration-100 cursor-pointer flex items-center font-poppins text-white font-semibold text-base transition-colors"
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
            smooth={true}
            spy={true}
            to="contact"
            duration={1300}
            className="hover:text-purple ease-linear duration-100 cursor-pointer flex items-center font-poppins text-white font-semibold text-base transition-colors"
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
        <div className="flex items-center justify-between my-4">
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
              className="hidden lg:inline cursor-pointer"
              duration={1300}
              >
                <h1 className="text-white text-[17px] font-poppins font-semibold hover:text-purple ease-linear duration-100">Esteban.dev</h1>
              </Link>
            </div>
            <div className="">
              <Link
              to="home"
              smooth={true}
              offset={-80}
              className="lg:hidden inline cursor-pointer"
              duration={1300}
              onClick={() => closeMenu()}
              >
                <h1 className="text-white text-[17px] font-poppins font-semibold hover:text-purple ease-linear duration-100">Esteban.dev</h1>
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
