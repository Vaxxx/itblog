"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {CgProfile} from "react-icons/cg";
import {BiSolidContact} from "react-icons/bi";
import {AiFillDashboard, AiOutlineSetting} from "react-icons/ai";
import {FcAbout} from "react-icons/fc";
import {BsFillFileEarmarkPostFill} from "react-icons/bs";

const Navbar = () => {
   const {data: session} = useSession();
   // const session = await getServerSession(authOptions);
    // console.log("SEssion DETAILS:")
    // console.log(session)
    return (
         <>
             <div className="navbar bg-base-100 sticky z-40">
                 <div className="navbar-start">
                     <div className="dropdown">
                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </label>
                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                             <li><Link href={"/pages/dashboard"}><AiFillDashboard size={20}/> Dashboard</Link></li>
                             <li><Link href={"/pages/about"}><FcAbout size={20}/> About Us</Link></li>
                             <li>
                                 <Link href={"/pages/post/myPost"}><BsFillFileEarmarkPostFill size={20}/> My Posts</Link>
                                 <ul className="p-2">
                                     <li><Link href={"/pages/posts/postId"}>Post 1</Link></li>
                                     <li><Link href={"/pages/posts/postId"}>Post 2</Link></li>
                                 </ul>
                             </li>
                             <li><Link href={"/pages/contact"}><BiSolidContact size={20}/> Contact Us</Link></li>
                             <li><Link href={"/profile"}><CgProfile size={20}/> Profile</Link></li>
                             <li><Link href={"/settings"}><AiOutlineSetting size={20}/> Settings</Link></li>
                         </ul>
                     </div>
                     <Link href={"/"} className="btn btn-ghost normal-case text-xl">
                         <Image src={"/logo.png"} width={"50"} height={"50"} alt={"CSI Logo"}/>
                         IT-Trends
                     </Link>
                 </div>
                 <div className="navbar-center hidden lg:flex">
                     <ul className="menu menu-horizontal px-1">
                         <li><Link href={"/pages/dashboard"}>Dashboard</Link></li>
                         <li><Link href={"/pages/about"}>About Us</Link></li>
                         <li tabIndex={0}>
                             <details>
                                 <summary><Link href={"/pages/post/myPost"}>Trending Posts</Link></summary>
                                 <ul className="p-2">
                                     <li><Link href={"/pages/posts/postId"}>Post 1</Link></li>
                                     <li><Link href={"/pages/posts/postId"}>Post 2</Link></li>
                                 </ul>
                             </details>
                         </li>
                         <li><Link href={"/pages/contact"}>Contact Us</Link></li>
                     </ul>
                 </div>
                <div className={"navbar-end"}>
                    <div className="dropdown dropdown-end">
                        {!session?.user ? (
                            <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    src={"/placeholder.jpg"}
                                    alt={"avatar"}
                                    width={"20"}
                                    height={"20"}/>
                            </div>
                        </label>

                             <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                 <li>
                                     <Link href={"/auth/signin"}>Sign In </Link>
                                 </li>
                                 <li><Link href={"/auth/register"}>Sign Up</Link></li>

                             </ul>
                         </>
                        ):(
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            session?.user.image == null ?
                                                session?.user.name.split(' ').map(name => name[0]).join('').toUpperCase()
                                                :
                                                <Image
                                                    src={session?.user?.image}
                                                    alt={"avatar"}
                                                    width={"20"}
                                                    height={"20"}/>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link href={"/pages/dashboard"} className="justify-between">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/profile"} className="justify-between">
                                            Profile
                                        </Link>
                                    </li>
                                    <li><Link href={"/settings"}>Settings</Link></li>
                                    <li><button className={"bg-red-500 text-white rounded-lg"}
                                      onClick={()=>signOut()}
                                    >Sign Out</button></li>
                                </ul>
                            </>
                        )}

                    </div>
                </div>
             </div>
         </>
    );
};

export default Navbar;
