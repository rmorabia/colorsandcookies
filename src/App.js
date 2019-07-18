import React, { PureComponent } from 'react'
import Home from './Home'
import Game from './Game'
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {

  state = {
    name: 'The Drubber',
    homeScreen: true,
    drubAmount: 0,
    level: 1
  }

  componentDidUpdate () {
    if (this.state.drubAmount === 10) {
      this.setState({ level: 2 })
    }
  }

  saveName = (e) => {
    e.preventDefault()
    if (e.target.name.value.length >= 1) {
      this.setState({ name: e.target.name.value })
    }
    this.setState({ homeScreen: false })
  }

  clickDrub = () => {
    this.setState({ drubAmount: this.state.drubAmount + 1 })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Colors & Cookies.</h1>
        {this.state.homeScreen ? <Home saveName={this.saveName}/> : <Game 
          name={this.state.name}
          clickDrub={this.clickDrub}
          drubAmount={this.state.drubAmount}
          level = {this.state.level}
        /> }
      </div>
    );
  }
}

export default App;
