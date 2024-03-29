// import "./App.css";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";
import GameOver from "./components/GameOver/GameOver";
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./Words";

export const AppContext = createContext();

function App() {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({
        attempt: 0,
        letterPos: 0,
    });
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [almostLetters, setAlmostLetters] = useState([]);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [correctWord, setCorrectWord] = useState("");
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setCorrectWord(words.todaysWord);
        });
    }, []);

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({
            ...currAttempt,
            letterPos: currAttempt.letterPos + 1,
        });
    };

    const onDelete = () => {
        if (currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setBoard(newBoard);
        setCurrAttempt({
            ...currAttempt,
            letterPos: currAttempt.letterPos - 1,
        });
    };

    const onEnter = () => {
        if (currAttempt.letterPos === 5) {
            let currWord = "";
            for (let i = 0; i < 5; i++) {
                currWord += board[currAttempt.attempt][i];
            }

            let found = wordSet.has(currWord);
            if (found) {
                if (currAttempt.attempt === 5) {
                    setGameOver({ gameOver: true, guessedWord: false });
                }

                if (currWord === correctWord) {
                    setGameOver({ gameOver: true, guessedWord: true });
                }

                setCurrAttempt({
                    attempt: currAttempt.attempt + 1,
                    letterPos: 0,
                });
            } else {
                setNotFound(true);
                setTimeout(() => {
                    setNotFound(false);
                }, 1200);
            }
        }
    };
    return (
        <div className="text-center w-screen h-screen text-white bg-[#121212]">
            <nav className="h-16 w-full m-0 border-b-[1px] border-[grey] grid place-items-center">
                <div className="text-white text-[2rem]">Wordle</div>
            </nav>
            <AppContext.Provider
                value={{
                    board,
                    setBoard,
                    currAttempt,
                    setCurrAttempt,
                    onSelectLetter,
                    onDelete,
                    onEnter,
                    correctWord,
                    disabledLetters,
                    setDisabledLetters,
                    gameOver,
                    setGameOver,
                    almostLetters,
                    setAlmostLetters,
                    correctLetters,
                    setCorrectLetters,
                    notFound,
                }}
            >
                <div className="w-screen h-[calc(100%-170px)] flex items-center pt-12 flex-col">
                    <Board />
                    {gameOver.gameOver ? <GameOver /> : <Keyboard />}
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
