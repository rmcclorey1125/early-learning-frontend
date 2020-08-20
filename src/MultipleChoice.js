import React from 'react'
import ConfettiWin from './ConfettiWin'
import { Button } from 'react-bootstrap'

const API = 'http://localhost:3000/api/v1/questions'

class MultipleChoice extends React.Component {

    state = {
        questions: [],
        userAnswer: null,
        currentIndex: 0,
        options: [],
        quizEnd: false,
        score: 0,
        disabled: true
    }

    componentDidMount(){
        const {currentIndex} = this.state
        fetch(API)
        .then(resp => resp.json())
        .then(questions => {
          this.setState({
            questions: questions,
            question: questions[currentIndex].question,
            options: questions[currentIndex].options.sort(() => Math.random() - .5),
            answer: questions[currentIndex].answer
            })
        })
    }

    nextQuestionHandler = () => {
        const {userAnswer, answer, score} = this.state
    
        if(userAnswer === answer){
            this.setState ({
                score: score + 1
            })
        }
    
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null,
            disabled: true
        })
    }

    
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        if(this.state.currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                    question: this.state.questions[this.state.currentIndex].question,
                    options: this.state.questions[this.state.currentIndex].options.sort(() => Math.random() - .5),
                    answer: this.state.questions[this.state.currentIndex].answer
                }
            })
        }
    }
    
    finishHandler = () => {
        const {userAnswer, answer, score} = this.state
        
        if(userAnswer === answer){
            this.setState({
                score: this.state.score + 1
            })
            fetch('http://localhost:3000/api/v1/games',{
                method:"POST",
                headers:{
                  'Content-Type':'application/json',
                  'Accept':'application/json'
                },
                body:JSON.stringify({
                  user_id: this.props.user.id,
                  score: this.state.score + 1,
                  game_type: "Quiz"
                })
              })
              .then(resp=>resp.json())
              .then(game =>{
                console.log(game)
              })
        }else {
            fetch('http://localhost:3000/api/v1/games',{
                method:"POST",
                headers:{
                  'Content-Type':'application/json',
                  'Accept':'application/json'
                },
                body:JSON.stringify({
                  user_id: this.props.user.id,
                  score: this.state.score,
                  game_type: "Quiz"
                })
              })
              .then(resp=>resp.json())
              .then(game =>{
                console.log(game)
              })
        }
    
        if(this.state.currentIndex === this.state.questions.length - 1){
            this.setState({
                quizEnd:true
            })
        }
    }
    
    render() {
        const {question, options, currentIndex, userAnswer, quizEnd, score} = this.state
        if(quizEnd) {
            return (
                <div className="quiz-bg">
                    <h1 className="result">You answered {score} out of {this.state.questions.length} correct</h1>
                    <Button variant="outline-info" className="qu-button" onClick={()=>{this.props.history.push(``)}}>Return Home</Button>
                    {score === 5? <ConfettiWin /> : null}
                </div>
            )
        } else {
            return (
                <div className="quiz-bg">
                    <h2 className='quiz-qu'>{question}</h2>
                    <p className='quiz-qu'>{`Question ${currentIndex + 1} of ${this.state.questions.length}`}</p>
                    {
                        options.map(option => 
                            <div key = {option.id} className={`options ${userAnswer === option? "selected": null}`}
                            onClick = {() => this.checkAnswer(option)}>
                                <img src={option} />
                            </div>
                        )
                    }
                    <div>
                        {currentIndex < this.state.questions.length - 1 &&
                        <Button variant="outline-success" className="qu-button" disabled = {this.state.disabled} onClick={this.nextQuestionHandler}>
                            Next Question
                        </Button>}
                        {currentIndex === this.state.questions.length - 1 && 
                        <Button variant="outline-danger" className="qu-button" disabled = {this.state.disabled} onClick={this.finishHandler}>
                            Submit
                        </Button>
                        }
                    </div>
                </div> 
            );
        }
    }
}

export default MultipleChoice

