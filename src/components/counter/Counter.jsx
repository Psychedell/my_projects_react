import { Component } from 'react';
import { Controls } from './Controls';
import { Value } from './Value';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
    // this.setState(prevState => {
    //   return { value: prevState.value - 1 };
    // });
  };

  render() {
    return (
      <div>
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
