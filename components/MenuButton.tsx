import React from 'react';
import {AiOutlineProfile, AiOutlineSetting} from "react-icons/ai";
import {BiSolidContact, BiSolidMessageSquareAdd} from "react-icons/bi";
import Link from "next/link";

const MenuButton = () => {
    return (
        <div>
            <div className={"p-3 my-4 mt-5  hidden:md"}>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/pages/post"} className={"flex flex-row items-start justify-start gap-5"}>
                        <BiSolidMessageSquareAdd  size={30}/> Add Post
                    </Link>
                </button>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/profile"} className={"flex flex-row items-start justify-start gap-5"}>
                        <AiOutlineProfile  size={30} /> Profile
                    </Link>
                </button>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/settings"} className={"flex flex-row items-start justify-start gap-5"}>
                        <AiOutlineSetting size={30} /> Settings
                    </Link>
                </button>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/pages/contact"} className={"flex flex-row items-start justify-start gap-5"}>
                        <BiSolidContact size={30} /> Contact Us
                    </Link>
                </button>
            </div>

        </div>
    );
};

export default MenuButton;
