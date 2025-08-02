import React, { useState } from 'react'
import sideArrow from "../assets/assets/sideArrow.png"
import date from "../assets/assets/date.png"
import clock from "../assets/assets/clock.png"

const CreateEventEdit = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = ["Conference", "Concert", "Seminar", "Workshop", "Festival", "Online meetup", "Art & Culture", "Technology", "Food & Drink", "Sports & Fitness", "Comedy & Entertainment", "Education & Learning", "Travel & Adventure"]
    return (
        <div>
            <div className='flex gap-20 mt-10'>
                <div className=' w-[50px] h-[50px] ml-5'>
                    <img src={sideArrow} alt="" />
                </div>
                <p className='text-3xl text-[#2D2C3C] font-bold'>Create a New Event</p>
            </div>
            {/* <div></div> step indicator  */}
            <div>
                <p>Event Details</p>
                <div>
                    <p>Event title: </p>
                    <input type="text" placeholder='Enter Name of your event' />
                </div>
                <div>
                    <label>Event Category</label>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="" disabled>Please select one</option>
                        {
                            categories.map((category, index) => (
                                <option value={category} key={index}>{category}</option>
                            )
                            )
                        }
                    </select>
                    {selectedCategory && (
                        <p>
                            Selected: <strong> {selectedCategory} </strong>
                        </p>
                    )}
                </div>
            </div>
            <div>
                <p>Date & Time</p>
                <div>
                    <label>Event type </label>
                    <div></div>
                    <p>Single</p>
                    <div></div>
                    <p>Recurring Events</p>
                </div>
            </div>
            {/* {sessions and dates} */}
            <div>
                <p>Session(s)</p>
                <div>
                    <div>
                        <p>Start Date</p>
                        <div>
                            <img src={date} alt="" />
                            <input type="date" placeholder='DD/MM/YY' />
                        </div>
                    </div>
                    <div>
                        <p>Start Time</p>
                        <div>
                            <img src={clock} alt="" />
                            <input type="date" placeholder='DD/MM/YY' />
                        </div>
                    </div>
                    <div>
                        <p>End Time</p>
                        <div>
                            <img src={clock} alt="" />
                            <input type="date" placeholder='DD/MM/YY' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateEventEdit