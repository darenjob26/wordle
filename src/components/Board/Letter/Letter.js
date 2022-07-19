import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../App";

export default function Letter({ letterPos, attempVal }) {
    const { board, correctWord, currAttempt, setDisabledLetters, gameOver } =
        useContext(AppContext);
    const letter = board[attempVal][letterPos].toUpperCase();

    const correct = correctWord[letterPos] === letter;
    const almost =
        !correct && correctWord.split("").includes(letter.toUpperCase());
    let letterState =
        currAttempt.attempt > attempVal &&
        (correct ? "bg-[#528d4e]" : almost ? "bg-[#b49f39]" : "bg-[#3a393c]");


    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, letter]);
        }
    }, [currAttempt.attempt]);
    return (
        <div
            className={`flex-[33%] h-[95%] border-[1px] border-gray-400 m-2 grid place-items-center text-3xl font-semibold text-white ${letterState.toString()}`}
        >
            {letter}
        </div>
    );
}
