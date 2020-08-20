import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import ConfettiWin from './ConfettiWin'
import { Button } from 'react-bootstrap'

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
            <h1 className="abc-result">You got {((props.abcRight.length/26)*100).toFixed(2)}%</h1>
            <h1>You missed {props.abcWrong.map(letter => <h3>{letter}</h3>)}</h1>
            <Button variant="outline-info" onClick={()=>{props.history.push(``); props.endAbc();}}>Return Home</Button>
            {props.abcRight.length === 26? <ConfettiWin /> : null}
          </>
      )
  } else {
      return (
        <div>
            <img className="alphabet" src="https://www.english-learn-online.com/wp-content/uploads/alphabet-featured-1230x660-696x373.jpg" />
            <br></br>
            <Button variant="outline-success" className="speech-controls" onClick={() => SpeechRecognition.startListening({ continuous:true })}>Start</Button>
            <Button variant="outline-danger" className="speech-controls" onClick={SpeechRecognition.stopListening}>Stop</Button>
            <Button variant="outline-warning" className="speech-controls" onClick={resetTranscript}>Reset</Button>
            <Button variant="outline-dark" className="speech-controls" onClick={() => props.evaluate(text,reading)}>Submit</Button>
    
            <h1>{reading}</h1>
        </div>
      )
  }

}
export default Speaking