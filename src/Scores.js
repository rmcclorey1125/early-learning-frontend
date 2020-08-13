import React from 'react'
import ScoreCard from './ScoreCard'


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
            <div>
                {this.state.games.map(game => {
                    if(this.props.user){
                        if(game.user_id === this.props.user.id){
                            return <ScoreCard {...game} key={game.id} />
                        }
                    }else{
                        this.props.history.push('/Auth')
                    }
                })}
            </div>
        )
    }
}

export default Scores