import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="text-lg font-medium text-gray-700"  to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium text-gray-700" to="/blog">Blog</NavLink>
      </li>
      
        <li>
        <NavLink className="text-lg font-medium text-gray-700" to="/estates">Estates</NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium text-gray-700" to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium text-gray-700" to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium text-gray-700" to="/userProfile">Profile</NavLink>
      </li>
      
    </>
  );
  return (
    <div className="flex justify-center">
      <div className="navbar lg:px-24 bg-base-100 bg-opacity-15 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
            </ul>
        </div>
        <div className="navbar-end flex gap-2">
         <div>
         {user ? (
            <div className="flex items-center gap-2">
              <img className="w-10 h-10 border rounded-full" title={user.displayName} src={user.photoURL} alt="" />
              <p className="hidden md:block lg:block">{user.email}</p>
            </div>) :
            <img className="w-18 h-12" src="/icon/user.png"/>
          }
         </div>
          <div>
          {user ? (
            <button onClick={handleSignOut} className="btn bg-amber-200 lg:text-lg font-semibold text-gray-700 hidden md:block lg:block">
              Sign Out
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-amber-200 lg:text-lg font-semibold text-gray-700">Login</button>
            </NavLink>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
