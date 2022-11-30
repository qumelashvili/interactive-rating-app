import React from "react";
import ThankIcons from "./ThanksIcon";
import SelectedScore from "./SelectedScore";
import ThankYouText from "./ThankYouText";

export default function ThanksComponent(props){
    return(
        <div className="thanks-component h-[360px] rounded-[15px] lg:w-[412px] lg:mt-[195px] lg:mx-auto ">
            <ThankIcons />
            <SelectedScore selectedScore={props.score} />
            <ThankYouText />
        </div>
    )
}