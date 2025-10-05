import React from "react";

export default function NotFound() {
    return (
        <>
            <div className="bg-black h-screen w-screen flex justify-center items-center overflow-hidden">
                <div className="h-20 w-screen flex justify-center items-center gap-4">
                    <div className="h-full w-30 border-r-2 border-white text-white flex flex-col justify-center items-center text-2xl font-bold ">
                        <p>Error</p>
                        <p>404</p>
                    </div>
                    <div>
                        <h2 className="text-white text-4xl font-bold text-center my-auto uppercase">Page not found</h2>
                    </div>
                </div>
            </div>
        </>
    );
}