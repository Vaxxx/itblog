import prisma from "@/libs/db";
import {NextResponse} from "next/server";

interface RequestBody{
    username: string;
    name: string;
    email:string;
}

export async function GET(request: Request, {params}: {params:RequestBody}){

    const user = await prisma.user.findFirst({
        where: {
            email: params.email
        }
    })
    return NextResponse.json({user}, {status: 200});
}