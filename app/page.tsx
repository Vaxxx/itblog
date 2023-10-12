
import Image from "next/image"
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
        <div className="container mx-auto ">
            {/*start container mx-auto */}
            <h2 className={"mt-5 mx-auto"}></h2>
            {/* start grid grid-cols-3 gap-4 */}
            <div className="grid grid-cols-3 gap-4">
                {/*start col-span-2*/}
                <div className="col-span-2 mb-4">
                    {/*Blog Posts*/}
                    {/*first post*/}
                    <div className="max-w-5xl m-3 p-2 rounded-lg shadow-lg">
                        <Image src={"/posts/3.jpg"} className="w-full rounded-lg" width={"400"} height={"150"} alt="Post 1"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">First Title</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                                <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                                <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                            </div>
                    </div>
                    {/*second post */}
                    <div className="max-w-5xl m-3 p-2 rounded-lg shadow-lg">
                        <Image src={"/posts/1.jpg"} className="w-full rounded-lg" width={"400"} height={"150"}  alt="Post 1"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Second Title</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                                <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                </div>  {/*end col-span-2*/}
                {/*start col-span-1 */}
                <div className="col-span-1">
                   {/*adverts*/}

                        <div className={"mt-5 px-1"}>
                            <Image src={"/adverts/advert1.jpg"} className={"w-full rounded-2xl"}   alt={"advert1"} width={"100"} height={50}/>
                            <div className={"flex flex-col items-center justify-center mx-auto m-2"}>
                                <p > Get massages at affordable prices</p>
                                <button className={"bg-slate-800 hover:bg-gray-300  p-2 text-white hover:text-black font-semibold text-lg rounded-lg mt-2"}>
                                    <Link href={"/pages/contact"}>Contact Us Now</Link>
                                </button>
                            </div>
                        </div>

                    <div className={"mt-5 px-1"}>
                            <Image src={"/adverts/adverts2.jpg"} className={"w-full rounded-2xl"}  alt={"advert1"} width={"100"} height={50}/>
                            <div className={"flex flex-col items-center justify-center mx-auto m-2"}>
                                <p> Get your kickers at unbeatable prices</p>
                                <button className={"bg-slate-800 hover:bg-gray-300  p-2 text-white hover:text-black font-semibold text-lg rounded-lg mt-2"}>
                                    <Link href={"/pages/contact"}>Contact Us Now</Link>
                                </button>
                            </div>
                        </div>

                    <div className={"mt-5 px-1"}>
                            <Image src={"/adverts/laptops.jpg"} className={"w-full rounded-2xl"}  alt={"advert1"} width={"100"} height={50}/>
                            <div className={"flex flex-col items-center justify-center mx-auto m-2"}>
                                <p> Get Laptops at prices that are far below market prices. You don't want to miss this offer. We have all kinds of laptops from fairly used to brand new laptops</p>
                                <button className={"bg-slate-800 hover:bg-gray-300  p-2 text-white hover:text-black font-semibold text-lg rounded-lg mt-2"}>
                                    <Link href={"/pages/contact"}>Reach Us Now</Link>
                                </button>
                            </div>
                        </div>

                        {/*/////////////adverts*/}
                </div> {/*end col-span-1 */}
            </div> {/* end grid grid-cols-3 gap-2 */}

            <Footer/>
        </div>{/*end container mx-auto */}
    </div>
  )
}
