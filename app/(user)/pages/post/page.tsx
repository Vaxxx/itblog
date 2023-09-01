import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {GrFormView} from "react-icons/gr";
import Footer from "@/components/Footer";
import {getAllCategories} from "@/app/actions/category/getAllCategories";
import Link from "next/link";
import {BiSolidBookAdd} from "react-icons/bi";

const Post = async () => {
    const posts = await getAllCategories();
    return (
        <div>
            <h2 className={"text-center text-2xl shadow-lg uppercase"}>Post Category

            <Link href={"/pages/post/add"} className={"float-left rounded-4xl"}>
                <BiSolidBookAdd size={50}/>
            </Link>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 p-5">
            {
                posts?.map((post) =>(
                            <div className={"p-5 m-5"}>
                                <div className="card bg-neutral text-neutral-content">
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{post.title}!</h2>
                                        <p> {post.description}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary"><GrFormView size={30}/> View</button>
                                            <button className="btn btn-ghost"><AiFillHome size={30}/>   Back To Home</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                ))
            }
            </div>
            <Footer/>
        </div>
    );
};

export default Post;
