import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from './Components/Dashboard';


test('renders without crashing', () => {
  render(<App />);
})

test('Dashboard rendered', () => {
  const { findByText } = render(<Dashboard />)
  findByText(/STRIKE/)
  findByText(/BALLS/)
  findByText(/HITS/)
  findByText(/FOULS/)
})

// test('Strikes rendered', () => {
//   const container = render(<App />);
//   container.findByText(/STRIKES/)
// })

// test('Balls rendered', () => {
//   const container = render(<App />);
//   container.findByText(/BALLS/);
// })

// test('Hits rendered', () => {
//   const container = render(<App />);
//   container.findByText(/HITS/);
// })

// test('Fouls rendered', () => {
//   const container = render(<App />);
//   container.findByText(/FOULS/);
// })
