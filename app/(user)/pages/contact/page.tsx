import React from 'react';
import Image from  "next/image";
import Link from  "next/link";
import {AiOutlineProfile, AiOutlineSetting} from "react-icons/ai";
import {BiSolidContact, BiSolidMessageSquareAdd} from "react-icons/bi";
import {GiHamburgerMenu} from "react-icons/gi";
import Footer from "@/components/Footer";
import SocialNetwork from "@/components/SocialNetwork";

const ContactPage = () => {
    return (
        <div>
            <h2 className={"text-center text-3xl text-bold shadow-lg"}>Contact Us</h2>
            <div className={"mx-auto mt-2 p-3"}>
                <Image
                    src={"/contact.jpg"}
                    alt={"Contact CSI"}
                    width={"1000"}
                    height={"100"}
                    className={"w-full"}
                />
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                <div className={"col-span-2 p-3 mx-auto px-5"}>
                    <h2 className={"text-xl text-center shadow-lg text-bold mb-5"}>Send Us A Message</h2>
                    <form>
                        <div className="form-control w-full max-w-xs mb-5 mt-5">
                            <label className="label">
                                <span className="label-text text-xl">What is your full name?</span>
                            </label>
                            <input type="text" placeholder="Enter Your Full Name" className="input input-bordered w-full max-w-xs w-200 hover:bg-gray-400 hover:text-black ring-2 ring-gray-300" name={"name"}/>
                        </div>
                        <div className="form-control w-full max-w-xs mb-5 mt-5">
                            <label className="label">
                                <span className="label-text text-xl">What is your Phone Number?</span>
                            </label>
                            <input type="text" placeholder="Enter Your Phone Number" className="input input-bordered w-full max-w-xs w-200 hover:bg-gray-400 hover:text-black ring-2 ring-gray-300" name={"phone"} />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5 mt-5">
                            <label className="label">
                                <span className="label-text text-xl">What is your Email Address?</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email Address" className="input input-bordered w-full max-w-xs w-200 hover:bg-gray-400 hover:text-black ring-2 ring-gray-300" name={"email"} />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5 mt-5">
                            <label className="label">
                                <span className="label-text text-xl">What is your Message?</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24 w-full max-w-xs w-200 hover:bg-gray-400 hover:text-black ring-2 ring-gray-300" placeholder="Enter Your Message"></textarea>
                        </div>
                        <div className={"w-full max-w-xs mt-5"}>
                            <button type={"submit"} className={"btn btn-active btn-ghost text-center hover:bg-slate-900 hover:text-gray-300"}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className={"px-3 mt-5"}>
                    {/* Start Drawer */}
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="flex justify-end btn btn-default  drawer-button ring-2 ring-gray-300">
                                <GiHamburgerMenu className="ml-2" /> Menu
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li><Link href={"/profile"}>Profile</Link></li>
                                <li><Link href={"/settings"}>Settings</Link></li>
                                <li><Link href={"/pages/posts"}>Add Post</Link></li>
                                <li><Link href={"/pages/about"}>About Us</Link></li>
                                <li><Link href={"/pages/contact"}>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* End Drawer */}
                    <div>
                        <div className={"p-3 my-4 mt-5"}>
                            <ul className={"list-disc my-4"}>
                                <h3 className={"text-2xl"}>Reach Us Now</h3>
                                <li className={"mt-4"}>
                                    <span className={"text-xl underline hover"}>Email:</span>
                                    <p className={"antialiased"}>vakpo.okagbare@gmail.com</p>
                                    <p>info@createsoftware.com.ng</p>
                                </li>
                                <li className={"mt-4"}>
                                    <span className={"text-xl underline"}>Phone:</span>
                                    <p>+234 90 6468 9548</p>
                                </li>
                                <li className={"mt-4"}>
                                    <span className={"text-xl underline"}>Social Network</span>
                                    <div>
                                        <SocialNetwork/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"p-2"}>
                <Footer/>
            </div>
        </div>
    );
};

export default ContactPage;
