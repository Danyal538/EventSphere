import React from 'react';

const Subscription = () => {
    return (
        <div className="w-full h-[200px] bg-[#FFE047] mt-10 flex items-center justify-center">
            <div className="text-center space-y-4">
                <div>
                    <p className="font-semibold text-[24px] leading-none">Subscribe to our Newsletter</p>
                    <p className="text-[16px] leading-snug max-w-[600px] mx-auto">
                        Receive our weekly newsletter & updates with new events from <br />
                        your favourite organizers & venues.
                    </p>
                </div>

                <div className="flex justify-between w-[600px] h-[40px] border border-[#FFFFFF] bg-white items-center rounded-full overflow-hidden">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-full px-4 text-[14px] text-black outline-none"
                    />
                    <button className="bg-[#2B293D] text-[#FFE047] px-4 h-full w-[150px] text-sm font-semibold">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
