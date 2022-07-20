import wordBank from "./wordle-bank.txt";
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            console.log('result', result)
            const wordArr = result.toUpperCase().split("\r\n");
            console.log('wordArr', wordArr)
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
            wordSet = new Set(wordArr);
            console.log('wordSet', wordSet)
        });

    return { wordSet, todaysWord };
};
