import React from 'react';
import banner from "../assets/assets/Hero.png";
import search from "../assets/assets/Search icon.png";

const Banner = () => {
    return (
        <div className="relative w-full">
            {/* Banner Image */}
            <img src={banner} alt="Banner" className="w-full h-auto object-cover" />

            {/* Text and Search Bar Over Banner */}
            <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-6 pt-[9rem] w-full">
                <p className="font-montserrat font-bold text-[30px] leading-[40px] text-white">
                    Don’t miss out!
                </p>
                <p className="font-montserrat font-bold text-[30px] leading-[40px] text-white max-w-[750px] mt-2">
                    Explore the <span className="text-[#FFE047]">vibrant events</span> happening locally and globally.
                </p>

                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-full px-4 py-2 mt-6 w-full max-w-[550px] shadow-md">
                    <img src={search} alt="Search" className="w-5 h-5 mr-2" />
                    <input
                        type="text"
                        placeholder="Search Events, Categories, Location..."
                        className="w-full text-sm font-montserrat focus:outline-none placeholder:text-gray-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
