import {NextResponse} from "next/server";
import prisma from "@/libs/db";
import bcrypt from "bcryptjs";

interface RequestBody{
    name: string;
    username:string;
    email: string;
    password:string;
}

export async function POST(request: Request){
    const body: RequestBody = await request.json();
    if(!body.name || !body.username || !body.email || !body.password){
        return new NextResponse("Missing Fields")
    }

    //check if email has already been used
    const userExists = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });

    if(userExists){
        throw new Error("Email already exists");
    }

    //create user
    const user = await prisma.user.create({
        data: {
            name: body.name,
            username: body.username,
            email: body.email,
            password: await bcrypt.hash(body.password, 10)
        }
    });

    const {password, ...userDetails} = user;
    return new Response(JSON.stringify(userDetails));
}