import React, { useContext, useState } from 'react';
import sideArrow from "../assets/assets/sideArrow.png";
import date from "../assets/assets/date.png";
import clock from "../assets/assets/clock.png";
import add from "../assets/assets/Add button.png";
import { useNavigate } from "react-router-dom";
import AppContext from '../contexts/AppContext';
import StepTracker from '../components/StepTracker';

const CreateEventEdit = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [eventType, setEventType] = useState("Single Event");

    const { setTitle, setDate, setStartTime, setEndTime, setLocation, setDescription } = useContext(AppContext);
    const navigate = useNavigate();

    const categories = [
        "Conference", "Concert", "Seminar", "Workshop", "Festival", "Online meetup",
        "Art & Culture", "Technology", "Food & Drink", "Sports & Fitness",
        "Comedy & Entertainment", "Education & Learning", "Travel & Adventure"
    ];

    return (
        <div className="px-10 lg:px-20 py-8 font-sans max-w-6xl mx-auto">

            {/* Header */}
            <div className="flex items-center gap-6 mb-10">
                <button onClick={() => navigate("/createEventEdit")} className="p-2 hover:bg-gray-100 rounded-full">
                    <img src={sideArrow} alt="Back" className="w-5 h-5" />
                </button>
                <h1 className="text-3xl font-bold text-[#2D2C3C]">Create a New Event</h1>
            </div>

            {/* Step Tracker */}
            <div className="mb-12">
                <StepTracker />
            </div>

            <div className="space-y-12">

                {/* Event Details */}
                <section>
                    <h2 className="text-2xl font-semibold text-[#2D2C3C] mb-6">Event Details</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Event Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter the name of your event"
                                className="w-full max-w-xl border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-yellow-200 outline-none"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Event Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full max-w-xl border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-yellow-200 outline-none"
                            >
                                <option value="" disabled>Please select one</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

                {/* Date & Time */}
                <section>
                    <h2 className="text-2xl font-semibold text-[#2D2C3C] mb-6">Date & Time</h2>

                    {/* Event Type */}
                    <div className="mb-6">
                        <label className="text-lg font-medium">Event Type <span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-6 mt-3">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="eventType" defaultChecked />
                                Single Event
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="eventType" onChange={() => setEventType("Recurring Event")} />
                                Recurring Event
                            </label>
                        </div>
                    </div>

                    {/* Date Inputs */}
                    <div className="flex gap-8 flex-wrap">
                        {[
                            { label: "Start Date", required: true, icon: date, type: "date", handler: setDate },
                            { label: "Start Time", required: true, icon: clock, type: "time", handler: setStartTime },
                            { label: "End Time", required: false, icon: clock, type: "time", handler: setEndTime }
                        ].map((field, i) => (
                            <div key={i} className="space-y-2">
                                <label className="block text-lg font-medium">
                                    {field.label} {field.required && <span className="text-red-500">*</span>}
                                </label>
                                <div className="flex items-center border border-gray-300 rounded px-2">
                                    <img src={field.icon} alt="" className="w-5 h-5 mr-2" />
                                    <input
                                        type={field.type}
                                        className="py-2 w-full outline-none"
                                        onChange={(e) => field.handler(e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="flex items-end">
                            <img src={add} alt="Add session" className="w-10 h-10 cursor-pointer hover:scale-105 transition" />
                        </div>
                    </div>
                </section>

                {/* Location */}
                <section>
                    <h2 className="text-2xl font-semibold text-[#2D2C3C] mb-6">Location</h2>
                    <label className="block text-lg font-medium mb-2">
                        Where will your event take place? <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Select location"
                        className="w-full max-w-xl border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-yellow-200 outline-none"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </section>

                {/* Additional Info */}
                <section>
                    <h2 className="text-2xl font-semibold text-[#2D2C3C] mb-6">Additional Information</h2>
                    <label className="block text-lg font-medium mb-2">
                        Event Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        rows="5"
                        placeholder="Describe what’s special about your event & other important details."
                        className="w-full max-w-3xl border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-yellow-200 outline-none"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </section>

                {/* Action Button */}
                <div className="flex justify-end pt-4">
                    <button
                        className="bg-[#3F3D56] text-white px-8 py-3 rounded hover:bg-[#FFE047] hover:text-black transition"
                        onClick={() => navigate("/createEventBanner")}
                    >
                        Save & Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateEventEdit;
