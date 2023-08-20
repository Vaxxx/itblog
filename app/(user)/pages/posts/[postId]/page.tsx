import React from 'react';
import SocialNetwork from "@/components/SocialNetwork";
import Footer from "@/components/Footer";
import Image from "next/image";
import Drawer from "@/components/Drawer";

const PostIdPages = () => {
    return (
        <div>
            <div>
                <h2 className={"text-center text-3xl text-bold shadow-lg"}>POST Id</h2>
               <div className={"z-auto"}>
                   <Drawer/>
               </div>
                <div className={"mx-auto mt-2 p-3"}>
                    <Image
                        src={"/posts/postImage.jpg"}
                        alt={"Contact CSI"}
                        width={"1000"}
                        height={"100"}
                        className={"w-full"}
                    />
                </div>
                <div className={"grid grid-cols-1 gap-4"}>
                    <div className={"p-3 px-5"}>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cumque deserunt dolorem eaque esse, exercitationem fuga laborum natus nesciunt nostrum odio quis,
                        suscipit, voluptate? Dolores earum eius enim eos minus quisquam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad ducimus ex ipsam iure modi, unde. Commodi dolor, dolorem facilis fugiat illo
                        illum molestiae nostrum perferendis qui quo saepe veritatis voluptas.
                    </div>
                       <button className={"btn btn-outline btn-primary"}>Comments</button>
                </div>
                <div className={"p-2"}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default PostIdPages;
