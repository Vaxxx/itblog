import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {HiOutlineSearch} from "react-icons/hi";
import SocialNetwork from "@/components/SocialNetwork";

const Footer = () => {
    return (
        <>
            <div className={"text-center bg-slate-950 p-2 pb-5 rounded-md"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:grid-cols-1 md-cols-1">
                    {/*start first footer column */}
                       <div className={"flex flex-col m-3 items-center justify-center"}>
                           <Image
                               src={"/logo.png"}
                               alt={"logo"}
                               width={"150"}
                               height={"40"}
                           />
                           <h2 className={"text-2xl underline mt-2"}>IT Trends</h2>
                           <p className={"mt-2 text-center text-sm"}>
                               We provide latest information trending in the Information Technology Sphere.
                               Always stay in touch to get all the juicy gist.;
                           </p>
                       </div>
                    {/*end first footer column */}
                    {/*start second footer column */}
                       <div className={"mt-3"}>
                           <h2 className={"text-2xl text-bold shadow:lg underline hover:bg-slate-700"}>Menu</h2>
                          <ul>
                              <li className={"text-lg font-bold hover:underline"}><Link href={"/pages/dashboard"}>Dashboard</Link></li>
                              <li className={"text-lg font-bold hover:underline"}><Link href={"/pages/about"}>About Us</Link></li>
                              <li className={"text-lg font-bold hover:underline"}><Link href={"/pages/posts/"}>Posts </Link></li>
                              <li className={"text-lg font-bold hover:underline"}><Link href={"/pages/contact"}>Contact Us</Link></li>
                          </ul>
                       </div>
                    {/*end second footer column */}
                    {/*first third footer column */}
                    <div className="flex items-center space-x-2 px-2 ml-2 flex-col text-gray-500">
                       <div className={"flex flex-row gap-2 bg-white p-2 rounded-2xl mb-3 cursor-pointer shadow-md ring-slate-600"}>
                           <HiOutlineSearch size={20}/>
                           <input className="hidden lg:inline-flex bg-transparent focus:outline-none" type="text" placeholder="Search IT-Trends"/>
                       </div>
                        <div className={"flex flex-row gap-4"}>
                            <SocialNetwork />
                        </div>
                    </div>
                    {/*end third footer column */}
                </div>
            </div>


            <div className={"text-center bg-slate-950 p-2 mb-5"}>
                <p className={"text-lg hover:underline"}>&copy; Copyright 2023 Create Software International. Designed by VAX</p>
            </div>
       </>
    );
};

export default Footer;
