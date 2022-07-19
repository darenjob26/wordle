import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import Key from "./Key/Key";


export default function Keyboard() {
    const { onSelectLetter, onDelete, onEnter, disabledLetters } = useContext(AppContext);

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyboard = useCallback((event) => {
        if(event.key === "Enter"){
            onEnter()
        } else if(event.key === "Backspace"){
            onDelete()
        } else {
            keys1.forEach(key => {
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
            keys2.forEach(key => {
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
            keys3.forEach(key => {
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
        }
    })
    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        };
    }, [handleKeyboard]);

    return (
        <div className="w-[700px] h-[300px] mt-[60px] " onKeyDown={handleKeyboard}>
            <div className="flex justify-center m-[5px]">
                {keys1.map((key, idx) => {
                    return <Key keyVal={key} key={idx} disabled={disabledLetters.includes(key)}/>;
                })}
            </div>
            <div className="flex justify-center m-[5px]">
                {keys2.map((key, idx) => {
                    return <Key keyVal={key} key={idx} disabled={disabledLetters.includes(key)}/>;
                })}
            </div>
            <div className="flex justify-center m-[5px]">
                <Key keyVal={"ENTER"} bigKey />
                {keys3.map((key, idx) => {
                    return <Key keyVal={key} key={idx} disabled={disabledLetters.includes(key)}/>;
                })}
                <Key keyVal={"DELETE"} bigKey />
            </div>
        </div>
    );
}
