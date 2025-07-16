import React from 'react';
import playStore from "../assets/assets/playstore.png"
import apple from "../assets/assets/apple.png"

const Footer = () => {
    return (
        <div className="w-full bg-[#2B293D] py-12 px-10 overflow-hidden -mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                <div>
                    <p className="text-white text-[20px] font-semibold mb-4">Company Info</p>
                    <div className="flex flex-col text-[15px] text-[#A9A9A9] space-y-2">
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Careers</p>
                        <p>FAQS</p>
                        <p>Terms of Services</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>

                <div>
                    <p className="text-white text-[20px] font-semibold mb-4">Help</p>
                    <div className="flex flex-col text-[15px] text-[#A9A9A9] space-y-2">
                        <p>Account Support</p>
                        <p>Listing Events</p>
                        <p>Event Ticketing</p>
                        <p>Ticket Purchase Terms & Conditions</p>
                    </div>
                </div>
                <div>
                    <p className="text-white text-[20px] font-semibold mb-4">Follow Us</p>
                    <div className="flex flex-col text-[15px] text-[#A9A9A9] space-y-2">
                        <p>Facebook</p>
                        <p>Youtube</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>

                <div>
                    <p className="text-white text-[20px] font-semibold mb-4">Download the App</p>
                    {/* You can insert app store badges or QR code here */}
                    <div className='flex border-[0.3px] border-[#A9A9A9] p-2 mb-2'>
                        <img src={playStore} alt="" />
                        <p className='text-[#A9A9A9]'>Get in on Google Play</p>
                    </div>
                    <div className='flex border-[0.3px] border-[#A9A9A9] p-2'>
                        <img src={apple} alt="" />
                        <p className='text-[#A9A9A9]'>Download on the App Store</p>
                    </div>
                </div>
            </div>
            <div className='w-full border-[1px] border-[#A9A9A980] mt-10'></div>
            <div className="w-full bg-[#2B293D] text-center py-4">
                <p className="text-[#A9A9A9] text-sm font-montserrat">
                    © 2023 Eventify. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
