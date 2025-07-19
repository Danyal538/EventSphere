import React from 'react';
import logo from "../assets/assets/Logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-[#2B293D] font-montserrat">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-12" onClick={() => navigate("/")} />

            {/* Navigation Links */}
            <div className="flex gap-8 text-white font-medium text-[18px]">
                <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[#FFE047]" : "hover:text-[#FFE047] transition"}>Home</NavLink>
                <NavLink to="/events" className={({ isActive }) => isActive ? "border-b-2 border-[#FFE047]" : "hover:text-[#FFE047] transition"}>Events</NavLink>
            </div>

            {/* Action Links */}
            <div className="flex gap-4 items-center">
                <NavLink to="/create" className="text-white text-[18px] hover:text-[#FFE047] transition">Create Event</NavLink>
                <NavLink to="/login" className="text-white text-[18px] hover:text-[#FFE047] transition" onClick={() => navigate("/login")}>Login</NavLink>
                <NavLink to="/signup">
                    <button className="bg-[#FFE047] text-[#2B293D] px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition" onClick={() => navigate("/signup")}>
                        Sign Up
                    </button>
                </NavLink>
            </div>
        </div >
    );
};

export default Navbar;
