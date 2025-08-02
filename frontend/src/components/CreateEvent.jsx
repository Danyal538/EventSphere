import React from 'react'
import bannerImg from "../assets/assets/bg banner.png"
import add from "../assets/assets/add.png"
import { useNavigate } from 'react-router-dom'

const CreateEvent = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-20 relative h-[180px]">
            <img src={bannerImg} alt="" className="w-full h-full object-cover rounded-xl" />

            <div className="absolute inset-0 flex items-center justify-between px-10">
                <div className="text-white space-y-3 ml-40">
                    <p className="font-medium text-[25px] leading-[100%] tracking-[0]">
                        Create an event with Eventify
                    </p>
                    <p className="text-[#FFE047] font-normal text-[15px] leading-[38px] tracking-[0] max-w-[700px]">
                        Got a show, event, activity or a great experience? Partner with us & get listed on Eventify
                    </p>
                </div>

                <div className="flex items-center gap-3 w-[200px] h-[50px] bg-[#FFE047] px-4 rounded-full shadow-md hover:bg-yellow-500">
                    <img src={add} alt="" className="w-5 h-5" />
                    <button className="text-[#2B293D] font-semibold text-[18px] leading-[100%] tracking-[0] text-center"
                        onClick={() => navigate("/createPageEdit")}>
                        Create Event
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CreateEvent