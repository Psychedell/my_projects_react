import Counter from 'components/counter/Counter';
import { Component } from 'react';
import { DropDownWrapper, DropDownMenu } from './Dropdown.styled';

class DropDown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <DropDownWrapper>
        <h2>Counter</h2>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Close' : 'Show'}
        </button>
        {this.state.visible && (
          <DropDownMenu>
            <Counter />
          </DropDownMenu>
        )}
      </DropDownWrapper>
    );
  }
}

export default DropDown;
