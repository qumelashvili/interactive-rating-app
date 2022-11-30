import React from "react";
import Icon from "./Icon";
import RatingText from "./RatingText";
import SelectScore from "./SelectScore";
import SubmitButton from "./SubmitButton";

export default function RatingComponent(props){
    return(
        <main className="w-full h-[360px] rounded-[15px] lg:w-[412px] lg:mt-[195px] lg:mx-auto ">
            <Icon />
            <RatingText />
            <SelectScore score={props.score} />
            <SubmitButton onClick = {props.handleClick}/>
        </main>
    )
}