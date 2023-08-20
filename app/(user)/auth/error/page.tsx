import React from 'react';
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div>
            <div className="card w-96 bg-red-700 text-neutral-content mx-auto flex justify-center align-center">
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title leading underline text-5xl">ERROR!</h2>
                    <p  className={"text-muted italic text-lg"}>OOPS! It seems you are in a wrong Place.</p>
                    <div className="card-actions justify-end">
                        <Link href={"/"} className="btn btn-neutral">Back To Home</Link>
                        {/*<button className="btn btn-ghost">Deny</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
