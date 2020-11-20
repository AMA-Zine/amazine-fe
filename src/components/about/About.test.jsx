import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from './About';
import { MemoryRouter } from 'react-router-dom';

describe('About component', () => {
  afterEach(() => cleanup());
  it('renders About Component', () => {
    const { asFragment } = render(<MemoryRouter><About /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
