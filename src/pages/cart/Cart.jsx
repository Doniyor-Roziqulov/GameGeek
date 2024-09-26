import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/context/slices/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { LuMoveLeft } from "react-icons/lu";
import { decrementCart } from "@/context/slices/cartSlice";
import {} from "number-brm";

const Cart = () => {
    const cart = useSelector((state) => state.cart.value);
    const [cartItem, setCartItem] = useState(cart);
    const [total, setTotal] = useState(0);
    const [inc, setInc] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const updateQuantity = (id, amount, btn = true) => {
        setCartItem((prev) =>
            btn
                ? prev.map((pro) =>
                      pro.id == id
                          ? { ...pro, quantity: pro.quantity + amount }
                          : pro
                  )
                : prev.map((pro) =>
                      pro.id == id ? { ...pro, quantity: amount } : pro
                  )
        );
    };

    useEffect(() => {
        const subtotal = cartItem.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0
        );
        setTotal(subtotal);
    }, [cartItem]);

    return (
        <section className="pt-[75px] pb-[118px]">
            <div className="container mx-auto max-w-[1310px] px-5">
                <button
                    onClick={() => navigate(-1)}
                    className="text-lg font-semibold mb-7 flex items-center gap-x-2 hover:opacity-60">
                    <LuMoveLeft /> Back to Shopping
                </button>
                <h2 className="text-[32px] mb-14">SHOPPING CART</h2>
                <div className="flex items-start justify-between">
                    <div className="pr-7 flex flex-col border-r-2">
                        <div className="text-[22px] flex items-center justify-between w-[760px] pb-2 pt-3 border-dashed border-b-2 border-[#6A6969] border-t-2">
                            <p>Product</p>
                            <div className="flex items-center gap-x-[110px]">
                                <p>Quantity</p>
                                <p>Price</p>
                            </div>
                        </div>
                        {cart?.map((pro) => {
                            return (
                                <div
                                    key={pro.id}
                                    className="flex w-[753px] py-[35px] border-dashed border-b-2 border-[#6A6969] justify-between items-start">
                                    <button
                                        className="hover:scale-125 transition-all"
                                        onClick={() => {
                                            dispatch(removeFromCart(cart._id));
                                        }}>
                                        <AiOutlineClose className="text-2xl" />
                                    </button>
                                    <div className="flex items-center justify-center w-[155px] h-[155px] bg-[#F4F4F4]">
                                        <img
                                            className="w-[100px] h-[100px] object-contain"
                                            src={pro?.image_url}
                                            alt="img"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl mb-2">
                                            {pro.brand_name.toUpperCase()}
                                        </h3>
                                        <h3 className="text-lg font-light mb-2">
                                            {pro.name}
                                        </h3>
                                        <p className="font-light mb-2">Black</p>
                                        <p className="text-[#0BA42D]">
                                            In stock
                                        </p>
                                    </div>
                                    <div className="flex items-center rounded-full bg-[#F5F5F5]">
                                        <button
                                            disabled={inc <= 1}
                                            onClick={() => {
                                                updateQuantity(pro.id, -1);
                                                setInc(inc - 1);
                                            }}
                                            className="pr-[30px] pl-[15px] py-[19px]">
                                            <FaMinus />
                                        </button>

                                        <p>{inc}</p>
                                        <button
                                            onClick={() => {
                                                updateQuantity(pro.id, +1);
                                                setInc(inc + 1);
                                            }}
                                            className="pl-[30px] pr-[15px] py-[19px]">
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <p className="text-2xl font-bold">
                                        ${pro.price}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <h2 className="text-[32px] mb-2">CART TOTALS</h2>
                        <div className="pt-9 pb-10 border-dashed border-y-2 border-[#6A6969] flex flex-col gap-y-5">
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-light">
                                    Shipping (3-5 Business Days)
                                </p>
                                <p className="text-lg font-medium">Free</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-light">
                                    TAX (estimated for the United States (US))
                                </p>
                                <p className="text-lg font-medium">$0</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-light">Subtotal</p>
                                <p className="text-lg font-medium">
                                    ${total.brm()}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-8 mb-14">
                            <p className="text-lg font-medium">Total</p>
                            <p className="text-lg font-medium">
                                ${total.brm()}
                            </p>
                        </div>
                        <button className="text-lg font-bold mb-11 text-white bg-[#0BA42D] rounded-[10px] py-4 w-full border hover:border-[#0BA42D] hover:bg-white hover:text-[#0BA42D] transition-all">
                            PROCEED TO CHECKOUT
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="text-lg w-full font-semibold justify-center flex items-center gap-x-2 hover:opacity-60">
                            <LuMoveLeft /> Back to Shopping
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
