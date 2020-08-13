import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home'
import MultipleChoice from './MultipleChoice';
import FlashcardContainer from './FlashcardContainer';
import MatchCardContainer from './MatchCardContainer';
import Scores from './Scores'
import NavBar from './NavBar'
import Auth from './Auth'
import PuzzleGame from './PuzzleGame';
import Speaking from './Speaking';


class App extends React.Component {

  state= {
    user: "",
    abcEnd: false,
    abcRight: [],
    abcWrong: []
  }

  handleUser = (user) =>{
    this.setState({ user })
  }

  handleLogout = () =>{
    this.setState({ user:null})
    window.localStorage.removeItem("userId")
  }

  evaluate = (text, reading) => {
    let t = text.toLowerCase().split(' ')
    let r = reading.toLowerCase().split(' ')

    // console.log(rParts)
    // console.log(tParts)
    
    let common = t.filter(word => r.includes(word))
    let uncommon = r.filter(word => !t.includes(word))

    this.setState({
      abcEnd: true,
      abcRight: common,
      abcWrong: uncommon
    })
    // alert(`You got ${common.length} of 26 letters correct you missed ${uncommon}`)

    fetch('http://localhost:3000/api/v1/games',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify({
        user_id: this.state.user.id,
        score: common.length,
        game_type: "Alphabet"
      })
    })
    .then(resp=>resp.json())
    .then(game =>{
      console.log(game)
    })
  }

  endAbc = () => {
    this.setState({
      abcEnd: false,
      abcRight: [],
      abcWrong: []
    })
  }


  render () {

    return (
      <div className="App">
        <h1>Early Learning Games!</h1>
        <NavBar handleLogout={this.handleLogout} user={this.state.user}/>
        <Switch>
          <Route exact path="/" render={routerProps => <Home {...routerProps}/>}/>
          <Route exact path="/MultipleChoice" render={routerProps => <MultipleChoice {...routerProps} user={this.state.user}/>}/>
          <Route exact path="/PuzzleGame" render={routerProps => <PuzzleGame {...routerProps} user={this.state.user}/>}/>
          <Route exact path="/Speak" render={routerProps => <Speaking {...routerProps} user={this.state.user} abcEnd={this.state.abcEnd} abcRight={this.state.abcRight} abcWrong={this.state.abcWrong} endAbc={this.endAbc} evaluate={this.evaluate}/>}/>
          <Route exact path="/Flashcards" render={routerProps => <FlashcardContainer {...routerProps} user={this.state.user}/>}/>
          <Route exact path="/Scores" render={routerProps => <Scores {...routerProps} user={this.state.user}/>}/>
          <Route exact path="/Auth" render={routerProps => !this.state.user ? <Auth {...routerProps} handleUser={this.handleUser}/>:<Redirect to="/" />}/> 
          

          {/* <Route exact path="/Matchcards" render={routerProps => <MatchCardContainer {...routerProps} user={this.state.user}/>}/>
          <Route exact path="/Anime/:id" render={routerProps => <AnimePage user={this.state.user} handleUnfavorite={this.handleUnfavorite} {...routerProps} deleteAnime={this.deleteAnime} updateAnimeList={this.updateAnimeList} animes={this.state.animes} handleFavorite={this.handleFavorite}/>}/>
          <Route exact path="/Profile" render={routerProps => this.state.user ? <Profile {...routerProps} user={this.state.user} animes={this.currentUserfavorites()}/>:<Redirect to="/login" />}/>
          <Route path="*" component={NoMatch}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
