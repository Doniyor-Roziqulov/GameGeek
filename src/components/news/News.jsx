import React from "react";
import { newlists } from "@/static";
import { Link } from "react-router-dom";

const News = () => {
    const lits = newlists.map((item, inx) => (
        <li className="text-white w-[302px]" key={inx}>
            <img src={item.img} alt={item.title} />
            <h3 className="text-[20px] mt-[27px] mb-[15px]">{item.title}</h3>
            <p className="text-lg mb-4">{item.text}</p>
            <button className="text-lg underline font-medium">See More</button>
        </li>
    ));
    return (
        <div className="bg-[#0D2612] pt-[71px] pb-20">
            <div className="container mx-auto max-w-[1310px] px-5">
                <h2
                    className="text-[30px] text-white text-center mb-[75px]"
                    title="DISCOVER NEWS AND INNOVAYIONS">
                    DISCOVER NEWS AND INNOVAYIONS
                </h2>
                <ul className="flex justify-between">{lits}</ul>
            </div>
        </div>
    );
};

export default News;
