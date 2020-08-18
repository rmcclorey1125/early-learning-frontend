import React from 'react'
import bird from './Sounds/bird-whistle.wav'
import dog from './Sounds/dog-bark.wav'
import cat from './Sounds/cat-meow.wav'
import bee from './Sounds/bee-buzzing.wav'

class Sounds extends React.Component {
    state = {
      play: false
    }

    audioBird = new Audio(bird)
    audioDog = new Audio(dog)
    audioCat = new Audio(cat)
    audioBee = new Audio(bee)
  
    componentDidMount() {
      this.audioBird.addEventListener('ended', () => this.setState({ play: false }));
      this.audioDog.addEventListener('ended', () => this.setState({ play: false }));
      this.audioCat.addEventListener('ended', () => this.setState({ play: false }));
      this.audioBee.addEventListener('ended', () => this.setState({ play: false }));
    }
  
    componentWillUnmount() {
      this.audioBird.removeEventListener('ended', () => this.setState({ play: false }));  
      this.audioDog.removeEventListener('ended', () => this.setState({ play: false }));  
      this.audioCat.addEventListener('ended', () => this.setState({ play: false }));
      this.audioBee.addEventListener('ended', () => this.setState({ play: false }));
    }
  
    togglePlayBird = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audioBird.play() : this.audioBird.pause();
      });
    }
  
    togglePlayDog = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audioDog.play() : this.audioDog.pause();
      });
    }

    togglePlayCat = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audioCat.play() : this.audioCat.pause();
      });
    }

    togglePlayBee = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audioBee.play() : this.audioBee.pause();
      });
    }

    render() {
      return (
        <>
          {/* <button >{this.state.play ? 'Pause' : 'Play'}</button> */}
          <img src="https://media2.giphy.com/media/d9UAwX6gd6d3zYrTF5/giphy.gif?cid=ecf05e4714kaojl2c4wiqyo0786zf0oyya9b9pdifyu372jc&rid=giphy.gif" alt="bird" className="bird" onClick={this.togglePlayBird}/>
          <img src="/dog-bark.gif" className="dog-bark" alt="dog" onClick={this.togglePlayDog} />
          <img src="/cat-gif.gif" className="cat" alt="cat" onClick={this.togglePlayCat} />
          <img src="/bee.gif" className="bee" alt="bee" onClick={this.togglePlayBee} />
        </>
      );
    }
  }
  
  export default Sounds;