import React from 'react'
import { Button } from 'react-bootstrap'
import ConfettiWin from './ConfettiWin'
import Puzzle from 'react-image-puzzle';

class PuzzleGame extends React.Component {

    state= {
        count: 0,
        level: 3,
        puzzleComplete: false,
        image: 'https://4.bp.blogspot.com/-NDWfppuLSlc/WwRIIoIn3OI/AAAAAAAA6OQ/1WTdcONWjSgwjpnd2Gpp5ncMsV7E-DGcgCLcBGAs/s1600/Paw_Patrol_Core_Poster_TM_Towerl_Nick_Jr_Nickelodeon_Preschool_USA_Press.jpg'
    }
    
    componentDidMount(){
        this.myInterval = setInterval(()=> {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }, 1000)
    }

    handleFinish = () =>{
        clearInterval(this.myInterval)
        fetch('http://localhost:3000/api/v1/games',{
            method:"POST",
            headers:{
              'Content-Type':'application/json',
              'Accept':'application/json'
            },
            body:JSON.stringify({
              user_id: this.props.user.id,
              score: this.state.count,
              game_type: "Puzzle"
            })
          })
          .then(resp=>resp.json())
          .then(game =>{
            console.log(game)
          })
          .then(this.setState({puzzleComplete: true}))
    }

    imgBlaze = () => {
        this.setState({
            image: "https://i0.wp.com/intheplayroom.co.uk/wp-content/uploads/2015/03/blazemonstermachines-1024x821.jpg?resize=1024%2C821",
            count: 0
        })
    }   
    
    imgPawpatol = () => {
        this.setState({
            image: "https://4.bp.blogspot.com/-NDWfppuLSlc/WwRIIoIn3OI/AAAAAAAA6OQ/1WTdcONWjSgwjpnd2Gpp5ncMsV7E-DGcgCLcBGAs/s1600/Paw_Patrol_Core_Poster_TM_Towerl_Nick_Jr_Nickelodeon_Preschool_USA_Press.jpg",
            count: 0
        })
    }   

    imgMickey = () => {
        this.setState({
            image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF6763AC142C3E0457AE9CF07EF200C0147E25800E249C550AB6FBC87B8CA62A",
            count: 0
        })
    }   

    render() {
        return (
            <div className="puzzle-container">
                {this.state.puzzleComplete ? 
                <>
                    <h1 className="puz-message">You completed the Puzzle in {this.state.count} seconds</h1>
                    <Button variant="outline-info" className="puz-btn" onClick={()=>{this.props.history.push(``)}}>Return Home</Button>
                    {this.state.count <= 60? <ConfettiWin /> : null}
                </>
                :
                <>
                    <div>
                        <div className="puz-change" onClick={this.imgPawpatol}><img src="https://4.bp.blogspot.com/-NDWfppuLSlc/WwRIIoIn3OI/AAAAAAAA6OQ/1WTdcONWjSgwjpnd2Gpp5ncMsV7E-DGcgCLcBGAs/s1600/Paw_Patrol_Core_Poster_TM_Towerl_Nick_Jr_Nickelodeon_Preschool_USA_Press.jpg" /></div>
                        <div className="puz-change" onClick={this.imgBlaze}><img src="https://i0.wp.com/intheplayroom.co.uk/wp-content/uploads/2015/03/blazemonstermachines-1024x821.jpg?resize=1024%2C821" /></div>
                        <div className="puz-change" onClick={this.imgMickey}><img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF6763AC142C3E0457AE9CF07EF200C0147E25800E249C550AB6FBC87B8CA62A" /></div>
                    </div>
                    <div className="timer">
                        Timer: {this.state.count}
                    </div>
                    <div className="puzzle">
                        <Puzzle image={this.state.image}
                        level={this.state.level}
                        onDone={this.handleFinish}
                        size={450}/>
                    </div>
                </>
                }
            </div>
        )
    }
}

export default PuzzleGame