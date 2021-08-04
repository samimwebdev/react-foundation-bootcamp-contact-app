import React, { Component } from 'react'

//component
//Function
//class

class App extends Component {
  state = {
    count: 0,
    gameOver: false
  }

  incrementCount = () => {
    if (this.state.count === 10) {
      this.setState({
        gameOver: true
      })
    } else {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
    }
  }

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  resetCount = () => {
    this.setState({
      count: 0,
      gameOver: false
    })
  }

  render() {
    const { count, gameOver } = this.state
    const { incrementCount, decrementCount } = this

    return (
      <>
        <h1>Counter App</h1>
        <p>Count - {count}</p>
        <button disabled={gameOver} onClick={incrementCount}>
          Increment
        </button>
        <button disabled={gameOver} onClick={decrementCount}>
          Decrement
        </button>
        <IsOddOrEven
          count={count}
          gameOver={gameOver}
          resetCount={this.resetCount}
        />
      </>
    )
  }
}

class IsOddOrEven extends Component {
  // resetCount = () => {
  //   const { resetParent } = this.props
  //   resetParent()
  // }

  render() {
    const { count, gameOver, resetCount } = this.props
    const numberState = count % 2 === 0 ? 'Even' : 'odd'
    return (
      <>
        <p>
          {' '}
          {count} is {numberState}
        </p>
        {gameOver && <p>Game Over!!</p>}
        <button onClick={resetCount}>Reset</button>
      </>
    )
  }
}

export default App
