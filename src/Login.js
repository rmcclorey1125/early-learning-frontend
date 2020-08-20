import React from 'react'
import { Button, Form} from 'react-bootstrap'

class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/login', {
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'Accept':'application/json'
            },
            body:JSON.stringify(
                this.state
            )
          }
        )
        .then(resp => resp.json())
        .then(user => {
            if(user){
                this.props.handleUser(user)
                this.props.history.push('/')
            }else{
                alert('Credentials did not match!')
            }
          
        })
        .then(this.setState({
            username: "",
            password: ""
        }))
    }

    render() {
        return (
            <div className="login-form">
                <h1>Login</h1>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                    </Form.Group>

                    <Button variant="outline-primary" className="log-btn" type="submit">
                        Log in
                    </Button>

                    <Button variant="outline-warning" className="log-btn" onClick={this.props.toggleNewUser}>
                        Signup
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login