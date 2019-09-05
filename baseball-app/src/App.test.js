import React from 'react';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  render(<App />);
})

test('Display and Dashboard render', () => {
  const container = render(<App />);
  container.getByText(/strikes/i)
})
