import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          MyNews
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>

        {/* User Authentication */}
        <div className="space-x-4">
          {user ? (
            <>
              <span className="font-semibold">{user.name}</span>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
