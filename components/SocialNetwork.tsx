import React from 'react';
import Link from "next/link";
import {AiFillFacebook, AiFillInstagram, AiFillMail, AiFillTwitterSquare} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";

const SocialNetwork = () => {
    return (
        <div className={"flex flex-row gap-3"}>
            <div className={"bg-slate-800 hover:bg-slate-500 hover:text-blue-500 rounded-lg p-2 m-1"}>
                <Link href={"https://www.facebook.com/vaxworld/"}>
                     <AiFillFacebook size={40}/>
                </Link>
            </div>
            <div className={"bg-slate-800 hover:bg-slate-500 hover:text-red-400 rounded-lg p-2 m-1"}>
                <Link href={"https://www.instagram.com/vaxlive"}>
                    <AiFillInstagram size={40}/>
                </Link>
            </div>
            <div className={"bg-slate-800 hover:bg-slate-500 hover:text-blue-500 rounded-lg p-2 m-1"}>
                <Link href={"https://twitter.com/OkagbareVakpo"}>
                    <AiFillTwitterSquare size={40}/>
                </Link>
            </div>
            <div className={"bg-slate-800 hover:bg-slate-500 hover:text-blue-500 rounded-lg p-2 m-1"}>
                <Link href={"https://www.linkedin.com/in/okagbare-vakpo-38a757134/"}>
                    <BsLinkedin size={40}/>
                </Link>
            </div>
            <div className={"bg-slate-800 hover:bg-slate-500 hover:text-slate-600 rounded-lg p-2 m-1"}>
                <Link href={"https://github.com/Vaxxx"}>
                    <FaGithubSquare size={40}/>
                </Link>
            </div>
            <div className={"bg-slate-800 hover:bg-slate-500 hover:text-red-800 rounded-lg p-2 m-1"}>
                <Link href={"mailto:vakpo.okagbare@gmail.com"}>
                    <AiFillMail size={40}/>
                </Link>
            </div>
        </div>
    );
};

export default SocialNetwork;
