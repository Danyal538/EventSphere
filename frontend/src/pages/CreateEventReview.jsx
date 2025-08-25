import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import sideArrow from "../assets/assets/sideArrow.png";
import StepTracker from "../components/StepTracker"
import AppContext from '../contexts/AppContext';
import date from "../assets/assets/date.png";
import clock from "../assets/assets/clock.png";
import ticket from "../assets/assets/ion_ticket.png"
import Location from "../assets/assets/Location icon.png"
import banner from "../assets/assets/education.png"
import map from "../assets/assets/Map.png";


const CreateEventReview = () => {
    const navigate = useNavigate();
    const { description, image, title, Date, startTime, endTime, ticketPrice, ticketType, location } = useContext(AppContext);
    return (
        <div className='px-6 lg:px-20'>
            <div className="flex gap-6 items-center mt-10 mb-8">
                <button
                    className="cursor-pointer"
                    onClick={() => navigate("/createEventTicketing")}
                >
                    <img src={sideArrow} alt="Back" className="w-5 h-5" />
                </button>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-[#2D2C3C]">{title}</h1>
                    <p className="text-lg text-[#2D2C3C]">{location}</p>
                    <p className="text-base text-[#2D2C3C]">{startTime} - {endTime}</p>
                </div>
            </div>
            <div className="mt-8 mb-12"> <StepTracker /> </div>

            <div>
                <p className=''>Nearly there! Check everything’s correct.</p>
            </div>

            <div className='border-[2px] border-[#2B293D] rounded-2xl m-10 flex flex-col'>
                <div>
                    <img src={image} alt="" className='w-[920px] h-[270px] ml-10 mt-5' />
                    <p className='font-bold text-[#2D2C3C] text-[40px] ml-5 mt-3'>{title}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-5 ml-5'>
                        <p className='font-semibold text-[20px] text-[#2D2C3C]'>Date and Time</p>
                        <div className='flex gap-2'>
                            <img src={date} alt="" className='w-[20px] h-[20px]' />
                            <p className=''>{Date}</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={clock} alt="" className='w-[20px] h-[20px]' />
                            <p>{startTime - endTime}</p>
                        </div>
                    </div>
                    <div className='mr-10'>
                        <p>Ticket Information</p>
                        <div className='flex'>
                            <img src={ticket} alt="" className='w-[20px] h-[20px]' />
                            <p>Ticket Type: {ticketPrice}/ {ticketType}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-20 ml-5 flex flex-col gap-5'>
                    <p className='font-semibold text-[20px] text-[#2D2C3C]'>Location</p>
                    <div className='flex gap-2'>
                        <img src={Location} alt="" className='w-[25px] h-[25px]' />
                        <p className='text-[#2D2C3C] font-semibold'>{location}</p>
                    </div>
                    <div>
                        <img src={map} alt="" className='w-[500px] h-[240px]' />
                    </div>
                </div>
                <div className='ml-5 mt-10'>
                    <p className='text-[#2D2C3C] font-bold text-[30px]'>Hosted by: </p>
                </div>
                <div className='ml-5'>
                    <p className='font-semibold text-[30px] text-[#2D2C3C] mt-10'>Event description</p>
                    <p className='mt-5 ml-5 text-[#5A5A5A] text-[18px] mr-5 mb-20'>{description}</p>
                </div>
            </div>
            <div className='flex gap-10 justify-end px-8 py-10'>
                <button className='w-[150px] h-[40px] text-black font-semibold bg-yellow-400 rounded text-center'>Save for later</button>
                <button className='w-[150px] h-[40px] text-white font-semibold bg-[#2B293D] rounded text-center'>Publish Event</button>
            </div>

        </div >
    )
}

export default CreateEventReview