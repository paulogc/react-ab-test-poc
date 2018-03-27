import React from 'react';
import { MemoryRouter } from 'react-router';

const withMemoryRouter = WrappedComponent =>
  props => (
    <MemoryRouter>
      <WrappedComponent {...props} />
    </MemoryRouter>
  );

export default withMemoryRouter;
