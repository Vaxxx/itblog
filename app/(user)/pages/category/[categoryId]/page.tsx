"use client";
import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react';
import Footer from "@/components/Footer";
import {AiOutlineEdit} from "react-icons/ai";
import Link from "next/link";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {GiCancel} from "react-icons/gi";
import {getCategoryById, updateCategoryById} from "@/app/actions/category/getCategoryById";
import Loader from "@/components/Loader";


interface InitialStateProps{
    description: string;
    title: string;
    id: number;
}

const initialState: InitialStateProps = {
    id: '',
    title: '',
    description: ''
}

const CategoryIdPage = ({params} : {params: {id: number}}) => {
    const [isLoading, setIsLoading]  = useState(false)
    const [data, setData] = useState(initialState);
    const router = useRouter();
   // const params = useParams();
   //  console.log(params.categoryId)
   //  const test = getCategoryById(params.categoryId);
   //  console.log(test)

    useEffect(() => {
        try{
            setIsLoading(true);
            getCategoryById(params.categoryId)
                .then((category) => {
                    setData(category);
                    toast.success("Fetching Complete!")
                })
                .catch((error) => {
                    toast.error("Error Fetching Category: ", error);
                });
          }catch(error){
            console.log(" Category ID Page ERROR: " + error);
          }finally{
            setIsLoading(false);
        }
    }, []);

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setData({...data, [event.target.name]: event.target.value});
    }

    const updateCategory = async(event: FormEvent) => {
        event.preventDefault();
      try{
         // toast.loading("Updating Category.");
          setIsLoading(true);
          await updateCategoryById({
              title: data.title,
              description: data.description,
              id: params.categoryId
          });
          toast.success("Category Updated Successfully!");
          router.push("/pages/category");
        }catch(error){
          console.log("UPDATE ERROR: " + error);
        }
        finally {
          setIsLoading(false);
      }
    }

    return (
        <>
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> EDIT CATEGORY &darr;</h2>

                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*Add Content Here */}
                    <form onSubmit={updateCategory}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Title!</span>
                            </label>
                            <input
                                value={data.title}
                                required
                                onChange={handleChange}
                                name={"title"}
                                type="text"  placeholder="Enter title"
                                className="input input-bordered w-full max-w-xs hover:ring-2 hover:ring-blue-500" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description!</span>
                            </label>
                            <textarea
                                value={data.description}
                                required
                                onChange={handleChange}
                                name={"description"}   placeholder="Enter description"
                                minLength={"10"}
                                maxLength={"1000"}
                                className="textarea textarea-bordered h-40 w-full max-w-xs hover:ring-2 hover:ring-blue-500" />
                        </div>
                         <div className={"flex flex-rows gap-3"}>
                             <div className="form-control w-full max-w-xs mt-5">
                                 <Link href={"/pages/category"} title={"Go Back To Category Page"} type={"submit"} className={"btn bg-gray-500 hover:ring-2 hover:ring-blue-500 rounded-lg"}><GiCancel size={20}/> Cancel</Link>
                             </div>
                             <div className="form-control w-full max-w-xs mt-5">
                                 <button type={"submit"} className={"btn btn-active hover:ring-2 hover:ring-blue-500 rounded-lg"}><AiOutlineEdit size={20}/> Update Category</button>
                             </div>
                         </div>

                    </form>

                    {/*///Add Content Here */}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default CategoryIdPage;
