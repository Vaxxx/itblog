import prisma from "@/libs/db";
import {NextResponse} from "next/server";
import {number} from "zod";


interface RequestBody{
    title: String;
}

//get a single category
export async function GET(request: Request, {params}: {params:RequestBody}){
    const category = await prisma.category.findUnique({
        where: {
            id: +params.categoryId
        }
    })
    return NextResponse.json({category}, {status: 200});

  // try{
  //     const categoryId = request.url.split("/category/")[1];
  //     const category = await prisma.category.findUnique({
  //         where: {
  //             id: Number(categoryId)
  //         }
  //     });
  //     if(!category)
  //         return NextResponse.json({message: "Category not found"}, {status: 404});
  //     return NextResponse.json({category}, {status: 200});
  //   }catch(error){
  //     console.log("ERROR: " + error);
  //     return NextResponse.json({message: "GET ERROR: ", error}, {status: 500});
  //   }
 }

//update a single category
export async function PUT(request:Request, {params}: {params: {categoryId: number}}){
    const body: RequestBody = await request.json();
    const category = await prisma.category.update({
        where: {
            id: Number(+params.categoryId)
        },
        data : {
            title: body.title
        }
    });
    return NextResponse.json({category}, {status: 200});
}

//delete a single post
export async function DELETE(request: Request, {params} : {params: {categoryId: number}}){
    await prisma.category.delete({
        where: {
            id: +params.categoryId
        }
    })
    return NextResponse.json({message: "Category deleted successfully"}, {status: 200});
}