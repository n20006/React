import React from 'react'
import './App.css'

const LoadingView = props => <h1>{props.text}</h1>
const InitialView = props =>
  props.state.loading ? (
    <LoadingView text='Now Loading...' />
  ) : (
    <MainView state={props.state} />
  )

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount () {
    this.setState({
      loading: false
    })
  }

  render () {
    console.log(this.state)
    return <InitialView state={this.state} />
  }
}

class MainView extends React.Component {
  constructor (props) {
    super(props)
    this.state = { weight: null, height: null, sum: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <>
        <TestForm
          onChange={this.handleChange}
          onChange2={this.handleChange2}
          onClick={this.handleSubmit}
        />
        <TestView bmi={this.state.bmi} />
      </>
    )
  }

  handleChange (e) {
    const [name, value] = [e.target.name, parseInt(e.target.value, 10)]
    this.setState({ [name]: value })
    console.log([name, value])
  }

  handleChange2 (e) {
    const [name, value] = [e.target.name, parseInt(e.target.value, 10)]
    this.setState({ [name]: value })
    console.log([name, value])
  }

  handleSubmit () {
    const { weight, height } = this.state
    console.log(weight, height)
    const value = (weight / height ** 2) * 10000
    console.log(value)
    this.setState({ bmi: value })
    console.log(this.state.bmi)
  }
}

const TestView = props => {
  return <div>BMI:{props.bmi}</div>
}

const TestForm = props => {
  return (
    <div>
      <fieldset>
        <div>
          <input
            type='number'
            name='height'
            onChange={props.onChange}
            placeholder='身長'
          />
          (cm)
        </div>
        <div>
          <input
            type='number'
            name='weight'
            onChange={props.onChange2}
            placeholder='体重'
          />
          (kg)
        </div>
        <div>
          <button onClick={props.onClick}>submit</button>
        </div>
      </fieldset>
    </div>
  )
}

export default App
