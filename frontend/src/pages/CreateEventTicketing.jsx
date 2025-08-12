import React, { useContext, useState } from 'react';
import sideArrow from "../assets/assets/sideArrow.png";
import TicketEvent from "../assets/assets/ticketEvent.png";
import freeEvent from "../assets/assets/freeTicket.png";
import { useNavigate } from "react-router-dom";
import StepTracker from '../components/StepTracker';
import AppContext from '../contexts/AppContext';

const CreateEventTicketing = () => {
    const navigate = useNavigate();
    const { ticketPrice, setTicketPrice, ticketType, setTicketType, title, location, startTime, endTime } = useContext(AppContext);

    return (
        <div className="px-6 lg:px-20">
            {/* Header */}
            <div className="flex gap-6 items-center mb-8 mt-10">
                <button
                    className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition"
                    onClick={() => navigate("/createEventBanner")}
                >
                    <img src={sideArrow} alt="Back" className="w-5 h-5" />
                </button>
                <div className="flex flex-col">
                    <h1 className="text-2xl lg:text-4xl font-bold text-[#2D2C3C]">{title}</h1>
                    <p className="text-[#2D2C3C] text-lg lg:text-xl">{location}</p>
                    <p className="text-[#2D2C3C] text-base lg:text-lg">{startTime} - {endTime}</p>
                </div>
            </div>

            {/* Step Tracker */}
            <div className="mt-8 mb-12">
                <StepTracker />
            </div>

            {/* Event Type Selection */}
            <div className="flex justify-center items-center mb-16">
                <div className="text-center">
                    <p className="text-2xl lg:text-[30px] text-[#2D2C3C] mb-10 font-semibold">
                        What type of event are you running?
                    </p>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
                        {/* Ticket Event */}
                        <div className="border-[#2B293D] border-2 w-full lg:w-[500px] h-[150px] flex flex-col justify-center items-center gap-2 rounded-lg cursor-pointer transition hover:bg-yellow-400 hover:text-black">
                            <img src={TicketEvent} alt="" className="w-12 h-12" />
                            <p className="font-medium">Ticket Event</p>
                            <p className="text-sm text-center px-2">My event requires a ticket for entry</p>
                        </div>

                        {/* Free Event */}
                        <div className="border-[#2B293D] border-2 w-full lg:w-[500px] h-[150px] flex flex-col justify-center items-center gap-2 rounded-lg cursor-pointer transition hover:bg-yellow-400 hover:text-black">
                            <img src={freeEvent} alt="" className="w-12 h-12" />
                            <p className="font-medium">Free Event</p>
                            <p className="text-sm text-center px-2">I'm running a free event</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ticket Details */}
            <div className="mb-20">
                <p className="text-2xl lg:text-[30px] text-[#2D2C3C] font-semibold mb-8">
                    What ticket are you selling?
                </p>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
                    {/* Ticket Name */}
                    <div>
                        <p className="mb-2 text-[#2D2C3C] text-lg font-semibold">Ticket Name</p>
                        <input
                            type="text"
                            placeholder="Ticket Name e.g. General Admission"
                            className="w-full lg:w-[310px] border border-[#828282B2] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            onChange={(e) => setTicketType(e.target.value)}
                        />
                        {console.log(ticketType)}
                    </div>

                    {/* Ticket Price */}
                    <div>
                        <p className="mb-2 text-[#2D2C3C] text-lg font-semibold">Ticket Price</p>
                        <input
                            type="number"
                            placeholder="Enter price of ticket"
                            className="w-full lg:w-[300px] border border-[#828282B2] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            onChange={(e) => setTicketPrice(e.target.value)}
                        />
                        {console.log(ticketPrice)};
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 lg:gap-10 mb-20">
                <button
                    className="hover:bg-yellow-400 hover:text-black text-[#2B293D] font-semibold rounded px-6 py-2 transition"
                    onClick={() => navigate("/createEventBanner")}
                >
                    Go Back
                </button>
                <button
                    className="w-[200px] lg:w-[250px] h-[50px] lg:h-[60px] text-white bg-[#2B293D] font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
                    onClick={() => navigate("/createEventReview")}
                >
                    Save & Continue
                </button>
            </div>
        </div>
    );
};

export default CreateEventTicketing;
