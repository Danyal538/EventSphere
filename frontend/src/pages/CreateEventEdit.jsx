import React, { useState } from 'react';
import sideArrow from "../assets/assets/sideArrow.png";
import date from "../assets/assets/date.png";
import clock from "../assets/assets/clock.png";
import add from "../assets/assets/Add button.png";
import { useNavigate } from "react-router-dom";
import StepTracker from '../components/StepTracker';

const CreateEventEdit = () => {
    const [title, setTitle] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [eventType, setEventType] = useState("Single Event");
    const [Date, setDate] = useState("");
    const [starTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [location, setLocation] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const navigate = useNavigate();

    const categories = [
        "Conference", "Concert", "Seminar", "Workshop", "Festival", "Online meetup",
        "Art & Culture", "Technology", "Food & Drink", "Sports & Fitness",
        "Comedy & Entertainment", "Education & Learning", "Travel & Adventure"
    ];

    return (
        <div className="px-20 py-10 font-sans">
            {/* Header */}
            <div className='flex gap-10 items-center mb-10 mt-10 ml-20'>
                <div className='cursor-pointer' onClick={() => navigate("/createEventEdit")}>
                    <img src={sideArrow} alt="Back" className='w-5 h-5 -mt-8' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold text-[#2D2C3C]'>Event Title</h1>
                    <p className='text-[#2D2C3C] text-[20px]'>Location</p>
                    <p className='text-[#2D2C3C] text-[18px]'>Time</p>
                </div>
            </div>
            <div className='mt-10 mb-10'> <StepTracker /></div>
            {/* Event Details */}
            <div className='space-y-10'>
                <div>
                    <h2 className='text-2xl font-semibold text-[#2D2C3C] mb-6'>Event Details</h2>
                    <div className='space-y-4'>
                        <div>
                            <label className='block text-lg font-medium mb-2' onChange={(e) => setTitle(e.target.value)}>Event Title<span className="text-red-500">*</span></label>
                            <input type="text" placeholder='Enter the name of your event'
                                className='w-full max-w-xl border border-gray-300 rounded px-4 py-2' />
                        </div>

                        <div>
                            <label className='block text-lg font-medium mb-2'>Event Category<span className="text-red-500">*</span></label>
                            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                                className='w-full max-w-xl border border-gray-300 rounded px-4 py-2'>
                                <option value="" disabled>Please select one</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Date & Time */}
                <div>
                    <h2 className='text-2xl font-semibold text-[#2D2C3C] mb-6'>Date & Time</h2>
                    <div className='mb-6'>
                        <label className='text-lg font-medium'>Event Type<span className="text-red-500">*</span></label>
                        <div className='flex items-center gap-6 mt-2'>
                            <label className='flex items-center gap-2'>
                                <input type="radio" name="eventType" defaultChecked />
                                Single Event
                            </label>
                            <label className='flex items-center gap-2' >
                                <input type="radio" name="eventType" onChange={() => setEventType("Recurring Event")} />
                                Recurring Event
                            </label>
                        </div>
                    </div>

                    <div className='flex gap-8 flex-wrap'>
                        <div className='space-y-2'>
                            <label className='block text-lg font-medium' >Start Date<span className="text-red-500">*</span></label>
                            <div className='flex items-center border border-gray-300 rounded px-2'>
                                <img src={date} alt="date" className='w-5 h-5 mr-2' />
                                <input type="date" className='py-2 w-full' onChange={(e) => setDate(e.target.value)} />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label className='block text-lg font-medium' >Start Time<span className="text-red-500">*</span></label>
                            <div className='flex items-center border border-gray-300 rounded px-2'>
                                <img src={clock} alt="clock" className='w-5 h-5 mr-2' />
                                <input type="time" className='py-2 w-full' onChange={(e) => setStartTime(e.target.value)} />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label className='block text-lg font-medium' >End Time</label>
                            <div className='flex items-center border border-gray-300 rounded px-2'>
                                <img src={clock} alt="clock" className='w-5 h-5 mr-2' />
                                <input type="time" className='py-2 w-full' onChange={(e) => setEndTime(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex items-end'>
                            <img src={add} alt="Add session" className='w-10 h-10 cursor-pointer' />
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div>
                    <h2 className='text-2xl font-semibold text-[#2D2C3C] mb-6'>Location</h2>
                    <label className='block text-lg font-medium mb-2'>Where will your event take place?<span className="text-red-500">*</span></label>
                    <input type="text" placeholder='Select location'
                        className='w-full max-w-xl border border-gray-300 rounded px-4 py-2' onChange={(e) => setLocation(e.target.value)} />
                </div>

                {/* Additional Information */}
                <div>
                    <h2 className='text-2xl font-semibold text-[#2D2C3C] mb-6'>Additional Information</h2>
                    <label className='block text-lg font-medium mb-2'>Event Description<span className="text-red-500">*</span></label>
                    <textarea rows="5" placeholder='Describe what’s special about your event & other important details.'
                        className='w-full max-w-3xl border border-gray-300 rounded px-4 py-2' onChange={(e) => setAdditionalInformation(e.target.value)} />
                </div>

                {/* Button */}
                <div className='mt-10'>
                    <button className='bg-[#3F3D56] text-white px-8 py-3 rounded hover:bg-opacity-90 hover:bg-[#FFE047] hover:text-black' onClick={() => navigate("/createEventBanner")}>Save & Continue</button>
                </div>
            </div>
        </div>
    );
};

export default CreateEventEdit;
