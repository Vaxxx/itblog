import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/libs/db";
import bcrypt from "bcryptjs";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_SECRET_ID
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid Credentials");
                }

                //check to see if user exists
                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                });

                //if no user is found
                if(!user || !user?.password){
                    throw new Error("Invalid Credentials");
                }

                //check to see if password matches
                const isPasswordAMatch = bcrypt.compare(credentials.password, user.password);

                //if password do not match
                if(!isPasswordAMatch){
                    throw new Error("Invalid Credentials");
                }
                return user;
            }
        } )
    ],
    pages: {
        signIn: '/auth/signin',
        error:  '/auth/error'
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    debug: process.env.NODE_ENV === "development",
    callbacks: {

        // async signIn({user, account}){
        //     // if(account.provider === 'google'){
        //     //     try{
        //     //         await fetch(" ")
        //     //     }
        //     // }
        //     console.log("user", user)
        //     console.log("Account", account);
        // },

        async session({session, token}) {
            if(token){
                session.id = token.id;
                session.name = token.name;
                session.username = token.username;
                session.email = token.email;
            }
            return session;
        },

       jwt: ({token, user})  => {
           if(user) {
               token.id = user.id;
               token.name = user.name;
               token.username = user.username;
               token.email = user.email
           }
           return token;
       },

    }
}
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST};