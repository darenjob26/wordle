import React from "react";

export default function NotFound() {
    return (
        <div className="absolute flex justify-center items-center w-full h-full">
            <div className="h-[100px] w-[250px] bg-white text-black rounded-lg flex items-center justify-center shadow-2xl shadow-gray-800">
                <div className="font-bold text-lg">Word not found</div>
            </div>
        </div>
    );
}
