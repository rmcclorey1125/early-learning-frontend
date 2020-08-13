import React from 'react'
import MatchCards from './MatchCards'
// import {Button} from 'react-bootstrap'

class MatchCardContainer extends React.Component{

    state= {
        matchCards: [],
    }

    componentDidMount(){

        fetch("http://localhost:3000/api/v1/matches")
        .then(resp => resp.json())
        .then(matchCards => {
            this.setState({ matchCards })
            }
        )
    }
    render() {
        return (
            <>
                <h1>Matching Game</h1>
                <div className='card-grid'>
                    {this.state.matchCards.map(card => {
                        return <MatchCards {...card} key={card.id}/>
                        }
                    )}
                </div>
            </>
        )
    }
}

export default MatchCardContainer