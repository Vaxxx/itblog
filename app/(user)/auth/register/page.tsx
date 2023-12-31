"use client";
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";
import Loader from "@/components/Loader";
import {useSession} from "next-auth/react";
import Link from "next/link";

interface InitialStateProps{
    name: string;
    username: string;
    email:string;
    password:string;
}

const initialState: InitialStateProps= {
    name: '',
    username: '',
    email: '',
    password:''

}

const RegisterPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialState);
    const router = useRouter();
    const session = useSession();

    {/*  if signed in, redirect to dashboard */}
    useEffect(() => {
        if(session?.status === 'authenticated'){
            router.push("pages/dashboard");
        }
    }, []);

    function handleChange(event:any){
        setData({...data, [event.target.name] : event.target.value});
    }

    const registerUser = async(event:any) => {
        event.preventDefault();
        axios.post("/api/register", {
            ...data,
            redirect:false
        })
            .then((callback) => {
                if(callback?.ok) router.reload()
                if(callback?.error)throw new Error("")
            })
        router.push("/auth/signin")
    }

    return (
        <div>
            {
                isLoading && (
                    <div>
                        <Loader/>
                    </div>
                )
            }
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">REGISTER FOR AN ACCOUNT HERE &rarr;</h2>
                    {/*<p className="mt-2 text-lg leading-8 text-gray-600">*/}
                    {/*    *Please enssolature your credentials are correct*/}
                    {/*</p>*/}
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*Add Content Here */}
                     <form onSubmit={registerUser}>
                         <div className="form-control w-full max-w-xs">
                             <label className="label">
                                 <span className="label-text">What is your name?</span>
                             </label>
                             <input
                                 name={"name"}
                                 required
                                 value={data.name}
                                 onChange={handleChange}
                                 type="text" placeholder="Enter Full Name" className="input input-bordered bg-slate-300 w-full max-w-xs hover:ring-2 hover:ring-blue-500 " />
                         </div>

                         <div className="form-control w-full max-w-xs">
                             <label className="label">
                                 <span className="label-text">What is your user name?</span>
                             </label>
                             <input
                                 name={"username"}
                                 required
                                 value={data.username}
                                 onChange={handleChange}
                                 type="text" placeholder="Enter User Name" className="input input-bordered  bg-slate-300 w-full max-w-xs hover:ring-2 hover:ring-blue-500 " />
                         </div>


                         <div className="form-control w-full max-w-xs">
                             <label className="label">
                                 <span className="label-text">What is your email address?</span>
                             </label>
                             <input
                                 name={"email"}
                                 required
                                 value={data.email}
                                 onChange={handleChange}
                                 type="email" placeholder="Enter Email Address" className="input input-bordered  bg-slate-300 w-full max-w-xs hover:ring-2 hover:ring-blue-500 " />
                         </div>

                         <div className="form-control w-full max-w-xs">
                             <label className="label">
                                 <span className="label-text">What is your password?</span>
                             </label>
                             <input
                                 name={"password"}
                                 required
                                 value={data.password}
                                 onChange={handleChange}
                                 type="password" placeholder="**********" className="input input-bordered  bg-slate-300 w-full max-w-xs hover:ring-2 hover:ring-blue-500 " />
                         </div>

                         <div className="form-control w-full max-w-xs mt-5">
                             <button type={"submit"} className={"btn btn-active hover:ring-2 hover:ring-blue-800 "}>Sign Up</button>
                         </div>

                         <Link href={"/auth/signin"} className={"mt-5 my-5 rounded-lg text-red-800 p-4 hover:text-blue-400 hover:underline"} >Already have an account, Sign In</Link>
                     </form>
                    {/*///Add Content Here */}
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
