import prisma from "@/libs/db";
import {NextResponse} from "next/server";

interface RequestBody{
    userId: number;
}

//get all posts by a user
export async function GET(request: Request, {params}: {params:RequestBody}){
   try{

       //get page and lastCursor from query
       const url = new URL(request.url);
       const take = url.searchParams.get("take");
       const lastCursor = url.searchParams.get("lastCursor");

       const result = await prisma.post.findMany({
           take: take ? parseInt(take as string) : 2,
           ...(lastCursor && {
               skip: 2, //Do not include the cursor itself in the query result.
               cursor: {
                   id: lastCursor as string
               }
           }),
           where: {
               userId: +params.userId
           },
           orderBy: {
               createdAt: "desc"
           }
       });
// console.log(result.length)
       if(result.length === 0){
           return new Response(JSON.stringify({
               data: [],
               metaData: {
                   lastCursor: null,
                   hasNextPage: false
               },
           }), {status: 200});
       }

       const lastPostInResults: any = result[result.length - 1];
       const cursor: any = lastPostInResults.id;

       const nextPage = await prisma.post.findMany({
           //same as before, limit the number of events returned by this query
           take: take ? parseInt(take as string) : 2,
           skip: 1,
           cursor: {
               id:cursor,
           }
       });

       const data = {
           data: result,
           metaData: {
               lastCursor: cursor,
               hasNextPage: nextPage.length > 0
           }
       };

       return NextResponse.json({data}, {status: 200});
     }catch(error){
       console.log("ERROR: " + error);
       return NextResponse.json({error});
     }
}