import React from 'react'
import Sounds from './Sounds'


const Home = props => {

    return(
            <div className="home">
                <div className="homepage-box" id="home-quiz" onClick={()=>{props.history.push(`MultipleChoice`)}}>
                    <h2>Quizzes</h2>
                    <h5>Learn through answering multiple choice questions</h5>
                </div>
                <div className="homepage-box" id="home-alpha" onClick={()=>{props.history.push(`Speak`)}}>
                    <h2>Alphabet</h2>
                    <h5>Learn the Alphabet</h5>
                </div>
                <div className="homepage-box" id="home-puzzle" onClick={()=>{props.history.push(`PuzzleGame`)}}>
                    <h2>Puzzle</h2>
                    <h5>Put the puzzle back together</h5>
                </div>
                <div className="homepage-box" id="home-flash" onClick={()=>{props.history.push(`Flashcards`)}}>
                    <h2>Flashcards</h2>
                    <h5>Look over your Flashcards or Create new ones</h5>
                </div>
                <div className="homepage-box" id="home-score" onClick={()=>{props.history.push(`Scores`)}}>
                    <h2>Scores</h2>
                    <h5>Look back at how you scored</h5>
                </div>
                <div className='animals'> 
                    <Sounds />
                </div>
            </div>
    )
}

export default Home