import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/db";


export default async function getCurrentUser() {
    try{
        const session = await getServerSession(authOptions)

        if(!session?.user?.email) return null;

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if(!currentUser) return null;

        return{
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        };
      }catch(error: any){
        console.log("GET CATEGORY USER ERROR: " + error);
        return null;
      }
}