import React, { useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";
import Skleton from "../skleton/Skleton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/context/slices/cartSlice";

const Product = ({ item, isFetching }) => {
    const cart = useSelector((state) => state.cart.value);

    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const lists = item?.map((item) => (
        <div
            className="w-[300px] h-[630px]  flex flex-col items-start justify-between"
            key={item.id}>
            <div>
                <div className="w-[299px] h-[300px] flex items-center justify-center bg-[#F4F4F4]">
                    <img
                        className="w-[200px] h-[200px] object-contain"
                        src={item.image_url}
                        alt=""
                    />
                </div>
                <div className="pr-5">
                    <Link
                        to={`/product/${item.id}`}
                        className="text-xl font-normal text-[#190D26] mb-2 mt-[22px]">
                        {item.name}
                    </Link>
                    <p className="text-lg font-light mb-[21px]">
                        {item.description}
                    </p>
                </div>
            </div>
            <div className="pr-5">
                <div className="flex gap-x-3 mb-[26px]">
                    {item.color_options?.map((url, inx) => (
                        <button
                            key={inx}
                            style={{ backgroundColor: url }}
                            className={` w-[30px] h-[30px] rounded-full border border-black`}></button>
                    ))}
                </div>
                <p className="text-[22px] font-semibold mb-[22px]">
                    $ {item.price}
                </p>
                <button
                    onClick={() => dispatch(addToCart(item))}
                    disabled={cart.some((x) => x.id == item?.id) && true}
                    className={`flex ${
                        cart.some((x) => x.id == item?.id) && "opacity-60"
                    } items-center gap-x-2 text-white bg-[#0BA42D] py-3 px-[30px] border transition-all hover:bg-white hover:border-[#0BA42D] hover:text-[#0BA42D] rounded-[10px]`}>
                    <LuShoppingCart className="text-xl" />

                    {cart.some((x) => x.id == item?.id) ? (
                        <p className="text-[18px] font-bold">Added</p>
                    ) : (
                        <p className="text-[18px] font-bold">Add to Cart</p>
                    )}
                </button>
            </div>
        </div>
    ));

    return (
        <div className="grid grid-cols-3 gap-y-[66px] gap-x-9">
            {isFetching ? <Skleton /> : lists}
        </div>
    );
};

export default Product;
