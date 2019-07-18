import React, { PureComponent } from 'react'

class Game extends PureComponent {
  render() {
    return (
      <div>
        <h2>{this.props.name}, you are sitting silently.</h2>
        <h2>Total Drubs: {this.props.drubAmount}</h2>
        <h2>Level: {this.props.level}</h2>
        <p>Drub Slimes <button onClick={this.props.clickDrub}>Drub</button></p>
      </div>
    )
  }
}

export default Game