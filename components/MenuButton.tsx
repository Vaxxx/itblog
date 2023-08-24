import React from 'react';
import {AiOutlineFileAdd, AiOutlineProfile, AiOutlineSetting} from "react-icons/ai";
import {BiSolidContact, BiSolidMessageSquareAdd} from "react-icons/bi";
import Link from "next/link";

const MenuButton = () => {
    return (
        <div>
            <div className={"p-3 my-4 mt-5  hidden:md"}>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/pages/category"} className={"flex flex-row items-start justify-center gap-5"}>
                        <AiOutlineFileAdd size={30}/> <span className={"pt-2"}>Add Category</span>
                    </Link>
                </button>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/pages/post"} className={"flex flex-row  gap-5 items-start justify-start"}>
                        <BiSolidMessageSquareAdd  size={30}/> <span className={"pt-2"}>Add Post</span>
                    </Link>
                </button>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/profile"} className={"flex flex-row items-start justify-start gap-5"}>
                        <AiOutlineProfile  size={30} /><span className={"pt-2"}> Profile</span>
                    </Link>
                </button>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/settings"} className={"flex flex-row items-start justify-start gap-5"}>
                        <AiOutlineSetting size={30} /> <span className={"pt-2"}>Settings</span>
                    </Link>
                </button>
                <button className="flex justify-start btn btn-default  drawer-button ring-2 ring-gray-300 hover:text-black hover:bg-white rounded-lg w-full mb-5 mt-3 hidden:md">
                    <Link href={"/pages/contact"} className={"flex flex-row items-start justify-start gap-5"}>
                        <BiSolidContact size={30} /><span className={"pt-2"}> Contact Us</span>
                    </Link>
                </button>
            </div>

        </div>
    );
};

export default MenuButton;
