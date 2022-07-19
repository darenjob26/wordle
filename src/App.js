// import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./Words";
import GameOver from "./components/GameOver";

export const AppContext = createContext();

function App() {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({
        attempt: 0,
        letterPos: 0,
    });
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [correctWord, setCorrectWord] = useState("");
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });

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
        if (currAttempt.letterPos !== 5) return;
        let currWord = "";
        for (let i = 0; i < 5; i++) {
            currWord += board[currAttempt.attempt][i];
        }

        if (currWord === correctWord) {
            setGameOver({ gameOver: true, guessedWord: true });
            return;
        }

        if (currAttempt.attempt === 5) {
            setGameOver({ gameOver: true, guessedWord: false });
        }

        if (wordSet.has(currWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
        } else {
            alert("Word Not Found");
            // const newBoard = [...board];
            // for (let i = currAttempt.letterPos; i >= 0; i--) {
            //     newBoard[currAttempt.attempt][i] = "";
            // }
            // setBoard(newBoard);
            // setCurrAttempt({
            //     ...currAttempt,
            //     letterPos: 0,
            // });
        }

        
    };
    return (
        <div className="text-center w-screen h-screen text-white bg-[#121212]">
            <nav className="h-[60px] w-full m-0 border-b-[1px] border-[grey] grid place-items-center">
                <h1 className="m-0 text-white text-[45px]">Wordle</h1>
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
