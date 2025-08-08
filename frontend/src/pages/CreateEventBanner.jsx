import React from 'react'
import sideArrow from "../assets/assets/sideArrow.png"
import { useNavigate } from 'react-router-dom'

const CreateEventBanner = () => {
    const navigate = useNavigate();
    return (
        <div>
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
            {/* <div>Track bar</div> */}
            <div className='flex flex-col ml-25 gap-5'>
                <div>
                    <p className='text-[30px] text-[#2D2C3C]'>Upload Image</p>
                </div>
                <div className="w-[500px] h-[60px] border border-[#828282B2] rounded">
                    <input
                        type="file"
                        className="w-full h-full cursor-pointer text-gray-700 file:mr-4 file:py-2 file:px-4 file:border-[0.5px] file:text-sm file:rounded file:text-black file:border-black file:m-2 file:bg-[#EEEEEE] "
                    />
                </div>

                <div>
                    <p className='text-[#5A5A5A] text-[15px]'>Feature Image must be at least 1170 pixels wide by 504 pixels high.</p>
                    <p className='text-[#5A5A5A] text-[15px]'>Valid file formats: JPG, GIF, PNG.</p>
                </div>
            </div>

            <div className='flex gap-5 justify-end items-end mt-20 mb-20'>
                <button className='border-[0.5px] px-2 text-center  w-[200px] h-[40px] hover:bg-yellow-400 rounded' onClick={() => navigate("/createEventEdit")} >Go Back to Edit Event</button>
                <button className='border-[0.5px] border-[#2B293D] bg-[#2B293D] hover:bg-yellow-400 hover:text-black rounded px-2 text-white text-center w-[200px] h-[40px] mr-5' onClick={() => navigate("/createEventTicketing")}>Save & Continue</button>
            </div>
        </div>
    )
}

export default CreateEventBanner