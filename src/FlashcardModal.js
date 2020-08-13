import React from 'react'
import {Button, Modal, Form} from 'react-bootstrap'


class FlashcardModal extends React.Component {
 
  state = {
    id: "",
    name: "",
    details_front: "",
    details_back: "",
    img_front: false
  }
  componentDidUpdate(prevProps){
    if ((this.props.flashcardToBeEdited && this.props.flashcardToBeEdited.id !== this.state.id)){
      const {id, user_id, name, details_front, details_back, img_front} = this.props.flashcardToBeEdited
      const newState =  { 
        id: id,
        user_id: user_id,
        name: name,
        details_front: details_front,
        details_back: details_back,
        img_front: img_front
      }
      this.setState(newState)
    }

    if (!this.props.flashcardToBeEdited && this.state.id !== ''){
      this.setState({
        id:"",
        content:"",
        rating:"0"
      })
    }
  } 
  
  handleChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

  handleCheckbox = () => {
      this.setState(prevState => ({img_front: !prevState.img_front}))
  }
  
  handleClick = () => {
    const {id, name, details_front, details_back, img_front} = this.state
    
    fetch(`http://localhost:3000/api/v1/flashcards/${id}`,{
      method:(id ? 'PATCH' : 'POST'),
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify({
        user_id: this.props.user.id,
        name: name,
        details_front: details_front,
        details_back: details_back,
        img_front: img_front
      })
    })
    .then(resp=>resp.json())
    .then(flashcard =>{
      this.props.toggleModal()
      id ? this.props.updateFlashcard(flashcard): this.props.addFlashcard(flashcard)
    })
    .then(this.setState({
        name: "",
        details_front: "",
        details_back: "",
        img_front: false
    }))
  }

  render(){
    const {show, toggleModal} = this.props
    const {name, details_front, details_back} = this.state
    return (
      <>
        <Modal show={show} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Flashcard Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter card name" name="name" value={name} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="details_front">
                <Form.Label>Front</Form.Label>
                <Form.Control type="text" placeholder="Enter card front" name="details_front" value={details_front} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="details_back">
                <Form.Label>Back</Form.Label>
                <Form.Control type="text" placeholder="Enter card back" name="details_back" value={details_back} onChange={this.handleChange} />
              </Form.Group>
                    <div className="mb-3">
                        <Form.Check 
                            type={"checkbox"}
                            id={`default-checkbox`}
                            label={`Check if front is a Image URL`}
                            onChange={this.handleCheckbox}
                        />
                    </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClick}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FlashcardModal;