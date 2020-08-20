import React from 'react'
import QuizCard from './QuizCard'
import AlphabetCard from './AlphabetCard'
import PuzzleCard from './PuzzleCard'


class Scores extends React.Component{

    state= {
        games: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/games')
        .then(resp => resp.json())
        .then(games => this.setState({games}))
    }

    render() {
        return(
            <div className="notice-container">
                {this.props.user? 
                <>
                    <div className="quiz-score">
                        <h2>Quiz Scores</h2>
                        {this.state.games.map(game => {
                            if(game.user_id === this.props.user.id){
                                if(game.game_type === "Quiz"){
                                    return <QuizCard {...game} key={game.id} />
                                }
                            }
                        })}
                    </div>
                    <div className="alphabet-score">
                        <h2>Alphabet Scores</h2>
                        {this.state.games.map(game => {
                            if(game.user_id === this.props.user.id){
                                if(game.game_type === "Alphabet"){
                                    return <AlphabetCard {...game} key={game.id} />
                                }
                            }
                        })}
                    </div> 
                    <div className="puzzle-score">
                        <h2>Puzzle Scores</h2>
                        {this.state.games.map(game => {
                            if(game.user_id === this.props.user.id){
                                if(game.game_type === "Puzzle"){
                                    return <PuzzleCard {...game} key={game.id} />
                                }
                            }
                        })}
                    </div> 
                </>

                    :

                this.props.history.push('/Auth')}

            </div>
        )
    }
}

export default Scores