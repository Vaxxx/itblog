import {NextRequest, NextResponse} from "next/server";
import {join} from 'path';
import {writeFile} from'fs/promises';
import prisma from "@/libs/db";
import {getCategoryById} from "@/app/actions/category/getCategoryById";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import getCurrentUser from "@/app/actions/user/getCurrentUser";

interface RequestBody{
    title: string;
    message: string;
    image: string;
    category: number;
    user: number;
}

export const POST = async(request: NextRequest) => {
    try{
        const currentUser = await getCurrentUser();
        const body:RequestBody  = await request.formData();
        const file: File | null=body.get('file') as unknown as File;

        //get categories details
        // const categoryDetails = await getCategoryById(body.get('category'))
        const categoryDetails = await prisma.category.findUnique({
            where: {
                id: Number(body.get('category'))
            }
        })
       // console.log("category details:")
       //  console.log(categoryDetails.description)
        if (!file){
            return NextResponse.json({message: false});
        }
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        //write file into filesystem in upload location
        const path =  `/public/uploads/${file.name}`;
        console.log(`open ${path} to see the uploaded file`);
        await writeFile(path, buffer);



        //save content into database
        // console.log('body.title')
        // console.log("category: ",body.get('category'))
        // console.log("title: ", body.get('title'))
        // console.log("Message:" ,body.get('message'))
        // console.log("Image:" ,file.name)

        await prisma.post.create({
            data: {
                userId: Number(currentUser.id),
                title: body.get('title'),
                message: body.get('message'),
                image: file.name,
                categories: {
                    create:{
                        title: categoryDetails.title,
                        description: categoryDetails.description
                    }
                }
            }
        })

        return NextResponse.json({message: "Post Added Successfully!"}, {status: 201});
      }catch(error){
        console.log("API POST ERROR: " + error);
      }
}

