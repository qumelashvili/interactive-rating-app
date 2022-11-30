import React from "react";
import starIcon from "../images/icon-star.svg"

export default function Icon(){
    return (
        <div className="w-[42px] h-[42px] flex justify-center items-center rounded-[50%] bg-[#262E38]">
            <img src={starIcon} alt="Star"/>
        </div>
    )
}