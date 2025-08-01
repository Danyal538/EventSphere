import React from 'react'
import { offlineEvents, onlineEvents } from '../assets/assets/assets'
import ticket from "../assets/assets/ion_ticket.png"
import star from "../assets/assets/Star 1.png"
import star2 from "../assets/assets/Interested Button.png"
import { useNavigate } from 'react-router-dom'

const PopularEvents = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col'>
            <p className='text-[#2D2C3C] font-montserrat font-bold text-[40px] leading-[100%] tracking-normal text-start mb-10 ml-10'>Popular Events</p>
            <div className='flex items-start gap-5 ml-15'>
                <p className='border-[0.5px] border-[#6F6F6F] text-[#6F6F6F] rounded-full w-[50px] text-center'>All</p>
                <p className='border-[0.5px] border-[#6F6F6F] text-[#6F6F6F] rounded-full text-center px-2 '>Today</p>
                <p className='border-[0.5px] border-[#6F6F6F] text-[#6F6F6F] rounded-full text-center px-2'>Tomorrow</p>
                <p className='border-[0.5px] border-[#6F6F6F] text-[#6F6F6F] rounded-full text-center px-2'>This Weekend</p>
                <p className='border-[0.5px] border-[#6F6F6F] text-[#6F6F6F] rounded-full text-center px-2'>Free</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-10">
                {offlineEvents.map((event, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-[#FFFFFF] hover:shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => navigate("/event-description", { state: { event } })}>

                        {/* Top Image Section */}
                        <div className="relative">
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                            <img src={star2} alt="Favorite" className="absolute top-3 right-3 w-7 h-7" />
                            <p className="absolute bottom-2 left-2 bg-[#FFE047] text-black text-xs font-semibold px-2 py-1 rounded">
                                {event.category}
                            </p>
                        </div>

                        {/* Details Section */}
                        <div className="p-4 flex gap-4">
                            {/* Date */}
                            <div className="text-center">
                                <p className="text-sm text-[#6C27AB] font-bold uppercase">{event.month}</p>
                                <p className="text-lg font-bold text-[#4539B4]">
                                    {event.date}
                                </p>
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                <p className="text-base font-bold text-gray-800">{event.title}</p>
                                <p className="text-sm text-gray-600 mt-1 truncate">{event.org}</p>
                                <p className="text-sm text-gray-500 mt-1">{event.time}</p>

                                <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                                    <img src={ticket} alt="Ticket" className="w-4 h-4" />
                                    <span>INR {event.price}</span>
                                    <span className="mx-1">•</span>
                                    <img src={star} alt="Star" className="w-4 h-4" />
                                    <span>{event.interested} interested</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button className="w-[610px] h-[40px] border text-center hover:bg-[#FFE047] hover:text-black ">
                    See More
                </button>
            </div>

            {/* Online events */}
            <p className='text-[#2D2C3C] font-montserrat font-bold text-[40px] leading-[100%] tracking-normal text-start mb-10 ml-10 mt-20'>Discover Best of Online Events</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-10">
                {onlineEvents.map((event, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-[#FFFFFF] hover:shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => navigate("/event-description", { state: { event } })}>

                        {/* Top Image Section */}
                        <div className="relative">
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                            <img src={star2} alt="Favorite" className="absolute top-3 right-3 w-7 h-7" />
                            <p className="absolute bottom-2 left-2 bg-[#FFE047] text-black text-xs font-semibold px-2 py-1 rounded">
                                {event.category}
                            </p>
                        </div>

                        {/* Details Section */}
                        <div className="p-4 flex gap-4">
                            {/* Date */}
                            <div className="text-center">
                                <p className="text-sm text-[#6C27AB] font-bold uppercase">{event.month}</p>
                                <p className="text-lg font-bold text-[#4539B4]">
                                    {event.date}
                                </p>
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                <p className="text-base font-bold text-gray-800">{event.title}</p>
                                <p className="text-sm text-gray-600 mt-1 truncate">{event.org}</p>
                                <p className="text-sm text-gray-500 mt-1">{event.time}</p>

                                <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                                    <img src={ticket} alt="Ticket" className="w-4 h-4" />
                                    <span>INR {event.price}</span>
                                    <span className="mx-1">•</span>
                                    <img src={star} alt="Star" className="w-4 h-4" />
                                    <span>{event.interested} interested</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button className="w-[610px] h-[40px] border text-center hover:bg-[#FFE047] hover:text-black ">
                    See More
                </button>
            </div>

        </div>
    )
}

export default PopularEvents;