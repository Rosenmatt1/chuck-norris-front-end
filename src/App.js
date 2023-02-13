import React, { Component } from 'react';
import Card from "./Components/Card.js"
import './App.css';
import image from "./chuck-norris.png"
import data from './data.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: false,
      tags: ""
    }
  }

  getRandomInt = (max) => {
    let min = 0
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateQuote = () => {
    const randomIndex = this.getRandomInt(this.state.jokes.length)
    const randomJoke = this.state.jokes[randomIndex]
    this.setState({
      quote: randomJoke.joke,
      tags: randomJoke.categories
    })
    var sound = new Audio("upper-cut.mp3")
    sound.play()
  }

  componentDidMount() {
    // fetch("https://chuck-norris-quote-generator.herokuapp.com/jokes")
    //   .then(data => data.json())
    //   .then(JSONdata => {
    //     console.log(JSONdata)
    //     this.setState({ jokes: JSONdata.data.jokes })
    //   })
    this.setState({ jokes: data.jokes })
    console.log("data", data)
    console.log("jokes", this.state.jokes)
  }


  render() {
    return (
      <div className="container">
        <div className="row justify-content-center column">
          <div className="col-10 text-center">
            <h1 className="my-2">Hello Chuck!</h1>
            <img src={image} alt="chuck" style={{ height: "200px" }} />
            <p className="">An app for randomly generating Chuck Norris jokes.</p>
            <div className="row justify-content-center">
              {
                this.state.quote ? <Card
                  quote={this.state.quote}
                  tags={this.state.tags}
                />
                  : <div></div>
              }
            </div>
            <button
              className="btn btn-danger btn-lg"
              onClick={this.generateQuote}>
              Karate Chop!
              <br></br>
              <i className="fas fa-fist-raised" style={{ fontSize: "50px" }}>
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
