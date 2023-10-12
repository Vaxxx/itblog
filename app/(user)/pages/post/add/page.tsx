import React from 'react';
import AddPostComponent from "@/components/form/AddPostComponent";
import Image from "next/image";

const AddPostPage = () => {
    return (
        <div>
            <AddPostComponent message={"message"} title={"title"} cate={"category"} imageSrc={"imageSrc"} />
        </div>
    );
};

export default AddPostPage;
