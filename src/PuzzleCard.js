import React from 'react'

const PuzzleCard = (props) => {

    let date = new Date(props.created_at);
    let showDate =  (date.getMonth()+1) + '-'+ date.getDate() + '-' + date.getFullYear()
    
    console.log("Puzzle card", props)

    return(
        
        <div className="notices">
            <p>On {showDate}, you completed the puzzle in {props.score} seconds.</p>
        </div>
    )
}
export default PuzzleCard