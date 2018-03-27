import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';

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
  import('containers/Header' /* webpackChunkName: "Header" */),
  loading: () => <div>Loading</div>,
});

const Routes = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={HomeLodable} />
      <Route exact path="/home" component={InvestmentFundListPageLodable} />
    </Switch>
  </Fragment>
);

export default Routes;
