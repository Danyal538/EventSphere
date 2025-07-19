import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import dateIcon from "../assets/assets/uiw_date.png";
import timeIcon from "../assets/assets/icon-park-outline_time.png";
import interested from "../assets/assets/Interested Button.png";
import share from "../assets/assets/Share button.png";
import map from "../assets/assets/Map.png";
import ticket from "../assets/assets/ion_ticket.png";
import { trendingEvents } from '../assets/assets/assets';
import ScrollToTop from '../components/ScrollToTop';

const EventDescription = () => {
    const { state } = useLocation();
    const [event, setEvent] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (state && state.event) {
            setEvent(state.event)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        else {
            navigate("/")
        }
    }, [state, navigate]);

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Banner Image */}
            <img src={event.image} alt={event.title} className="w-full h-[500px] object-cover rounded-2xl shadow-lg" />

            {/* Title + Buttons */}
            <div className="flex justify-between items-start mt-10">
                <h1 className="text-[36px] font-extrabold text-[#2D2C3C]">{event.title}</h1>
                <div className="flex gap-4">
                    <img src={interested} alt="Interested" className="w-[40px] h-[40px] cursor-pointer" />
                    <img src={share} alt="Share" className="w-[40px] h-[40px] cursor-pointer" />
                </div>
            </div>

            {/* Date and Time */}
            <div className="mt-8 flex justify-between gap-8 flex-wrap">
                {/* Left: Date and Time Section */}
                <div className="flex flex-col gap-4 text-gray-600">
                    <h2 className="text-lg font-semibold text-gray-700">📅 Date and Time</h2>
                    <div className="flex items-center gap-3">
                        <img src={dateIcon} alt="Date" className="w-6 h-6" />
                        <p>{event.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={timeIcon} alt="Time" className="w-6 h-6" />
                        <p>{event.time}</p>
                    </div>
                </div>

                {/* Right: Ticket Section */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-6 w-full max-w-md">
                    {/* Buy Tickets Button */}
                    <div className="flex items-center bg-[#FFE047] hover:bg-yellow-500 rounded-md px-4 py-3 w-fit hover:shadow-md transition duration-200">
                        <img src={ticket} alt="Ticket" className="w-5 h-5 mr-2" />
                        <button className="text-sm font-semibold text-black" onClick={() => navigate("/booking", { state: { event } })}>Buy Tickets</button>
                    </div>

                    {/* Ticket Information */}
                    <div>
                        <p className="text-lg font-semibold text-[#2D2C3C] mb-2">Ticket Information</p>
                        <div className="flex items-center gap-2">
                            <img src={ticket} alt="Ticket Icon" className="w-5 h-5" />
                            <p className="text-sm text-gray-700">Standard – INR 200 each</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Location */}
            <div className="mt-10">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">📍 Location</h2>
                <p className="text-gray-600 leading-relaxed">
                    XYZ Convention Hall<br />
                    45 Event Street, Downtown Sector 12<br />
                    Block A, Zone 5, XYZ City<br />
                    Postal Code: 00000
                </p>
                <img src={map} alt="Map" className="mt-4 w-full max-w-lg h-[300px] rounded-xl shadow" />
            </div>

            {/* Host Info */}
            <div className="mt-10">
                <h2 className="text-lg font-semibold text-gray-700">👤 Hosted By</h2>
                <p className="text-gray-600">{event.organizer}</p>
            </div>

            {/* Description */}
            <div className="mt-10">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">📝 Event Description</h2>
                <p className="text-gray-600 leading-relaxed">
                    Join us for an engaging and memorable experience designed to inspire, connect, and entertain.
                    This event brings together enthusiasts, professionals, and curious minds for a day filled with
                    insightful sessions, interactive activities, and valuable networking opportunities.
                    <br /><br />
                    Whether you're here to learn something new, meet like-minded people, or simply enjoy the
                    atmosphere, this event promises something for everyone. Come be a part of the excitement and
                    make lasting memories!
                </p>
            </div>

            {/* Recommended Events */}
            <div className="mt-20">
                <p className="text-2xl font-bold text-[#2D2C3C] mb-4 mx-10">Other Events You May Like</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-10">
                    {trendingEvents.slice(0, 3).map((event, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-[#FFFFFF] hover:shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => navigate("/event-description", { state: { event } })}>

                            {/* Top Image Section */}
                            <div className="relative">
                                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                                {/* Optional: Interested or Favorite icons can go here */}
                                <p className="absolute bottom-2 left-2 bg-[#FFE047] text-black text-xs font-semibold px-2 py-1 rounded">
                                    {event.category || "Featured"}
                                </p>
                            </div>

                            {/* Details Section */}
                            <div className="p-4 flex gap-4">
                                {/* Date */}
                                <div className="text-center">
                                    <p className="text-sm text-[#6C27AB] font-bold uppercase">{event.month}</p>
                                    <p className="text-lg font-bold text-[#4539B4]">{event.date}</p>
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <p className="text-base font-bold text-gray-800">{event.title}</p>
                                    <p className="text-sm text-gray-600 mt-1 truncate">{event.organizer}</p>
                                    <p className="text-sm text-gray-500 mt-1">{event.time}</p>

                                    <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                                        <img src={ticket} alt="Ticket" className="w-4 h-4" />
                                        <span>INR {event.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default EventDescription;
