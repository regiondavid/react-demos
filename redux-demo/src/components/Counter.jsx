import React, {Component, PropTypes} from 'react'
const PropTypes = require('prop-types')

class Counter extends React.Component {
  incrementIfOdd() {
    if(this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <p>
        点击 {value} 次
        {'  '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={this.incrementIfOdd.bind(this)}>如果是奇数就增加</button>
        {' '}
        <button onClick={this.incrementAsync.bind(this)}>异步增加</button>
      </p>
    )
  }

}

Counter.contextTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;