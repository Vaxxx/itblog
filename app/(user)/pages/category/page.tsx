"use client";
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useRouter} from "next/navigation";
import {AiOutlineDelete, AiOutlineEdit, AiOutlineFileAdd} from "react-icons/ai";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";
import getAllCategories from "@/app/actions/category/getAllCategories";
import Link from "next/link";

interface InitialStateProps{
    title: string;
}

const initState: InitialStateProps = {
    title: ''
}



interface SearchProps{
    searchParams: string;
}



const AddCategoryPage = async({searchParams} : SearchProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initState);
    const router = useRouter();

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setData({...data, [event.target.name] : event.target.value});
        console.log(data);
    }

    const addCategory = async(event: FormEvent) => {
        event.preventDefault();
       try{
           setIsLoading(true);
          await axios.post('/api/category', data)
               .then(() => {
                   toast.success("Category Added Successfully!")
                   router.push("/pages/dashboard")
               })
               .catch((error) => {
                   throw new Error("Failed To create a new Category: " + error)
               });
           // router.refresh();
         }catch(error){
           console.log("ADD CATEGORY ERROR: " + error);
         }finally{
           setIsLoading(false);
       }
    }

  const categories = await getAllCategories();
    console.log(categories)
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> ADD CATEGORY &darr;</h2>

                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*Add Content Here */}
                      <form onSubmit={addCategory}>
                          <div className="form-control w-full max-w-xs">
                              <label className="label">
                                  <span className="label-text">What is the title?</span>
                              </label>
                              <input
                                  value={data.title}
                                  required
                                  onChange={handleChange}
                                  name={"title"}
                                  type="text"  placeholder="Enter title"
                                  className="input input-bordered w-full max-w-xs hover:ring-2 hover:ring-blue-500" />
                          </div>

                          <div className="form-control w-full max-w-xs mt-5">
                              <button type={"submit"} className={"btn btn-active hover:ring-2 hover:ring-blue-500 "}><AiOutlineFileAdd size={20}/> Add Category</button>
                          </div>

                      </form>

                    {/*show categories*/}

                    <h3 className={"text-2xl shadow-lg font-bold text-center text-md  my-5"}>
                        All Categories
                    </h3>

                    <div className="overflow-x-auto h-96 mt-5">
                        <table className="table table-pin-rows border-solid border-1 p-2 border-gray-400 shadow-inner">
                            <thead className={"shadow-lg"}>
                            <tr>
                                <th>&diams;</th>
                                <th>CATEGORIES </th>
                                <th className={"underline shadow-lg text-lg"}><span className={"ml-2"}>Actions</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                               categories?.map((category:any) => (
                                   <tr key={category.id}>
                                      <td >{category.id}</td>
                                       <td>{category.title}</td>
                                       <td className={"flex flex-rows gap-3 items-center"}>
                                           <Link href={`/pages/category/${category.id}`}><AiOutlineEdit size={20} className={"text-green-500 mr-5 hover:text-green-900 hover:bg-gray-300"}/></Link>
                                            <AiOutlineDelete size={20} className={"text-red-500 hover:text-red-900 hover:bg-gray-300"}/>
                                       </td>
                                   </tr>
                               ))
                            }
                            </tbody>
                        </table>
                    </div>
                    {/*///show categories*/}

                    {/*///Add Content Here */}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AddCategoryPage;
