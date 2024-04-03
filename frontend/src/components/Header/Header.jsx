import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const Header = () => {
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
      </header>
    </>
  );
};

export default Header;
