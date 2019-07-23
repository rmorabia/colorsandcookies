import React, { PureComponent } from 'react'
import Home from './Home'
import Game from './Game'
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {

  state = {
    name: 'The Drubber',
    homeScreen: true,
    drubAmount: 1,
    level: 1,
    currentSlimeHP: 10,
    exponentialLevel: 1,
    miss: false
  }

  componentDidUpdate() {
    if (this.state.drubAmount === 10) {
      this.setState({ level: 2 })
    }
    if (this.state.currentSlimeHP <= 0) {
      let newSlimeHP = Math.round(10 * ((this.state.drubAmount + 1) * .01))
      if (newSlimeHP < 10) {
        newSlimeHP = 10
      }
      this.setState({
        drubAmount: this.state.drubAmount + 1,
        currentSlimeHP: newSlimeHP
      })
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
    let missChance = Math.random()
    if (missChance <= 0.06) {
      this.setState({ miss: true })
    } else {
      this.setState({ miss: false })
    }

    if (!this.state.miss) {

      let critChance = Math.random()

      let attackRangeTop = Math.ceil(this.state.level * 1.5 * this.state.exponentialLevel)
      let attackRangeBottom = Math.floor(this.state.level * 1.1 * this.state.exponentialLevel)
      let attack = Math.round(Math.random() * (attackRangeTop - attackRangeBottom) + attackRangeBottom)
      if (critChance <= 0.05) {
        attack = attack * 10
      }
      this.setState({ currentSlimeHP: this.state.currentSlimeHP - attack })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Colors & Cookies.</h1>
        {this.state.homeScreen ? <Home saveName={this.saveName} /> : <Game
          name={this.state.name}
          clickDrub={this.clickDrub}
          drubAmount={this.state.drubAmount}
          level={this.state.level}
          currentSlimeHP={this.state.currentSlimeHP}
          miss={this.state.miss}
        />}
      </div>
    )
  }
}

export default App;
