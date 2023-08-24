import axios from "axios";
import prisma from "@/libs/db";


 export default async function getAllCategories(){
     const response = await fetch("/api/category", {
         next: {
             revalidate: 3600
         }
     })
     const data = await response.json();
     return data.result;
}