import React, { useContext, useState } from 'react';
import sideArrow from "../assets/assets/sideArrow.png";
import { useNavigate } from 'react-router-dom';
import StepTracker from '../components/StepTracker';
import { AppProvider } from '../contexts/AppProvider';
import AppContext from '../contexts/AppContext';

const CreateEventBanner = () => {
    const navigate = useNavigate();
    const { setImage, title, location, starTime, endTime } = useContext(AppContext);
    return (
        <div className="px-8 md:px-20">

            {/* Header */}
            <div className="flex gap-6 items-center mt-10 mb-8">
                <button
                    className="cursor-pointer"
                    onClick={() => navigate("/createEventEdit")}
                >
                    <img src={sideArrow} alt="Back" className="w-5 h-5" />
                </button>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-[#2D2C3C]">{title}</h1>
                    <p className="text-lg text-[#2D2C3C]">{location}</p>
                    <p className="text-base text-[#2D2C3C]">{starTime} - {endTime}</p>
                </div>
            </div>

            {/* Stepper */}
            <div className="mb-10">
                <StepTracker />
            </div>

            {/* Upload Section */}
            <div className="flex flex-col gap-4 max-w-lg">
                <p className="text-2xl font-semibold text-[#2D2C3C]">Upload Image</p>

                <div className="w-full h-[60px] border border-[#828282B2] rounded overflow-hidden">
                    <input
                        type="file"
                        className="w-full h-full cursor-pointer text-gray-700 file:mr-4 file:py-2 file:px-4 
                                   file:border file:border-[#ccc] file:text-sm file:rounded file:text-black 
                                   file:bg-[#EEEEEE] hover:file:bg-yellow-400"
                        onChange={(e) => setImage(e.target.files)}
                    />
                </div>

                <div className="text-sm text-[#5A5A5A] space-y-1">
                    <p>Feature Image must be at least 1170 pixels wide by 504 pixels high.</p>
                    <p>Valid file formats: JPG, GIF, PNG.</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-5 mt-20 mb-10">
                <button
                    className="border border-[#2B293D] px-4 w-[250px] h-[45px] rounded 
                               hover:bg-yellow-400 hover:text-black font-medium"
                    onClick={() => navigate("/createEventEdit")}
                >
                    Go Back to Edit Event
                </button>
                <button
                    className="border border-[#2B293D] bg-[#2B293D] text-white px-4 w-[200px] h-[45px] rounded 
                               hover:bg-yellow-400 hover:text-black font-medium"
                    onClick={() => navigate("/createEventTicketing")}
                >
                    Save & Continue
                </button>
            </div>
        </div>
    );
};

export default CreateEventBanner;
