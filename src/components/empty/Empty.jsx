import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full">
            <div className="container mx-auto max-w-[1310px] px-5 flex flex-col items-center justify-center">
                <img
                    className="w-[300px] object-contain"
                    src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                    alt=""
                />
                <button
                    onClick={() => navigate("/products")}
                    className="bg-black border text-white py-2 px-6 rounded-lg transition-all hover:bg-white hover:text-black hover:border-black">
                    Shopping
                </button>
            </div>
        </div>
    );
};

export default Empty;
