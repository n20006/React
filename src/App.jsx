import React from 'react'
import './App.css'

class textinput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      message: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.send = this.send.bind(this)
  }

  handleInput ({ target: { value } }) {
    this.setState({
      value
    })
  }

  sed () {
    const value = this.state
    this.setState({
      value: '',
      message: value
    })
  }

  render () {
    return (
      <>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleInput.bind(this)}
        />
        <button onClick={this.send.bind(this)}>send</button>
      </>
    )
  }
}

export default textinput
