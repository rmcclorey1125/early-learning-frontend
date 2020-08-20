import React from 'react'

const AlphabetCard = (props) => {

    let date = new Date(props.created_at);
    let showDate =  (date.getMonth()+1) + '-'+ date.getDate() + '-' + date.getFullYear()
    
    return(
        <div className="notices">
            <p>On {showDate}, you got {((props.score/26)*100).toFixed(2)}% correct.</p>
        </div>
    )
}
export default AlphabetCard