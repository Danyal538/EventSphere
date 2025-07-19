import React, { useState } from 'react'
import sideArrow from "../assets/assets/Vector 28.png"
import cross from "../assets/assets/Close button.png"
import { useLocation, useNavigate } from 'react-router-dom'
import date from "../assets/assets/uiw_date.png"

const TicketDetail = ({ count }) => {
  const { state } = useLocation();
  const { event } = state;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-20">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <img src={sideArrow} alt="Back" className="w-4 h-4" onClick={() => navigate("/booking")} />
        <p className="font-semibold text-lg">Attendee Details</p>
        <img src={cross} alt="Close" className="w-4 h-4" />
      </div>

      {/* Event Info */}
      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 border-[1px] border-[#A9A9A980]">
        <p className="text-[#5A5A5A] ">{event.title}</p>
        <p className="flex items-center gap-1">
          <img src={date} alt="" className='w-4 h-4' />
          {event.date}
        </p>
      </div>

      {/* Form Section */}
      <div className="px-4 py-3">
        <p className="text-sm font-medium text-gray-700 mb-2 border-[#4872C6] border-b-[2px]">Standard Ticket: Ticket #1</p>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter Attendee's full name"
              className="w-full border border-[#828282B2] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="w-full border border-[#828282B2] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
            <div className="flex items-center border border-[#828282B2] rounded-md overflow-hidden">
              <input
                type="tel"
                placeholder="Enter Attendee's Phone Number"
                className="w-full px-3 py-2 text-sm focus:outline-none"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-3">
          I accept the <span className="text-blue-600 underline cursor-pointer">Terms of Service</span> and have read the <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>

      {/* Summary and Button */}
      <div className="px-4 pt-3 pb-4 border border-[#828282B2]">
        <div className="flex justify-between text-sm text-gray-800 mb-3 border border-[#828282B2] px-3 py-2 rounded-md">
          <p>Qty: <span className="text-green-600 font-semibold">{count}</span></p>
          <p>Total: <span className="text-green-600 font-semibold">₹{count * event.price}</span></p>
        </div>
        <button className="w-full bg-[#2B293D] text-white text-sm py-3 rounded-md hover:bg-black transition duration-200" onClick={() => navigate("/summary")}>
          Continue to Checkout
        </button>
      </div>
    </div>
  )
}

export default TicketDetail;
