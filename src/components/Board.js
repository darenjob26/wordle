import React from "react";
import Letter from "./Letter";

export default function Board() {
    return (
        <div className="w-[450px] h-[550px] border-[1px] border-black flex flex-col">
            <div className="flex flex-[33%] flex-row m-[5px]">
                <Letter letterPos={0} attempVal={0} />
                <Letter letterPos={1} attempVal={0} />
                <Letter letterPos={2} attempVal={0} />
                <Letter letterPos={3} attempVal={0} />
                <Letter letterPos={4} attempVal={0} />
            </div>
            <div className="flex flex-[33%] flex-row m-[5px]">
                <Letter letterPos={0} attempVal={1} />
                <Letter letterPos={1} attempVal={1} />
                <Letter letterPos={2} attempVal={1} />
                <Letter letterPos={3} attempVal={1} />
                <Letter letterPos={4} attempVal={1} />
            </div>
            <div className="flex flex-[33%] flex-row m-[5px]">
                <Letter letterPos={0} attempVal={2} />
                <Letter letterPos={1} attempVal={2} />
                <Letter letterPos={2} attempVal={2} />
                <Letter letterPos={3} attempVal={2} />
                <Letter letterPos={4} attempVal={2} />
            </div>
            <div className="flex flex-[33%] flex-row m-[5px]">
                <Letter letterPos={0} attempVal={3} />
                <Letter letterPos={1} attempVal={3} />
                <Letter letterPos={2} attempVal={3} />
                <Letter letterPos={3} attempVal={3} />
                <Letter letterPos={4} attempVal={3} />
            </div>
            <div className="flex flex-[33%] flex-row m-[5px]">
                <Letter letterPos={0} attempVal={4} />
                <Letter letterPos={1} attempVal={4} />
                <Letter letterPos={2} attempVal={4} />
                <Letter letterPos={3} attempVal={4} />
                <Letter letterPos={4} attempVal={4} />
            </div>
            <div className="flex flex-[33%] flex-row m-[5px]">
                <Letter letterPos={0} attempVal={5} />
                <Letter letterPos={1} attempVal={5} />
                <Letter letterPos={2} attempVal={5} />
                <Letter letterPos={3} attempVal={5} />
                <Letter letterPos={4} attempVal={5} />
            </div>
        </div>
    );
}
