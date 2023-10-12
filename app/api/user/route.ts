import prisma from "@/libs/db";
import {NextResponse} from "next/server";


interface RequestBody{
    name: string;
    email: string;
    picture: string;
}

export const POST = async(request:RequestBody) => {
    try{
        const body:RequestBody = await request.json();
        await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                picture: body.picture
            }
        });
        return NextResponse.json({message: "User Added Successfully!"}, {status: 201})
      }catch(error){
        console.log("ERROR: " + error);
      }
}