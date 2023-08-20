import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import Link from "next/link";
import {FcAbout} from "react-icons/fc";
import {AiOutlineProfile, AiOutlineSetting} from "react-icons/ai";
import {BiSolidContact, BiSolidMessageSquareAdd} from "react-icons/bi";

const Drawer = () => {
    return (
        <div>
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
                        <li><Link href={"/profile"}>   <AiOutlineProfile  size={40}  /> Profile</Link></li>
                        <li><Link href={"/settings"}>  <AiOutlineSetting size={40} /> Settings</Link></li>
                        <li><Link href={"/pages/posts"}> <BiSolidMessageSquareAdd size={40} />Add Post</Link></li>
                        <li><Link href={"/pages/about"}><FcAbout size={40} />  About Us</Link></li>
                        <li><Link href={"/pages/contact"}> <BiSolidContact size={40}  /> Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
