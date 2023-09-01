import axios from "axios";
import prisma from "@/libs/db";


 export async function getAllCategories(){
     const response = await fetch("http://localhost:3000/api/category",{
         cache: "no-store"
     })
     const data = await   response.json();
     return data.result;
}

export const addCategoryDetails = async({title, description} : {title: string;description: string;}) => {
     const response = await fetch("http://localhost:3000/api/category", {
         method: "POST",
         body: JSON.stringify({title, description}),
         headers: {
             "Content-Type" : "application/json"
         }
     });
     return await response.json();
}