import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Speaking = (props) => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  const reading = transcript
  const text = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"

  if(props.abcEnd){
      return (
          <>
            <h1>You got {((props.abcRight.length/26)*100).toFixed(2)}%</h1>
            <h1>You missed {props.abcWrong.map(letter => `, ${letter}`)}</h1>
            <button onClick={()=>{props.history.push(``); props.endAbc();}}>Return Home</button>
          </>
      )
  } else {
      return (
        <div>
            <img className="alphabet" src="https://www.english-learn-online.com/wp-content/uploads/alphabet-featured-1230x660-696x373.jpg" />
            <br></br>
            <button onClick={() => SpeechRecognition.startListening({ continuous:true })}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <button onClick={() => props.evaluate(reading, text)}>Submit</button>
    
            <h1>{reading}</h1>
        </div>
      )
  }

}
export default Speaking

    // let length = tParts.length
    // let score = 0
    // if(tParts === rParts){
    //     score = score + 1
    // }
    // for(let i = 0; i<tParts.length; i++){
    //     if(tParts[i] !== rParts[i]){
    //         score = score - 1;
    //     } 
    // }
    // alert(score) 
    // Math.round(100*(score/length))