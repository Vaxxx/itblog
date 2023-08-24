import prisma from "@/libs/db";
import {NextResponse} from "next/server";


interface RequestBody{
    title: string;
}

export const POST = async(request: Request) => {
    try{
         const body:RequestBody = await request.json();
         await prisma.category.create({
             data: {
                 title: body.title
             }
         });
        return NextResponse.json({message: "Category Added Successfully!"}, {status: 201})
      }catch(error){
        console.log("ADD CATEGORY ERROR: " + error);
      }
}

export const GET = async(request:Request) => {
    try{
        const result = await prisma.category.findMany();
        return NextResponse.json({result}, {status: 200});
      }catch(error){
        console.log("GET CATEGORY ERROR: " + error);
      }
}