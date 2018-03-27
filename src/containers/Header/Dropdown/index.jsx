import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropDown extends Component {
  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    label: '',
    children: null,
  }

  state = { displayDropdown: false };

  handleToggleDropdown = () => this.setState({ displayDropdown: !this.state.displayDropdown });

  render() {
    const {
      children,
      label,
    } = this.props;

    const { displayDropdown } = this.state;

    return (
      <li
        onClick={this.handleToggleDropdown}
      >
        {label}
        {displayDropdown && children}
      </li>
    );
  }
}

export default DropDown;
