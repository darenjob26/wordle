import React, { useContext } from "react";
import { AppContext } from "../../../App";

export default function Key({ keyVal, bigKey, disabled, almost, correct }) {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);
    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    };
    return (
        <div
            className={`w-[50px] h-[70px] m-[5px] rounded grid place-items-center text-[20px] text-white cursor-pointer hover:bg-zinc-600 ${
                bigKey
                    ? "w-[100px] bg-[grey]"
                    : disabled
                    ? " bg-gray-800"
                    : almost
                    ? "bg-[#b49f39]"
                    : correct
                    ? "bg-[#528d4e]"
                    : "bg-[grey]"
            }`}
            onClick={selectLetter}
        >
            {keyVal}
        </div>
    );
}
