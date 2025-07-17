import React from 'react'
import search from "../assets/assets/Search icon.png"
import { offlineEvents } from '../assets/assets/assets'
import { onlineEvents } from '../assets/assets/assets'
import { trendingEvents } from '../assets/assets/assets'
import star from "../assets/assets/Star 1.png"
import star2 from "../assets/assets/Interested Button.png"
import ticket from "../assets/assets/ion_ticket.png"


const Events = () => {
    return (
        <>
            <div className='bg-[#2B293D80] w-full h-[180px] flex items-center flex-col'>
                <p className='font-bold text-[35px] leading-[70px] tracking-[0] text-white'>Explore a world of events. Find what excites you!</p>
                <div className="flex items-center bg-white rounded-full px-4 py-2 mt-6 w-full max-w-[550px] shadow-md">
                    <img src={search} alt="Search" className="w-5 h-5 mr-2" />
                    <input
                        type="text"
                        placeholder="Search Events, Categories, Location..."
                        className="w-full text-sm font-montserrat focus:outline-none placeholder:text-gray-500"
                    />
                </div>
            </div>
            <div className='mt-20'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-10">
                    {offlineEvents.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-[#FFFFFF] hover:shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
                    {onlineEvents.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-[#FFFFFF] hover:shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-10 mb-30">
                    {trendingEvents.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-[#FFFFFF] hover:shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">

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
            </div>
        </>
    )
}

export default Events