import React, { useState } from 'react';
import profile from "../assets/assets/User photo.png";
import camera from "../assets/assets/mdi_camera.png";
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [website, setWebsite] = useState("");
    const [company, setCompany] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");

    const navigate = useNavigate();
    return (
        <div className="w-full px-8 md:px-24 py-12">
            <h2 className="text-2xl font-semibold mb-10 border-b border-[#6F6F6F4D] pb-4 text-[#2D2C3C] text-center">Account Information</h2>

            {/* Profile Photo */}
            <div className="flex flex-col items-center gap-2 mb-12 relative">
                <img src={profile} alt="Profile" className="w-28 h-28 rounded-full object-cover" />
                <img src={camera} alt="Camera Icon" className="absolute bottom-0 right-[42%] w-6 h-6 cursor-pointer" />
                <p className="text-lg font-medium mt-2 text-center">Profile Photo</p>
            </div>

            {/* Profile Info */}
            <div className="mb-10">
                <p className="text-lg font-semibold mb-4">Profile Information</p>
                <div className="space-y-4">
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium" >First Name:</label>
                        <input type="text" placeholder="Enter first name" className="col-span-9 border px-4 py-2 rounded-md w-full" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium" onChange={(e) => setLastName(e.target.value)}>Last Name:</label>
                        <input type="text" placeholder="Enter last name" className="col-span-9 border px-4 py-2 rounded-md w-full" />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium">Website:</label>
                        <input type="text" placeholder="Enter website" className="col-span-9 border px-4 py-2 rounded-md w-full" onChange={(e) => setWebsite(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium">Company:</label>
                        <input type="text" placeholder="Enter company name" className="col-span-9 border px-4 py-2 rounded-md w-full" onChange={(e) => setCompany(e.target.value)} />
                    </div>
                </div>
            </div>

            {/* Contact Details */}
            <div className="mb-10">
                <p className="text-lg font-semibold mb-1">Contact Details</p>
                <p className="text-sm text-gray-600 mb-4">These details are private and only used to contact you for ticketing or prizes.</p>
                <div className="space-y-4">
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium">Phone Number:</label>
                        <input type="text" placeholder="Enter phone number" className="col-span-9 border px-4 py-2 rounded-md w-full" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium">Address:</label>
                        <input type="text" placeholder="Enter address" className="col-span-9 border px-4 py-2 rounded-md w-full" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium">City/Town:</label>
                        <input type="text" placeholder="Enter city" className="col-span-9 border px-4 py-2 rounded-md w-full" onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium">Country:</label>
                        <input type="text" placeholder="Enter country" className="col-span-9 border px-4 py-2 rounded-md w-full" onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-3 text-sm font-medium">Pincode:</label>
                        <input type="text" placeholder="Enter pincode" className="col-span-9 border px-4 py-2 rounded-md w-full" onChange={(e) => setPincode(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <button className="bg-[#2B293D] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1e1c2f] transition">
                    Save My Profile
                </button>
            </div>
            <div className="flex justify-center items-center mt-10" onClick={() => navigate("/")}>
                <button className="bg-[#2B293D] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1e1c2f] transition">
                    May be Later
                </button>
            </div>
        </div>
    );
};

export default Account;
