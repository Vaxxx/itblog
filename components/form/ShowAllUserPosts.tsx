"use client";
import React, {FC, useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {getUserIDByEmail, postsByAUser} from "@/app/actions/user/getUserByEmail";
import Loader from "@/components/Loader";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

interface InitialStateProps {
      title: string;
      message:string;
      image: string;
      createdAt: string;
}

const initialState: InitialStateProps = {
       title: '',
        message: '',
        image: '',
        createdAt: ''
};


const ShowAllUserPosts = async ({datum}) => {

    const {data: session} = useSession();
    const [isLoading, setIsLoading] = useState(false);

    const getUserIds = await getUserIDByEmail(session?.user?.email);
   const posts =  await postsByAUser(getUserIds)




    return (
        <div className={"min-w-4xl max-w-5xl"}>
            <div>
                {isLoading && (
                        <div><Loader/> </div>
                    )}
            </div>
            <div className={"float-right rounded-2xl mt-5 mr-5"}>
                <Link href={"/pages/post/add"}
                      className={"btn btn-bordered bg-blue-900 hover:bg-blue-600 text-white"}>
                    Add a Post</Link>
            </div>
            <div className="max-w-5xl bg-white px-6 py-24 sm:py-32 lg:px-8 text-gray-700">

                {
                    posts?.map((post) => (
                        <div key={post.id} className="mt-10 mx-auto w-full sm:max-w-sm">
                            <div className="max-w-5xl m-3 p-2 rounded-lg shadow-lg">
                                <Image priority src={post.image} alt={post.title} className="w-full rounded-lg"
                                       width={"400"} height={"150"}/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{post.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {post.message}
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                                    <span
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                                    <span
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                                </div>
                                <div className="px-6">
                                    {/*{new Date(post.createdAt).toLocaleString('uk', { timeZone: 'UTC' })}*/}
                                    {new Date(post.createdAt).toLocaleString('en', {
                                        timeZoneName: 'short',
                                        timeZone: 'Africa/Lagos'
                                    })}
                                </div>
                            </div>
                        </div>
                    ))
                    /* Add pagination control */


                    /* ///Add pagination control */
                }
            </div>
              <Footer/>
        </div>
    );
};

export default ShowAllUserPosts;
