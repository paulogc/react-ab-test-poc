import React, { Fragment } from 'react';
import Loadable from 'react-loadable';

export const HeaderLoadable = Loadable({
  loader: () =>
  import('containers/Header' /* webpackChunkName: "Header" */),
  loading: () => <div>Loading</div>,
});

const Routes = () => (
  <Fragment>
    <HeaderLoadable />
  </Fragment>
);

export default Routes;
