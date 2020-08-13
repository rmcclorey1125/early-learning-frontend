import React from 'react'
import Flashcard from './Flashcard'
import FlashcardModal from './FlashcardModal';
// import {Button} from 'react-bootstrap'

class FlashcardContainer extends React.Component{

    // const [flashcards, setFlashcards] = useState()

    state= {
        flashcards: [],
        showModal: false,
        editId: null
    }

    toggleModal = () => this.setState( prevState => ({showModal:!prevState.showModal}));

    addFlashcard = (newFlashcard) => {
        this.setState({
            flashcards: [...this.state.flashcards, newFlashcard]
        })
    }

    deleteFlashcard = (id) =>{
        fetch(`http://localhost:3000/api/v1/flashcards/${id}`,{
          method:"DELETE",
          headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
          }
        })
        .then(resp=>resp.json())
        .then(deletedFlashcard => {
            const flashcards = this.state.flashcards.filter(card=>card.id !== deletedFlashcard.id)
            this.setState({flashcards: flashcards})
        })
    }

    updateFlashcard = (updatedFlashcard) => {
        const uFlashcards = this.state.flashcards.map ( flashcard =>{
            if(flashcard.id === updatedFlashcard.id){
                return updatedFlashcard
            }
            return flashcard
        })

        this.setState({
            flashcards: uFlashcards,
            editId: null
        })
    }

    editFlashcard = (id) => {
        this.setState({ 
            editId: id, 
            showModal: true})
    }

    componentDidMount(){

        fetch("http://localhost:3000/api/v1/flashcards")
        .then(resp => resp.json())
        .then(flashcards => {
            this.setState({ flashcards })
            }
        )
    }
    render() {
        const flashcardToBeEdited = this.state.editId ? this.state.flashcards.find(card => card.id === this.state.editId) : null;
        return (
            <>
                <h1>My FlashCards</h1>
                <div className='card-grid'>
                    {this.state.flashcards.map(card => {
                        if(this.props.user){
                            if(card.user_id === this.props.user.id){
                                return <Flashcard {...card} key={card.id} toggleModal={this.toggleModal} deleteFlashcard={this.deleteFlashcard} editFlashcard={this.editFlashcard}/>
                            }
                        }else{
                            this.props.history.push('/Auth')
                        }
                    })}
                </div>

                <button onClick={this.toggleModal}>Create New Flashcard</button>

                <div>
                    <FlashcardModal 
                        show={this.state.showModal}
                        toggleModal={this.toggleModal}
                        addFlashcard={this.addFlashcard}
                        updateFlashcard={this.updateFlashcard}
                        user={this.props.user}
                        flashcardToBeEdited={flashcardToBeEdited}
                    />
                </div>
            </>
        )
    }
}

export default FlashcardContainer