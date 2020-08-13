import React from 'react'

class Flashcard extends React.Component {

    state = {
        flip: false
    }

    changeFlip = () =>
    this.setState({flip: !this.state.flip})

    render() {
        // console.log("my Props", this.props.id)
        if(this.props.img_front){
            return (
                <div 
                className={`card ${this.state.flip ? 'flip' : ''}`}
                onClick={this.changeFlip}
                >
                    <div className="front">
                        <img src={this.props.details_front} alt={this.props.name} />
                    </div>
    
                    <div className="back">
                        {this.props.details_back}
                    </div>
                    {this.state.flip ?
                    null :
                    <>
                        <button className="deleteBtn btn btn-outline-danger" onClick={() => this.props.deleteFlashcard(this.props.id)}>🗑</button>
                        <button className="editBtn btn btn-outline-success" onClick={() => this.props.editFlashcard(this.props.id)}>✎</button>
                    </>}
                </div>
            )
        } else {
            return (
                <div 
                className={`card ${this.state.flip ? 'flip' : ''}`}
                onClick={this.changeFlip}
                >
                    <div className="front">
                        {this.props.details_front}
                    </div>
    
                    <div className="back">
                        {this.props.details_back}
                    </div>
                    {this.state.flip ?
                    null :
                    <>
                        <button className="deleteBtn btn btn-outline-danger" onClick={() => this.props.deleteFlashcard(this.props.id)}>🗑</button>
                        <button className="editBtn btn btn-outline-success" onClick={() => this.props.editFlashcard(this.props.id)}>✎</button>
                    </>}
                </div>
            )
        }
    }
}

export default Flashcard

{/* {this.state.flip ? this.props.details_back : this.props.details_front} */}