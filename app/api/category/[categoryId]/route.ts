import prisma from "@/libs/db";
import {NextResponse} from "next/server";


interface RequestBody{
    title: string;
    description: string;
    id: number
}

//get a single category
export async function GET(request: Request, {params}: {params:RequestBody}){
    const category = await prisma.category.findUnique({
        where: {
            id: +params.categoryId
        }
    })
    return NextResponse.json({category}, {status: 200});
 }

//update a single category
export async function PUT(request:Request, {params}: {params: {categoryId: number}}){
    const body: RequestBody = await request.json();
    console.log("PUTTTT")
    console.log(body)
    const category = await prisma.category.update({
        where: {
            id: Number(+params.categoryId)
        },
        data : {
            title: body.title,
            description: body.description
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