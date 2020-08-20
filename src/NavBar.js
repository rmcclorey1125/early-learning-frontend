import React from 'react'
import {Link} from 'react-router-dom';
import { Nav, Navbar, FormControl, Form, Button, NavDropdown } from 'react-bootstrap'


const NavBar = (props) => {
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/">
                <img
                    src="/FullLogoNoBG.png"
                    width="30"
                    height="30"
                    className="navImg d-inline-block align-top"
                    alt="Infinnite Learning Logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" className="nav-opt">Home</Nav.Link>
                <NavDropdown title="Dropdown" className="nav-opt" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/MultipleChoice">Quizzes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Speak">Alphabet</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/PuzzleGame">Puzzle</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/FlashCards">My Flashcards</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Scores">My Scores</NavDropdown.Item>
                    </NavDropdown>
            </Nav>
            <Form inline>
            {
                    props.user
                    ? 
                    <Button variant="outline-info" onClick={props.handleLogout} className="nav-opt">Log Out</Button>
                    :
                    <Nav.Link as={Link} to="/Auth">
                        <Button className="nav-opt">Log In</Button>
                    </Nav.Link>
                }    
            </Form>
        </Navbar>
    
    )
}

export default NavBar