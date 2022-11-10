import React, { useContext } from "react";
import {
  FaCheckSquare,
  FaMedapps,
  FaPowerOff,
  FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/himu-kitechen.png";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <header>
        <div className="navbar bg-base-100 px-6 shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                {/* <li>
                  <Link to="/recipes">Recipes</Link>
                </li> */}
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
            <Link className="normal-case text-xl" to="/">
              <img src={logo} alt="Himu Kitechen" style={{ width: "4rem" }} />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              {/* <li>
                <Link to="/recipes">Recipes</Link>
              </li> */}
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user?.uid ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full border">
                      <img src={user.photoURL} alt="user" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <span> {user.displayName}</span>
                      <Link to="profile">
                        <FaUserCog className="mx-2"></FaUserCog> Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="myrevews">
                        <FaMedapps></FaMedapps> My Review
                      </Link>
                    </li>
                    <li>
                      <Link to="addservices">
                        <FaCheckSquare></FaCheckSquare> Add Services
                      </Link>
                    </li>
                    <li>
                      <Link onClick={logout}>
                        <FaPowerOff></FaPowerOff> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-warning btn-outline btn-sm rounded-btn"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
