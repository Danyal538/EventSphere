import React from 'react'
import entertainment from "../assets/assets/entertainment.png"
import educational from "../assets/assets/educational.png"
import culture from "../assets/assets/culture.png"
import sports from "../assets/assets/sports.png"
import technology from "../assets/assets/technology.png"
import travel from "../assets/assets/travel.png"

const categories = [
    { img: entertainment, label: "Entertainment" },
    { img: educational, label: "Educational & Business" },
    { img: culture, label: "Culture and Art" },
    { img: sports, label: "Sports & Fitness" },
    { img: technology, label: "Technology & Innovation" },
    { img: travel, label: "Travel & Adventure" },
];

const Categories = () => {
    return (
        <div className="py-12 px-4 md:px-10">
            <h2 className="font-montserrat font-bold text-[40px] leading-[100%] tracking-normal text-start mb-10">
                Explore Categories
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        <img src={item.img} alt={item.label} className="w-[100px] h-[100px] mb-2" />
                        <p className="text-sm font-medium text-gray-800">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
