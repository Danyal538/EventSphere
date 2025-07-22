import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cross from "../assets/assets/Close button.png";
import add from "../assets/assets/Add button.png";
import remove from "../assets/assets/Remove button.png";
import sideArrow from "../assets/assets/Vector 28.png"

const TicketBooking = () => {
    const { state } = useLocation();
    const { event } = state;
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const calculatedPrice = event.price === "FREE" ? 0 : event.price * quantity;
        setTotal(calculatedPrice);
    }
        , [quantity, event.price])

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 space-y-4 mt-30">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
                <img src={sideArrow} alt="Back" className="w-4 h-4" onClick={() => navigate("/")} />
                <p className="font-semibold text-lg">Ticket Booking</p>
                <img src={cross} alt="Close" className="w-4 h-4" />
            </div>
            {/* Ticket Selection */}
            <div className="space-y-2">
                <p className="text-sm font-medium text-gray-800">Select Tickets</p>

                <div className="flex justify-between text-sm text-gray-500 px-2">
                    <p className="font-semibold">Ticket Types</p>
                    <p className="font-semibold">Quantity</p>
                </div>

                {/* Ticket Card */}
                <div className="bg-[#F6F6F6] rounded-md p-4 flex justify-between items-center border border-gray-300">
                    <div>
                        <p className="font-semibold text-sm text-gray-800">Standard Ticket</p>
                        <p className="text-sm text-gray-500">₹{event.price}</p>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-2">
                        <img
                            src={remove}
                            alt="Remove"
                            className="w-5 h-5 cursor-pointer"
                            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        />
                        <p className="text-sm font-medium text-gray-800">{quantity}</p>
                        <img
                            src={add}
                            alt="Add"
                            className="w-5 h-5 cursor-pointer"
                            onClick={() => setQuantity(prev => prev + 1)}
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t pt-4 flex justify-between items-center text-sm font-medium">
                <div className="text-gray-700">
                    Qty: <span className="text-black">{quantity}</span> &nbsp;|&nbsp;
                    Total: <span className="text-green-600">{total}</span>
                </div>
                <button className="bg-[#2B293D] text-white px-6 py-2 rounded-lg shadow hover:opacity-90" onClick={() => navigate("/details", { state: { event, quantity, total } })}>
                    Proceed &nbsp; &gt;
                </button>
            </div>
        </div>
    );
};

export default TicketBooking;
