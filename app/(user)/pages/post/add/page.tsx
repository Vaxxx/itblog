import React from 'react';
import AddPostComponent from "@/components/form/AddPostComponent";

const AddPostPage = () => {
    return (
        <div>
            <AddPostComponent message={"message"} title={"title"} cate={"category"} />
        </div>
    );
};

export default AddPostPage;
