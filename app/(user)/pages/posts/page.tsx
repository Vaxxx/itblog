import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {GrFormView} from "react-icons/gr";
import Footer from "@/components/Footer";

const Post = () => {
    return (
        <div>
            <h2 className={"text-center text-2xl shadow-lg uppercase"}>Post Category </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {/*start first grid*/}
                <div>
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Web Development!</h2>
                            <p>  The improvement and enlargement of the website for the internet or an intranet. Web development combs both web design and creating simple static pages to dynamic and complex pages for the net.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><GrFormView size={30}/> View</button>
                                <button className="btn btn-ghost"><AiFillHome size={30}/>   Back To Home</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end first grid*/}
                {/*start second grid*/}
               <div>
                   <div className="card w-96 bg-neutral text-neutral-content">
                       <div className="card-body items-center text-center">
                           <h2 className="card-title">Mobile Application!</h2>
                           <p> This involves building applications for the phone and embedded devices. This applications are mostly downloaded from Google play store and the Apple app store.</p>
                           <div className="card-actions justify-end">
                               <button className="btn btn-primary"><GrFormView size={30}/> View</button>
                               <button className="btn btn-ghost"><AiFillHome size={30}/>   Back To Home</button>
                           </div>
                       </div>
                   </div>
               </div>
                {/*end second grid*/}
                {/*start third grid*/}
              <div>
                  <div className="card w-96 bg-neutral text-neutral-content">
                      <div className="card-body items-center text-center">
                          <h2 className="card-title">Desktop Development!</h2>
                          <p>  This involves building applications for the desktop. These applications can be found in desktop applications and laptops</p>
                          <div className="card-actions justify-end">
                              <button className="btn btn-primary"><GrFormView size={30}/> View</button>
                              <button className="btn btn-ghost"><AiFillHome size={30}/>   Back To Home</button>
                          </div>
                      </div>
                  </div>
              </div>
                {/*end third grid*/}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {/*start first grid*/}
                <div>
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Ethical Hacking!</h2>
                            <p> This is the legal practice of detecting vulnerabilities in applications be it web, mobile or desktop applications. An Ethical Hacker or Penetration Tester must be authorized by the organization involved before any form of testing can be performed on the systemt.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><GrFormView size={30}/> View</button>
                                <button className="btn btn-ghost"><AiFillHome size={30}/>   Back To Home</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end first grid*/}
                {/*start second grid*/}
               <div>
                   <div className="card w-96 bg-neutral text-neutral-content">
                       <div className="card-body items-center text-center">
                           <h2 className="card-title">Web design!</h2>
                           <p>  Artistic execution of websites that are displayed on the internet. It involves User Experience and User Interfaces aspect of website development
                               .</p>
                           <div className="card-actions justify-end">
                               <button className="btn btn-primary"><GrFormView size={30}/> View</button>
                               <button className="btn btn-ghost"><AiFillHome size={30}/>   Back To Home</button>
                           </div>
                       </div>
                   </div>
               </div>
                {/*end second grid*/}
                {/*start third grid*/}
              <div>
                  <div className="card w-96 bg-neutral text-neutral-content">
                      <div className="card-body items-center text-center">
                          <h2 className="card-title">Game development!</h2>
                          <p>  This precisely involves creating 2D and 3D games using tools like Scratch, Pygame and Unity for development.</p>
                          <div className="card-actions justify-end">
                              <button className="btn btn-primary"><GrFormView size={30}/> View</button>
                              <button className="btn btn-ghost"><AiFillHome size={30}/>   Back To Home</button>
                          </div>
                      </div>
                  </div>
              </div>
                {/*end third grid*/}
            </div>
            <Footer/>
        </div>
    );
};

export default Post;
