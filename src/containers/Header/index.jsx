import React, { Component } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { loadMenu } from 'redux-flow/actions/menu';
import Dropdown from './Dropdown';
import Submenu from './Submenu';
import './style.scss';

class Header extends Component {
  static propTypes = {
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
    return (
      <nav className="header-menu">
        <ul
          ref={(node) => { this.node = node; }}
        >
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
