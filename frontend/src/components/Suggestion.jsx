import React from 'react';
import bannerImg from "../assets/assets/background.png";
import arrow from "../assets/assets/arrow (2).png";

const Suggestion = () => {
    return (
        <div className="mt-20 relative h-[200px] bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-black space-y-4">
                <p className="font-bold text-[30px] leading-[100%] tracking-[0]">Events specially curated for you!</p>
                <p className="font-normal text-[20px] leading-[100%] tracking-[0] max-w-[1000px]">
                    Get event suggestions tailored to your interests! Don't let your favorite events slip away.
                </p>
                <div className="flex gap-2">
                    <button className="bg-black text-[#FFE047] px-5 py-2 rounded font-semibold cursor-pointer w-[200px]">Get Started </button>
                    <img src={arrow} alt="" className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
