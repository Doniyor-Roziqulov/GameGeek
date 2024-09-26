import { useGetProductByIdQuery } from "@/context/api/productApi";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArchive } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/context/slices/cartSlice";

const Detail = () => {
    const { proId } = useParams();
    const { data } = useGetProductByIdQuery(proId);
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pb-[161px] pt-24">
            <div className="container mx-auto max-w-[1310px] px-5">
                <p className="text-xl text-[#454444] mb-[30px]">
                    Products / {data?.brand_name} /{" "}
                    <span className="text-[#0D2612] font-medium">
                        {data?.name}
                    </span>
                </p>
                <div className="flex justify-between pb-[109px] border-dashed border-b-2 border-[#6A6969]">
                    <div>
                        <div className="w-[650px] h-[650px] bg-[#F4F4F4] flex items-center justify-center">
                            <img
                                className="w-[450px] h-[450px] object-contain"
                                src={data?.image_url}
                                alt=""
                            />
                        </div>
                        <div className="flex gap-x-[37px] mt-[80px]">
                            {Array(5)
                                .fill()
                                .map((_, inx) => (
                                    <div
                                        key={inx}
                                        className="w-[100px] h-[100px] flex items-center justify-center bg-[#F4F4F4]">
                                        <img
                                            className="w-[70px] h-[70px] object-contain"
                                            src={data?.image_url}
                                            alt="img"
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl mb-4">{data?.name}</h2>
                        <p className="text-lg font-medium mb-1">
                            {data?.description}
                        </p>
                        <div className="flex items-center border-dashed border-b-2 pb-3 border-[#6A6969]">
                            <ReactStars
                                count={5}
                                size={24}
                                color2={"#ffd700"}
                            />
                            <p className="text-[#454444]">
                                ({data?.ratings_stars})
                            </p>
                        </div>
                        <p className="text-4xl font-bold mt-3 mb-[15px]">
                            $ {data?.price}
                        </p>
                        <p className="text-lg pb-7 border-dashed border-b-2 border-[#6A6969]">
                            Suggested payments with 6 month special financing
                        </p>
                        <h3 className="text-2xl font-semibold mt-3 mb-3">
                            Choose a color
                        </h3>
                        <div className="flex gap-x-[31px] pb-[25px] border-dashed border-b-2 border-[#6A6969]">
                            {data?.color_options.map((e, inx) => (
                                <button
                                    key={inx}
                                    style={{ backgroundColor: e }}
                                    className="w-[66px] h-[66px] rounded-full border border-black"></button>
                            ))}
                        </div>
                        <div className="flex items-center gap-x-[62px] my-[25px]">
                            <div className="flex items-center border-[3px] rounded-full border-[#0BA42D]">
                                <button className="px-[30px] py-[19px]">
                                    <FaMinus />
                                </button>
                                <p>1</p>
                                <button className="px-[30px] py-[19px]">
                                    <FaPlus />
                                </button>
                            </div>
                            <p className="text-lg text-[#0D2612] font-semibold">
                                Only{" "}
                                <span className="text-[#0BA42D]">16 items</span>{" "}
                                left! <br /> Don’t miss it
                            </p>
                        </div>
                        <div className="flex items-center gap-x-[17px]">
                            <button
                                onClick={() => dispatch(addToCart(data))}
                                disabled={
                                    cart.some((x) => x.id == data?.id) && true
                                }
                                className={`${
                                    cart.some((x) => x.id == data?.id) &&
                                    "opacity-60"
                                } text-[22px] transition-all border hover:text-[#0BA42D] hover:border-[#0BA42D] hover:bg-white text-white bg-[#0BA42D] rounded-[10px] flex items-center justify-center gap-x-[10px] py-4 w-full`}>
                                <LuShoppingCart />
                                {cart.some((x) => x.id == data?.id) ? (
                                    <p className="text-[18px] font-bold">
                                        Added
                                    </p>
                                ) : (
                                    <p className="text-[18px] font-bold">
                                        Add to Cart
                                    </p>
                                )}
                            </button>
                            <button
                                disabled
                                className="border-[3px] border-[#0D2612] rounded-[10px] w-[62px] h-[62px] flex items-center justify-center cursor-not-allowed">
                                <FaRegHeart className="text-2xl" />
                            </button>
                        </div>
                        <div className="border-dashed border-[3px] border-[#6A6969] rounded-2xl mt-[25px]">
                            <div className="flex items-center gap-x-7 pt-[23px] pl-9 pb-5 border-dashed border-b-2 border-[#6A6969]">
                                <TbTruckDelivery className="text-3xl text-[#0BA42D]" />
                                <div className="flex flex-col">
                                    <strong className="text-lg text-[#0D2612] mb-2 font-semibold">
                                        Free delivery
                                    </strong>
                                    <Link className="text-[#0D2612] underline font-medium">
                                        Enter your Postal Code for Delivery
                                        Availability
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-7 pt-6 pl-9 pb-[19px]">
                                <IoIosArchive className="text-3xl text-[#0BA42D]" />
                                <div className="flex flex-col">
                                    <strong className="text-lg text-[#0D2612] mb-2 font-semibold">
                                        Return Delivery
                                    </strong>
                                    <Link className="text-[#0D2612] underline font-medium">
                                        Free delivery 30 Days return
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;
