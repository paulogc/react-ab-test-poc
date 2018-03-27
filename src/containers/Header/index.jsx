import React, { Component } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { loadMenu } from 'redux-flow/actions/menu';
import DropDown from './Dropdown';
import './style.scss';

class Header extends Component {
  static propTypes = {
    menu: arrayOf(PropTypes.object),
    onLoadMenu: PropTypes.func.isRequired,
  }

  static defaultProps = {
    menu: [],
  }

  componentDidMount() {
    if (!this.props.menu.length) {
      this.props.onLoadMenu();
    }
  }

  renderMenuItem = () =>
    this.props.menu.map(menuItem => (
      <DropDown
        key={menuItem.id}
        label={menuItem.label}
      />
    ));

  render() {
    return (
      <nav className="header-menu">
        <ul>
          {this.renderMenuItem()}
        </ul>
      </nav>
    );
  }
}


export default connect(
  ({ menuReducer }) => ({ menu: menuReducer.menu }),
  {
    onLoadMenu: loadMenu,
  },
)(Header);
