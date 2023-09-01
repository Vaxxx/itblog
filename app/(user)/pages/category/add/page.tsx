"use client";
import React, {FormEvent, useRef, useState} from 'react';
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";
import {AiFillBackward, AiOutlineFileAdd} from "react-icons/ai";
import {addCategoryDetails} from "@/app/actions/category/getAllCategories";
import Link from "next/link";

interface InitialStateProps {
    title: string;
    description: string;
}

const initialState: InitialStateProps = {
    title: '',
    description: ''
}

const AddCategoryPage = async() => {
    const [isLoading, setIsLoading] = useState(false);
    //const [data, setData] = useState(initialState);
    const router = useRouter();
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

    const addCategory = async(event: FormEvent) => {
        event.preventDefault();
        try{
            if(titleRef.current && descriptionRef.current){
                setIsLoading(true);
                await addCategoryDetails({
                    title: titleRef.current?.value,
                    description: descriptionRef.current?.value
                });
                toast.success("Category Added Successfully");
                router.push("/pages/category")
            }
        }catch(error){
            console.log("ADD CATEGORY ERROR: " + error);
        }finally{
            setIsLoading(false);
        }
    }

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
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <Link href={"/pages/category"} className={"hover:text-gray-600 hover:bg-slate-400"}>
                            <AiFillBackward/>
                        </Link>
                        Add A Category &darr;
                    </h2>
                </div>
                <div className="mt-10 mx-auto w-full max-w-sm text-center">
                    {/*Add Content Here */}
                        <form onSubmit={addCategory}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">What is the title?</span>
                                </label>
                                <input
                                    required
                                    ref={titleRef}
                                    name={"title"}
                                    type="text"  placeholder="Enter Title"
                                    className="input input-secondary w-full max-w-xs hover:ring-2 hover:ring-blue-500" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">What is the Description?</span>
                                </label>
                                <textarea
                                    required
                                    ref={descriptionRef}
                                    name={"description"}
                                    minLength={"10"}
                                    maxLength={"1000"}
                                    className="textarea textarea-bordered h-50 w-full max-w-xs hover:ring-2 hover:ring-blue-500" placeholder="Enter Description"></textarea>
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <button type={"submit"} className={"btn btn-active hover:ring-2 hover:ring-blue-500 "}><AiOutlineFileAdd size={20}/> Add Category</button>
                            </div>

                        </form>
                    {/*///Add Content Here */}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AddCategoryPage;
