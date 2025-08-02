import React from 'react';
import logo from "../assets/assets/Logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import ticket from "../assets/assets/ion_ticket.png";
import star from "../assets/assets/Interested Button.png";
import profile from "../assets/assets/profile.png";

const RegisteredUserNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-[#2B293D] px-8 py-3 flex items-center justify-between font-montserrat">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
                <img src={logo} alt="Logo" className="h-8" />
            </div>

            {/* Navigation Links */}
            <div className="flex gap-8 text-white font-medium text-sm">
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "border-b-2 border-[#FFE047]" : "hover:text-[#FFE047] transition"
                }>
                    Home
                </NavLink>
                <NavLink to="/events" className={({ isActive }) =>
                    isActive ? "border-b-2 border-[#FFE047]" : "hover:text-[#FFE047] transition"
                }>
                    Events
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? "border-b-2 border-[#FFE047]" : "hover:text-[#FFE047] transition"
                }>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                    isActive ? "border-b-2 border-[#FFE047]" : "hover:text-[#FFE047] transition"
                }>
                    Contact
                </NavLink>
            </div>

            {/* Right Side - Actions */}
            <div className="flex items-center gap-8">
                <NavLink to="/createPageEdit" className="text-white text-sm font-medium hover:text-[#FFE047] transition">
                    Create Event
                </NavLink>

                <div className="flex items-center gap-6 text-white text-xs">
                    <div className="flex gap-1 items-center cursor-pointer">
                        <img src={ticket} alt="Tickets" className="h-5" />
                        <p>Tickets</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <img src={star} alt="Interested" className="h-5" />
                        <p>Interested</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer" onClick={() => navigate("/profile")}>
                        <img src={profile} alt="Profile" className="h-5 text-white" />
                        <p>Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisteredUserNavbar;
