import React, { Component } from 'react';
import Card from "./Components/Card.js"
import './App.css';

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
  }

  componentDidMount() {
    fetch("https://chuck-norris-quote-generator.herokuapp.com/jokes")
      .then(data => data.json())
      .then(JSONdata => {
        console.log(JSONdata)
        this.setState({ jokes: JSONdata.data.jokes })
      })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-8 text-center">
            <h1 className="pb-2">Welcome Chuck</h1>
            <p className="pb-2">An app for randomly generating bits of Chuck Norris quotes.</p>
            <button className="btn btn-danger btn-lg" onClick={this.generateQuote}>Karate Chop</button>
          </div>
        </div>
        <div className="row justify-content-center">
          {this.state.quote ? <Card
            quote={this.state.quote}
            tags={this.state.tags}
          />
            : ""}
        </div>
      </div>
    );
  }
}

export default App;
