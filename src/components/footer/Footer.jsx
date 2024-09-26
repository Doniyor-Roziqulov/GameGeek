import React from "react";
import { Link } from "react-router-dom";
import logo from "@/images/logofooter.svg";
import gg from "@/images/gg.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { footerlist, footerlist2, footerlist3 } from "@/static";
import { IoMdHelpCircle } from "react-icons/io";
import logos from "@/images/logos.svg";

const Footer = () => {
    return (
        <footer className="pt-[72px] pb-8 bg-[#0D2612]">
            <div className="pb-[55px]">
                <div className="container mx-auto max-w-[1310px] px-5">
                    <div className="flex justify-between">
                        <div>
                            <Link to={"/"}>
                                <img src={logo} alt="Footer logo" />
                            </Link>
                            <p className="text-[22px] footer-text inline-block mt-[14px]">
                                Start your game
                                <br />
                                with the best
                            </p>
                            <div className="flex items-center gap-x-[22px] mt-[145px]">
                                <a
                                    href="https://www.instagram.com/roziqulov_doniyor/"
                                    target="_blank">
                                    <FaTwitter className="text-2xl text-[#55ACEE]" />
                                </a>
                                <a
                                    className="bg-white rounded-sm w-[21px] h-[21px] flex items-center"
                                    href="https://www.instagram.com/roziqulov_doniyor/"
                                    target="_blank">
                                    <FaLinkedin className="text-2xl text-[#55ACEE]" />
                                </a>
                                <a
                                    className="rounded-full bg-white w-6 h-6 flex items-center"
                                    href="https://www.instagram.com/roziqulov_doniyor/"
                                    target="_blank">
                                    <FaFacebook className="text-2xl text-[#3B5998]" />
                                </a>
                                <a
                                    href="https://www.instagram.com/roziqulov_doniyor/"
                                    target="_blank">
                                    <FaInstagram className="text-2xl text-[#D9D9D9]" />
                                </a>
                            </div>
                        </div>
                        <div className="text-white flex gap-x-[125px]">
                            <div className="flex flex-col gap-y-[19px]">
                                <strong className="block mb-[10px] text-2xl">
                                    Services
                                </strong>
                                {footerlist.map((e, inx) => (
                                    <Link
                                        className="text-lg hover:opacity-60"
                                        key={inx}>
                                        {e}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-y-[19px]">
                                <strong className="block mb-[10px] text-2xl">
                                    Help{" "}
                                </strong>
                                {footerlist2.map((e, inx) => (
                                    <Link
                                        className="text-lg hover:opacity-60"
                                        key={inx}>
                                        {e}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-y-[19px]">
                                <strong className="block mb-[10px] text-2xl">
                                    About Us
                                </strong>
                                {footerlist3.map((e, inx) => (
                                    <Link
                                        className="text-lg hover:opacity-60"
                                        key={inx}>
                                        {e}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto max-w-[1310px] px-5 pt-8 border-t border-white">
                    <div className="flex justify-between items-center">
                        <Link>
                            <img src={gg} alt="" />
                        </Link>
                        <Link className="text-white text-lg flex items-center gap-x-[18px]">
                            <IoMdHelpCircle className="text-3xl" />
                            Help Center
                        </Link>
                        <Link className="text-white text-lg">
                            Privacy & Policy
                        </Link>
                        <Link className="text-white text-lg">
                            Terms of Service
                        </Link>
                        <div className="text-white flex items-center gap-x-2">
                            <Link className="text-white text-lg">
                                All rights reserved by
                            </Link>
                            <img
                                className="w-auto h-[15px]"
                                src={logos}
                                alt="a"
                            />
                            <p className="border-l-2 border-white pl-2">2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
