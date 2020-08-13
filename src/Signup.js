import React from 'react'
import { Button, Form } from 'react-bootstrap'

class Signup extends React.Component {

    state = {
        username: "",
        password: "",
        confirmation: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        if (this.state.password !== this.state.confirmation){
            alert("Your Password does not match!")
        } else {
            fetch('http://localhost:3000/api/v1/users', {
                method:'POST',
                headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
                },
                body:JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }
            )
            .then(resp => resp.json())
            .then(user => {
                if(user.id){
                    // window.localStorage.setItem("user", JSON.stringify(user))
                    this.props.handleUser(user)
                    this.props.history.push('/')
                }else{
                    alert ("We're sorry that username has already been taken.")
                }
               
            })
            .then(this.setState({
                username: "",
                password: "",
                confirmation: ""
            }))
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="login-form">
                <h1>Sign up</h1>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPasswordConfirmation">
                        <Form.Label>Re-type Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-Type Password" name="confirmation" value={this.state.confirmation} onChange={this.changeHandler}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>

                    <Button variant="info" onClick={this.props.toggleNewUser}>
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Signup