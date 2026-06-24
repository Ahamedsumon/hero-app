import { Link, NavLink } from "react-router";
import headerImage from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer rounded p-1 hover:bg-gray-200 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="navLink menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="apps">Apps</NavLink>
            <NavLink to="installation">Installation</NavLink>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center  max-w-7 ml-1 lg:ml-0">
            <img src={headerImage} alt="" />
            <a className=" md:text-xl">HERO.IO</a>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="navLink menu menu-horizontal px-1 gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="apps">Apps</NavLink>
          <NavLink to="installation">Installation</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="https://github.com/Ahamedsumon">
          <button className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white md:text-xl">
            <span>
              <FaGithub />
            </span>
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
