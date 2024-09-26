import React from "react";
import herobg from "@/images/herobg.png";

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${herobg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="pt-[236px] pb-[217px] bg-no-repeat">
            <div className="container mx-auto max-w-[1310px] px-5">
                <p className="text-xl mb-8 text-white">
                    / Start / Categories
                    <br />/ Headphones and audio for gaming
                </p>
                <h1
                    className="text-[46px] text-white"
                    title="HEADPHONES AND AUDIO FOR GAMING">
                    HEADPHONES AND AUDIO <br /> FOR GAMING
                </h1>
            </div>
        </div>
    );
};

export default Hero;
