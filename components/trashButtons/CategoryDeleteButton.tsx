import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

const CategoryDeleteButton = ({id}) => {
    const router = useRouter();

   const deleteCategoryById = async() => {
        const confirmed = confirm("Are you sure you want to delete this Category?")
        if(confirmed){
             await fetch(`/api/category/${id}`,  {
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json"
                }
            });
           // if(response.ok) router.refresh();
        }
        toast.success("Category Deleted Successfully!")
        // return await response.json();
       router.push("/pages/category")
    }
    return (
        <div>
           <button onClick={deleteCategoryById}>
               <AiOutlineDelete size={20} className={"text-red-500 hover:text-red-900 hover:bg-gray-300"}/>
           </button>
        </div>
    );
};

export default CategoryDeleteButton;
