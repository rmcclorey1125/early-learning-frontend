import React from 'react'
import ScoreChart from './ScoreChart'

const ScoreCard = (props) => {

    // let date = new Date(props.created_at);
    // let showDate =  (date.getMonth()+1) + '-'+ date.getDate() + '-' + date.getFullYear()
    // let noticeQuiz
    // let noticeAlpha
    // let noticePuz

    // if(props.game_type === "Quiz"){
    //     noticeQuiz = `On ${showDate}, you got ${((props.score/5)*100).toFixed(2)}% correct in the ${props.game_type} game.`
    // }else if(props.game_type === "Alphabet"){
    //     noticeAlpha = `On ${showDate}, you got ${((props.score/26)*100).toFixed(2)}% correct in the ${props.game_type} game.`
    // }else if(props.game_type === "Puzzle"){
    //     noticePuz = `On ${showDate}, you completed the ${props.game_type} game in ${props.score} seconds.`
    // }
    
// -----------------------------------------------------------------------------------------

   return(
        <>
        </>
   )
}

    // if(props.game_type === "Quiz"){
    //     return (
    //         <>
    //         <div className="notice-container">
    //             <div className="notice">
    //                 <p>On {showDate}, you got {((props.score/5)*100).toFixed(2)}% correct in the {props.game_type} game.</p>
    //             </div>
    //         </div>  
    //         </>
    //     )
    // }else if(props.game_type === "Alphabet"){
    //     return (
    //         <>
    //         <div className="notice-container">
    //             <div className="notice">
    //                 <p>On {showDate}, you got {((props.score/26)*100).toFixed(2)}% correct in the {props.game_type} game.</p>
    //             </div>
    //         </div>  
    //         </>
    //     )
    // }else if(props.game_type === "Puzzle"){
    //     return (
    //         <>
    //         <div className="notice-container">
    //             <div className="notice">
    //                 <p>On {showDate}, you completed the {props.game_type} game in {props.score} seconds.</p>
    //             </div>
    //         </div>  
    //         </>
    //     )
    // }
   



export default ScoreCard


    // if(props.game_type === "Quiz"){
    //     return (
    //         <>
    //         <div>
    //             <p>On {showDate}, you got {((props.score/5)*100).toFixed(2)}% correct in the {props.game_type} game.</p>
    //         </div>  
    //         <button>ABC</button>
    //         </>
    //     )
    // }else if(props.game_type === "Alphabet"){
    //     return (
    //         <>
    //         <div>
    //             <p>On {showDate}, you got {((props.score/26)*100).toFixed(2)}% correct in the {props.game_type} game.</p>
    //         </div>  
    //         <button>ABC</button>
    //         </>
    //     )
    // }else if(props.game_type === "Puzzle"){
    //     return (
    //         <>
    //         <div>
    //             <p>On {showDate}, you completed the {props.game_type} game in {props.score} seconds.</p>
    //         </div>  
    //         <button>ABC</button>
    //         </>
    //     )
    // }

    // return(
    //     <>
    //         <div className="notice-container">
    //             <div className="notices">
    //                 <h1>Quiz Scores</h1>
    //                 <p>{props.game_type === "Quiz"? `On ${showDate}, you got ${((props.score/5)*100).toFixed(2)}% correct in the ${props.game_type} game.` : null}</p>
    //             </div>
    //             <div className="notices">
    //                 <h1>Alphabet Scores</h1>
    //                 <p>{props.game_type === "Alphabet"? `On ${showDate}, you got ${((props.score/26)*100).toFixed(2)}% correct in the ${props.game_type} game.` : null} </p>
    //             </div>
    //             <div className="notices">
    //                 <h1>Puzzle Scores</h1>
    //                 <p>{props.game_type === "Puzzle"? `On ${showDate}, you completed the ${props.game_type} game in ${props.score} seconds.` : null} </p>
    //             </div>
    //         </div>
    //     </>

