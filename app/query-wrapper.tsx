"use client";
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryWrapper = ({children} : Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryWrapper;