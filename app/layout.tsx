import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import {Providers} from "@/app/providers";
import ToasterContext from "@/app/ToasterContext";
import React from "react";
import QueryWrapper from "@/app/query-wrapper";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT Blog',
  description: 'A Palace for all Information Technology gist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
           <QueryWrapper>
               <ToasterContext/>
               <Navbar/>
               {children}
           </QueryWrapper>
        </Providers>
      </body>
    </html>
  )
}
