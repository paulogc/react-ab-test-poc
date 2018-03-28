import React, { Component } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { loadMenu } from 'redux-flow/actions/menu';
import Dropdown from './Dropdown';
import './style.scss';

class Header extends Component {
  static propTypes = {
    menu: arrayOf(PropTypes.object),
    testA: PropTypes.bool,
    onLoadMenu: PropTypes.func.isRequired,
  }

  static defaultProps = {
    menu: [],
    testA: false,
  }

  componentDidMount() {
    if (!this.props.menu.length) {
      this.props.onLoadMenu();
    }
  }

  renderMenuItem = () =>
    this.props.menu.map(menuItem => (
      <Dropdown
        key={menuItem.id}
        label={menuItem.label}
      />
    ));

  render() {
    const { testA } = this.props;

    return (
      <nav className={`header-menu${testA ? '__testA' : ''}`}>
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
