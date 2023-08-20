"use client";
import React,{useState} from 'react';
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

interface InitialStateProps{
    email: string;
    password: string;
}

const initialState: InitialStateProps = {
    email: '',
    password: ''
}

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialState);
    const router = useRouter();

    function handleChange(event: any){
        setData({...data, [event.target.name] : event.target.value});
    }

    const loginUser = async(event:FormEvent) => {
       try{
           event.preventDefault();
           setIsLoading(true);
           await signIn("credentials", {
               ...data,
               redirect: false,
           }).then((callback) => {
               if(callback?.error){
                   toast.error("Something went wrong! " + callback.error)
               }else if(callback?.ok && !callback?.error){
                   toast.success("Login is Successful!");
                   router.push("/pages/dashboard")
               }
           })
         }catch(error){
           console.log("LOGIN ERROR: " + error);
         }finally {
           setIsLoading(false);
       }
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> LOGIN TO YOUR ACCOUNT</h2>
                    {/*<p className="mt-2 text-lg leading-8 text-gray-600">*/}
                    {/*    *Please enssolature your credentials are correct*/}
                    {/*</p>*/}
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={loginUser}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email Address:</span>
                            </label>
                            <input
                                value={data.email}
                                onChange={handleChange}
                                type="email" name={"email"} placeholder="Enter Email Address"
                                className="input input-bordered w-full max-w-xs hover:ring-2 hover:ring-blue-500" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text">Password:</span>
                            </label>
                            <input
                                value={data.password}
                                onChange={handleChange}
                                type="password" name={"password"} placeholder="**********"
                                className="input input-bordered w-full max-w-xs hover:ring-2 hover:ring-blue-500" />
                        </div>
                        <div className="form-control w-full max-w-xs mt-5">
                            <button type={"submit"} className={"btn btn-active hover:ring-2 hover:ring-blue-500 "}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default LoginPage;
