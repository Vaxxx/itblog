"use client";
import React from 'react';

import Image from "next/image";
import Footer from "@/components/Footer";

import MenuButton from "@/components/MenuButton";
import Drawer from "@/components/Drawer";
// import {getServerSession} from "next-auth";
// import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {useSession} from "next-auth/react";

const Dashboard =  () => {

    // const session = await getServerSession((authOptions))
   const {data: session} = useSession();
    return (
        <div>
            <h3 className={"text-center text-2xl uppercase shadow-lg"}>Dashboard</h3>
            <div className="grid grid-cols-4 gap-4 px-3">
                {/*main column*/}

                <div className="col-span-3 min-w-fit px-2 mt-4">
                    <h3 className={"text-3xl text-bold my-3 text-center opacity-75 shadow-inner border-slate-950"}>Hello {session?.user?.name}!</h3>
                    {
                        session?.user?.image ??  <Image
                            src={"/placeholder.jpg"}
                            alt={"User Avatar"}
                            width={"200"}
                            height={"80"}
                            className={"w-full"}
                        />
                    }
                    <div className={"mb-2"}>
                        <ul className={"list-disc text-white"}>
                            <li className={"flex flex-row items-center shadow-md border rounded-lg ring-2 ring-gray-100 my-3 hover:ring-gray-500 hover:border-5 hover:border-slate-300 hover:text-gray-300"}>
                                <span className={"text-lg text-bold mx-3"}>Full Name: </span>
                                <p className={"text-2xl text-bold"}>{session?.user?.name}</p>
                            </li>
                            <li className={"flex flex-row items-center shadow-md border rounded-lg ring-2 ring-gray-100 my-3 hover:ring-gray-500 hover:border-5 hover:border-slate-300 hover:text-gray-300"}>
                                <span className={"text-lg text-bold mx-3"}>Email</span>
                                <p className={"text-2xl text-bold"}>{session?.user?.email ?? 'email'}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*end main column*/}
                {/*start right column*/}
                <div className="col-span-1 ">
                    {/* Start Drawer */}
                      <Drawer/>
                    {/* End Drawer */}
                  <div className={"hidden md:block"}>
                      <MenuButton/>
                  </div>
                </div>
                {/*end right column*/}
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard;
