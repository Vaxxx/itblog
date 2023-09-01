"use client";
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useRouter} from "next/navigation";
import {AiFillBackward, AiOutlineEdit, AiOutlineFileAdd} from "react-icons/ai";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";
import {getAllCategories} from "@/app/actions/category/getAllCategories";
import Link from "next/link";
import CategoryDeleteButton from "@/components/trashButtons/CategoryDeleteButton";
import axios from "axios";
import {BiSolidImageAdd} from "react-icons/bi";



const ViewCategoryPage = async() => {

  const categories = await getAllCategories();
    return (
        <div>
            <div className="ie bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mt-10 mx-auto w-full max-w-4xl text-center">
                    {/*Add Content Here */}
                 <div className={"flex flex-rows gap-4 items-start"}>
                     <div className={""}>
                         <Link href={"/pages/category/add"} className={"btn bg-slate-900 hover:bg-slate-600 ring-2 ring-gray-300 hover:ring-gray-800 rounded-lg shadow-md"}>
                             <BiSolidImageAdd />
                             Add Category</Link>
                     </div>
                     <div className={"ml-5"}>
                         <Link href={"/pages/dashboard"} className={"btn bg-slate-400 text-white hover:bg-slate-600 ring-2 ring-gray-300 hover:ring-gray-800 rounded-lg shadow-md"}>
                             <AiFillBackward/>
                             Back To Dashboard
                         </Link>
                     </div>
                 </div>
                    {/*show categories*/}

                    <h3 className={"text-2xl shadow-lg font-bold text-center text-md  my-5 mt-5"}>
                        All Categories
                    </h3>

                    <div className="overflow-x-auto h-96  mt-5 max-w-full">
                        <table className="table table-pin-rows border-solid border-1 p-2 border-gray-400 shadow-inner">
                            <thead className={"shadow-lg"}>
                            <tr>
                                <th>&diams;</th>
                                <th>TITLE </th>
                                <th>DESCRIPTION </th>
                                <th className={"underline shadow-lg text-lg"}><span className={"ml-2"}>Actions</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                               categories?.map((category:any) => (
                                   <tr key={category.id}>
                                      <td >{category.id}</td>
                                       <td>{category.title}</td>
                                       <td>{category.description}</td>
                                       <td className={"flex flex-rows gap-3 items-center"}>
                                           <Link href={`/pages/category/${category.id}`}>
                                               <AiOutlineEdit size={20} className={"text-green-500 mr-5 hover:text-green-900 hover:bg-gray-300"}/>
                                           </Link>
                                           <CategoryDeleteButton id={category.id}/>
                                       </td>
                                   </tr>
                               ))
                            }
                            </tbody>
                        </table>
                    </div>
                    {/*////show categories*/}

                    {/*///Add Content Here */}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ViewCategoryPage;
