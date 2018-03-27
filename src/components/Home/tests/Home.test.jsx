import React from 'react';
import { render } from 'enzyme';
import expect from 'expect';
import withMemoryRouter from '../../../utils/testUtils';
import Home from '../';

const HomeWithRouter = withMemoryRouter(Home);

describe('Home', () => {
  it('Renders as the snapshot', () => {
    const rendered = render(<HomeWithRouter />);
    expect(rendered).toMatchSnapshot();
  });
});
