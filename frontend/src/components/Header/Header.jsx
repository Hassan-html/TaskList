import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useState } from "react";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <header>
        {/* strip nav */}
        <nav
          className="nav-strip h-[25px] p-[4px] bg-primary text-white
         grid grid-cols-[100px,100px,100px,1fr]
        "
        >
          <section className=" flex  justify-between">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </section>
          <section className="flex  justify-center items-center text-[10px]">
            <a href="tel:+92--------">052456797</a>
          </section>
          <section className="flex  justify-center items-center text-[10px]">
            <a href="mailto:logic.nook@gmail.com">logic.nook@gmail.com</a>
          </section>
          <section className="flex  justify-end text-[10px] items-center">
            <Link to="/Login" className="border-white border-r-[1px] px-[5px]">
              Login
            </Link>
            <Link to="/Register" className=" px-[5px]">
              Register
            </Link>
          </section>
        </nav>
        {/* main nav */}
        <nav className="p-2 grid grid-cols-2">
          <h1 className="text-2xl">Task-App</h1>
          <button
            className="justify-self-end text-[30px] md:hidden"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <FaBars />
          </button>
          <ul
            className={`px-2 flex flex-col md:flex-row ${
              !navOpen && "h-0"
            } md:justify-self-end  overflow-hidden gap-2 md:h-auto md:gap-4 text-[17px]`}
          >
            <li>Login</li>
            <li>Rgister</li>
            <li>Rgister</li>
            <li>Rgister</li>
            <li>Rgister</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
