import React, { Component, Fragment } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
import { loadMenu } from 'redux-flow/actions/menu';

export const InvestmentFundListPageLodable = Loadable({
  loader: () =>
  import('components/InvestmentFundList' /* webpackChunkName: "InvestmentFundListPage" */),
  loading: () => <div>Loading</div>,
});

export const HomeLodable = Loadable({
  loader: () =>
  import('components/Home' /* webpackChunkName: "Home" */),
  loading: () => <div>Loading</div>,
});

export const Header = Loadable({
  loader: () =>
  import('components/Header' /* webpackChunkName: "Header" */),
  loading: () => <div>Loading</div>,
});

class Routes extends Component {
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

  render() {
    return (
      <Fragment>
        <Header menu={this.props.menu} />
        <Switch>
          <Route exact path="/" component={HomeLodable} />
          <Route exact path="/home" component={InvestmentFundListPageLodable} />
        </Switch>
      </Fragment>
    );
  }
}

export default connect(
  ({ menuReducer }) => ({ menu: menuReducer.menu }),
  {
    onLoadMenu: loadMenu,
  },
)(Routes);
