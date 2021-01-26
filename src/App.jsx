import React from 'react'
import './App.css'

class SumNum extends React.Component {
  constructor (props) {
    super(props)
    this.state = { num1: null, num2: null, sum: null }
  }

  render () {
    return (
      <div>
        <input type='number' value={this.state.num1} />
        +
        <input type='number' value={this.state.num2} />
        <button onClick={() => this.handleClick()}>
          =
        </button>
      </div>
    )

    handleClick() {
      let ans = parseInt(this.state.num1) + parseInt(this.state.num2)
      this.setState({
        sum: ans
      })
    }
  }
}

export default SumNum
