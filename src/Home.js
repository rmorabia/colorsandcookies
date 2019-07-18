import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <p>what's your name, bud?</p>
        <form onSubmit={this.props.saveName}><input type="text" name="name" placeholder="name" /></form>
      </div>
    )
  }
}

export default Home