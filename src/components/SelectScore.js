import React from "react";

export default function SelectScore(props){
    const scores = [1,2,3,4,5];

    function handleClick(e){
        props.score(e.target.id);
        resetClass();
        e.target.parentNode.classList.toggle("active");

    }
    function resetClass(){
        const scoreButtons = document.querySelectorAll(".score");
        for(var button of scoreButtons){
            button.classList.remove("active"); 
        }
    }
    
    return(
        <div id="score-area" className="flex justify-between mt-[24px]">
            {scores.map((score)=>{
                return(
                    <div key={score} onClick={handleClick} className="score bg-[#262E38] w-[42px] h-[42px] rounded-[50%]  text-white cursor-pointer">
                        <p  id={score} className="text-[#7C8798] font-bold pt-[10px] box-border">{score}</p>
                    </div>
                )
            })}
        </div>
    )
}