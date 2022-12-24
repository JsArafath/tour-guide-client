import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/logo.png";
import { AuthProvider } from "../Context/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProvider);
  const handleLogOut = () => {
    logOut()
      .then((res) => res())
      .catch((err) => err.message);
  };
  return (
    <div className="w-full">
      <header aria-label="Site Header" className="bg-primary">
        <div className="mx-auto max-w-screen-xl ">
          <div className="flex bg-gray-100 h-16 items-center justify-between pr-10">
            <div className="dropdown">
              <label tabIndex={0} className="btn  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 20 20"
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow text-gray-700 rounded-box w-52"
              >
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/services">
                  <li>Services</li>
                </Link>
                <Link to="/blog">
                  <li>Blog</li>
                </Link>
                {user ? (
                  <>
                    <Link to="/my-reviews">
                      <li>My Reviews</li>
                    </Link>
                    <Link to="/add-service">
                      <li>Add Service</li>
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link to="/" className="block text-teal-600">
                <span className="sr-only">Home</span>

                <img src={logo} className="w-12 md:w-20" alt="" />
              </Link>
            </div>
            <div className="md:flex md:items-center md:gap-12">
              <nav
                aria-label="Site Nav"
                className="hidden md:block text-gray-700"
              >
                <ul className="flex items-center gap-6 text-sm ">
                  <li>
                    <Link className=" transition hover:text-gray-200/75" to="/">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" transition hover:text-gray-200/75"
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" transition hover:text-gray-200/75"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>

                  {user ? (
                    <>
                      <li>
                        <Link
                          className=" transition hover:text-gray-200/75"
                          to="/my-reviews"
                        >
                          My Review
                        </Link>
                      </li>
                      <li>
                        <Link
                          className=" transition hover:text-gray-200/75"
                          to="/add-service"
                        >
                          Add Service
                        </Link>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                {!user ? (
                  <div className="sm:flex sm:gap-4">
                    <Link
                      to="/login"
                      className="rounded-md bg-gray-500  px-5 py-2.5 text-sm font-medium text-white shadow"
                    >
                      Login
                    </Link>
                    <div className="hidden sm:flex">
                      <Link
                        className="rounded-md bg-gray-500 px-5 py-2.5 text-sm font-medium text-white"
                        to="/register"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="sm:flex sm:gap-4">
                    <button
                      onClick={handleLogOut}
                      className="rounded-md bg-gray-500   px-5 py-2.5 text-sm font-medium text-white shadow"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
