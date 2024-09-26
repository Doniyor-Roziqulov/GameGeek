import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import gg from "@/images/GG.svg";
import map from "@/images/map.svg";
import logo from "@/images/logo.svg";
import { VscCallIncoming } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import { Select, Space } from "antd";
import { navbarlist } from "@/static";
import { useSelector } from "react-redux";

const Header = () => {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const cartLength = useSelector((state) => state.cart.value.length);

    const lists = navbarlist.map((e) => (
        <li key={e.id}>
            <NavLink className="font-medium text-[#0D2612]" to={`${e.url}`}>
                {e.title}
            </NavLink>
        </li>
    ));

    return (
        <header
            className={`header fixed left-0 top-0 right-0 bg-white z-10 ${
                isShrunk && "h-[80px]"
            }`}>
            <div
                className={`bg-[#0D2613] relative left-0 right-0 top-0 py-[19px] transition-[0.5s] ${
                    isShrunk &&
                    "absolute top-[-90px] left-0 right-0 transition-[0.5s]"
                }`}>
                <div className="container mx-auto max-w-[1310px] px-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-8">
                            <Link to={"/"}>
                                <img src={gg} alt="gg logo" />
                            </Link>
                            <a
                                className="text-white flex items-center gap-x-[17px]"
                                href="tel:+4904049950">
                                <VscCallIncoming className="text-xl" />
                                +4904-049-950
                            </a>
                        </div>
                        <div className="text-white text-sm flex items-center gap-x-[25px]">
                            <p className="pr-[25px] border-[#14FF00] border-r-2">
                                Get 50% Off on the Selected items
                            </p>
                            <Link>Shop now</Link>
                        </div>
                        <div className="flex items-center gap-x-11">
                            <Space wrap>
                                <Select
                                    className="bg-transparent"
                                    defaultValue="English"
                                    style={{ width: 90 }}
                                    options={[
                                        { value: "english", label: "English" },
                                        { value: "russian", label: "Russian" },
                                        {
                                            value: "uzbek",
                                            label: "Uzbek",
                                        },
                                    ]}
                                />
                            </Space>
                            <a
                                className="text-white text-sm flex items-center gap-x-2"
                                href="https://maps.app.goo.gl/jfn2F6L9Afk4arBT8"
                                target="_blank">
                                <img src={map} alt="" />
                                Location
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`absolute bg-white left-0 right-0 ${
                    isShrunk &&
                    "absolute  bg-neutral-200 top-0 h-[80px] left-0 right-0"
                }`}>
                <div
                    className={`container mx-auto max-w-[1310px] px-5 border-b py-[39px] ${
                        isShrunk && "pt-6 h-[80px]"
                    }`}>
                    <div className="flex items-center justify-between">
                        <Link to={"/"}>
                            <img src={logo} alt="Site's logo" />
                        </Link>
                        <ul className="flex items-center gap-x-10">{lists}</ul>
                        <div className="flex items-center gap-x-[42px]">
                            <div className="flex items-center w-32 relative rounded-sm">
                                <input
                                    className="w-full py-1 rounded-sm z-10 bg-transparent"
                                    type="search"
                                />
                                <IoSearch className="absolute right-0 z-[1] text-lg" />
                            </div>
                            <Link to={"/account"}>
                                <LuUser className=" text-lg" />
                            </Link>
                            <Link className="flex relative" to={"/cart"}>
                                <LuShoppingCart className=" text-lg" />
                                {cartLength !== 0 && (
                                    <sup className="absolute top-[-10px] right-[-15px] rounded-full w-5 h-5 bg-black text-white flex items-center justify-center">
                                        {cartLength}
                                    </sup>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
