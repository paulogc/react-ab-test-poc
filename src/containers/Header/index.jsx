import React, { Component } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { loadMenu } from 'redux-flow/actions/menu';
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
    this.props.menu.map(menuItem => <li key={menuItem.id}>{menuItem.label}</li>);

  render() {
    console.log(this.props.menu);
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
