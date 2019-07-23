import React, { PureComponent } from 'react'

class Game extends PureComponent {
  render() {
    return (
      <div>
        <h2>{this.props.name}, you are sitting silently.</h2>
        <h2>Total Slimes Killed: {this.props.drubAmount}</h2>
        <h2>Level: {this.props.level}</h2>
        <p>Drub Slime <button onClick={this.props.clickDrub}>Drub</button></p>
        <h2>Current Slime HP: {this.props.currentSlimeHP}</h2>
        <h2>{this.props.miss ? 'You Missed!' : null}</h2>
      </div>
    )
  }
}

export default Game