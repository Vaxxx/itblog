import React from 'react';
import Image from  "next/image";
import Link from "next/link";
import MenuButton from "@/components/MenuButton";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
const AboutPage = () => {
    return (
        <div>
            <h2 className={"text-center text-3xl text-bold shadow-lg"}>About Us</h2>
            <div className={"mx-auto mt-2 p-3"}>
                <Image
                    src={"/about.jpg"}
                    alt={"About CSI"}
                    width={"1000"}
                    height={"200"}
                    className={"w-full"}
                    />
            </div>
            <div className={"grid grid-cols-3 gap-4"}>
                <div className={"col-span-2 p-3"}>
                    <p className={"text-semibold text-lg"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad consequatur culpa dolor eligendi facilis mollitia officia placeat sint tempora.
                        Alias atque eius, eveniet ex impedit iure perspiciatis possimus quis vero?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet commodi consequatur cupiditate delectus dolor ducimus,
                        ex exercitationem expedita id maiores, minima molestiae mollitia non omnis,
                        quisquam temporibus unde velit vero.
                    </p>
                    <p className={"my-3"}>
                        For more specific information, <Link href={"/pages/contact"} className={"underline hover:bg-blue-500 hover:text-gray-700 px-3 rounded-md py-2"}>Contact Us Here</Link>
                    </p>
                </div>
                <div>
                    {/* Start Drawer */}
                     <Drawer/>
                    {/* End Drawer */}
                    <div className={"hidden md:block"}>
                        <MenuButton/>
                    </div>
                </div>
            </div>
             <div className={"p-2"}>
                 <Footer/>
             </div>
        </div>
    );
};

export default AboutPage;
