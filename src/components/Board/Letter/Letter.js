import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../App";

export default function Letter({ letterPos, attempVal }) {
    const {
        board,
        correctWord,
        currAttempt,
        setDisabledLetters,
        setAlmostLetters,
        setCorrectLetters,
        correctLetters,
    } = useContext(AppContext);
    const letter = board[attempVal][letterPos];

    const correct = correctWord[letterPos] === letter;
    const almost = !correct && correctWord.split("").includes(letter);
    let letterState =
        currAttempt.attempt > attempVal &&
        (correct ? "bg-[#528d4e]" : almost ? "bg-[#b49f39]" : "bg-[#3a393c]");

    useEffect(() => {
        if (letter !== "") {
            if (!correct && almost) {
                setAlmostLetters((prev) => {
                    if (!correctLetters.includes(letter)) {
                        return [...prev, letter];
                    }
                    return [...prev];
                });
            } else if (correct && !almost) {
                setCorrectLetters((prev) => [...prev, letter]);
            } else if (!correct && !almost) {
                setDisabledLetters((prev) => [...prev, letter]);
            }
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
