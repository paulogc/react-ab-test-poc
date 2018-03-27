import React from 'react';
import { render } from 'enzyme';
import expect from 'expect';
import withMemoryRouter from '../../../utils/testUtils';
import Header from '../';

const HeaderWithRouter = withMemoryRouter(Header);

describe('Header', () => {
  it('Renders as the snapshot', () => {
    const rendered = render(<HeaderWithRouter />);
    expect(rendered).toMatchSnapshot();
  });
});
