import React, { Component } from 'react';
import PropTypes, { arrayOf, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import { loadMenu } from 'redux-flow/actions/menu';
import Dropdown from './Dropdown';
import './style.scss';

class Header extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
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
      <Dropdown
        key={menuItem.id}
        label={menuItem.label}
      />
    ));

  render() {
    const variant = this.props.cookies.get('lindd');

    return (
      <nav className="header-menu">
        <ul className={`${variant.includes('variantB') ? ' testA' : ''}`}>
          {this.renderMenuItem()}
        </ul>
      </nav>
    );
  }
}


export default withCookies(connect(
  ({ menuReducer }) => ({ menu: menuReducer.menu }),
  {
    onLoadMenu: loadMenu,
  },
)(Header));
