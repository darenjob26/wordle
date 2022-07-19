import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Key({ keyVal, bigKey, disabled }) {
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
            className={`w-[50px] h-[70px] m-[5px] rounded grid place-items-center text-[20px] bg-[grey] text-white cursor-pointer  ${
                bigKey ? "w-[100px]" : disabled ? " bg-gray-800" : ""
            }`}
            onClick={selectLetter}
        >
            {keyVal}
        </div>
    );
}
