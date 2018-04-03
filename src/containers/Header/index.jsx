import React, { Component } from 'react';
import PropTypes, { arrayOf, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import { loadMenu } from 'redux-flow/actions/menu';
import Dropdown from './Dropdown';
import Submenu from './Submenu';
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

  state = { selectedItemId: null };

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentDidMount() {
    if (!this.props.menu.length) {
      this.props.onLoadMenu();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClickMenu();
  }

  handleClickMenu = (selectedItemId) => {
    this.setState({ selectedItemId });
  }

  renderMenuItem = () =>
    this.props.menu.map((menuItem) => {
      const { id, label, items } = menuItem;
      return (
        <Dropdown
          key={id}
          id={id}
          label={label}
          isSelected={id === this.state.selectedItemId}
          onClick={this.handleClickMenu}
        >
          <Submenu
            subItems={items}
          />
        </Dropdown>
      );
    });

  render() {
    const variant = this.props.cookies.get('lindd') || '';

    return (
      <nav className="header-menu">
        <ul
          className={`${variant.includes('variantB') ? ' testA' : ''}`}
          ref={(node) => { this.node = node; }}
        >
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
