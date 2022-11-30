import React from "react";

export default function SelectedScore(props){
    return(
        <div className="w-[168px] h-[32px] bg-[#262E38] rounded-[22px] flex justify-center items-center m-auto mt-[25px] text-[14px] font-normal">
            <p className="text-[#FC7614]">You selectet {props.selectedScore} out of 5</p>
        </div>
    )
}