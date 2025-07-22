import React, { useState } from 'react';
import cross from "../assets/assets/Close button.png";
import sideArrow from "../assets/assets/Vector 28.png";
import { useLocation, useNavigate } from 'react-router-dom';

const TicketSummary = () => {
    const { state } = useLocation();
    const { event, total, fullName, email } = state;
    const numericTotal = Number(total);
    const tax = (0.05 * numericTotal).toFixed(2);
    const grandTotal = (numericTotal + Number(tax));
    const navigate = useNavigate();
    return (
        <div className="bg-[#F3F4F6] min-h-screen flex items-center justify-center">
            <div className="flex flex-col justify-between w-[450px] h-[550px] bg-[#F3F4F6]">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
                    <img src={sideArrow} alt="Back" className="w-4 h-4 cursor-pointer" onClick={() => navigate("/details", { state: { event, fullName, email, total } })} />
                    <p className="font-semibold text-lg text-[#1E1E1E]">Order Summary</p>
                    <img src={cross} alt="Close" className="w-4 h-4 cursor-pointer" />
                </div>

                {/* Ticket Card */}
                <div className="flex justify-center ">
                    <div className="relative bg-white border-2 border-[#2B7CD3] rounded-md px-6 py-4 w-[80%]">
                        <p className="text-center font-semibold text-lg text-[#2B7CD3]">Standard Ticket</p>
                        <p className="text-sm font-medium text-[#1E1E1E] mt-3">{fullName}</p>
                        <p className="text-sm text-[#555]">{email}</p>
                        <div className="absolute bottom-3 right-4 px-3 py-1 bg-[#2B7CD3] text-white text-sm rounded">₹{total}</div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="bg-white mt-6 mx-4 rounded-md shadow-sm p-4">
                    <div className="flex justify-between text-sm text-[#1E1E1E] mb-2">
                        <span>Sub Total:</span>
                        <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#1E1E1E] mb-2">
                        <span>Tax:</span>
                        <span>₹{tax}</span>
                    </div>
                    <hr className="my-3 border-dashed border-t border-gray-300" />
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg font-bold text-[#1E1E1E]">Order Total:</p>
                        <p className="text-lg font-bold text-[#1E8F3F]">₹{grandTotal}</p>
                    </div>

                    {/* Pay Now Button */}
                    <button className="w-full bg-[#287921] text-white py-3 rounded-md font-semibold text-base flex justify-center items-center gap-2 hover:bg-[#246c1f] transition">
                        <span role="img" aria-label="lock">🔒</span> Pay Now
                    </button>
                </div>
            </div>
        </div>

    );
};

export default TicketSummary;