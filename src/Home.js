import React from 'react'


const Home = props => {

    return(
        <div className="home">
            <div className="homepage-box" id="home-quiz" onClick={()=>{props.history.push(`MultipleChoice`)}}>
                <h3>Quizzes</h3>
                <p>Learn through answering multiple choice questions</p>
            </div>
            <div className="homepage-box" id="home-alpha" onClick={()=>{props.history.push(`Speak`)}}>
                <h3>Alphabet</h3>
                <p>Learn the Alphabet</p>
            </div>
            <div className="homepage-box" id="home-puzzle" onClick={()=>{props.history.push(`PuzzleGame`)}}>
                <h3>Puzzle</h3>
                <p>Put the puzzle back together</p>
            </div>
            <div className="homepage-box" id="home-flash" onClick={()=>{props.history.push(`Flashcards`)}}>
                <h3>Flashcards</h3>
                <p>Look over your Flashcards or Create new ones</p>
            </div>
            <div className="homepage-box" id="home-score" onClick={()=>{props.history.push(`Scores`)}}>
                <h3>Scores</h3>
                <p>Look back at how you scored</p>
            </div>
        </div>
    )
}

export default Home



// style={{backgroundImage: `url("https://images-na.ssl-images-amazon.com/images/I/719I85%2B5r4L._AC_SL1500_.jpg")`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}