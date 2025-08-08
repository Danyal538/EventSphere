import React from 'react'
import sideArrow from "../assets/assets/sideArrow.png"
import TicketEvent from "../assets/assets/ticketEvent.png"
import freeEvent from "../assets/assets/freeTicket.png"
import { useNavigate } from "react-router-dom"

const CreateEventTicketing = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex gap-10 items-center mb-10 mt-10 ml-20'>
                <div className='cursor-pointer' onClick={() => navigate("/createEventBanner")}>
                    <img src={sideArrow} alt="Back" className='w-5 h-5 -mt-8' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold text-[#2D2C3C]'>Event Title</h1>
                    <p className='text-[#2D2C3C] text-[20px]'>Location</p>
                    <p className='text-[#2D2C3C] text-[18px]'>Time</p>
                </div>
            </div>
            {/* <div>Step tracker</div>  */}
            <div className='flex justify-center items-center'>
                <div className='mb-10'>
                    <p className='text-[30px] text-[#2D2C3C] mb-10'>What type of event are you running?</p>
                    <div className='flex gap-20'>
                        <div className='border-[#2B293D] border-[2px] w-[500px] h-[150px] flex flex-col justify-center items-center gap-2 rounded hover:bg-yellow-400 hover:text-black '>
                            <img src={TicketEvent} alt="" className='w-[60px] h-[60px]' />
                            <p>Ticket Event</p>
                            <p>My event requires ticket for entry</p>
                        </div>
                        <div className='border-[#2B293D] border-[0.5px] w-[500px] h-[150px] flex flex-col justify-center items-center gap-2 rounded'>
                            <img src={freeEvent} alt="" className='w-[60px] h-[60px]' />
                            <p>Free Event</p>
                            <p>I'm running a free event</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <p className='text-[30px] text-[#2D2C3C] ml-22'>What ticket are you selling?</p>
                <div className='flex gap-20 ml-22 mt-10'>
                    <div>
                        <p className='mb-2 text-[#2D2C3C] text-[20px] font-semibold'>Ticket Name</p>
                        <input type="text" placeholder='Ticket Name e.g. General Admission' className='w-[310px] border-[1px] border-[#828282B2] px-2 rounded' />
                    </div>
                    <div>
                        <p className='mb-2 text-[#2D2C3C] text-[20px] font-semibold'>Ticket price</p>
                        <input type="number" placeholder='Enter price of ticket' className='w-[300px] border-[1px] border-[#828282B2] px-2 rounded' />
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-end gap-10 mb-20'>
                <button className='hover:bg-yellow-400 text-[#2B293D] font-semibold rounded px-2' onClick={() => navigate("/createEventBanner")}>Go Back</button>
                <button className='mr-5 w-[250px] h-[60px] text-white bg-[#2B293D] font-semibold rounded hover:bg-yellow-400 hover:text-black'>Save & Continue</button>
            </div>
        </div>
    )
}

export default CreateEventTicketing