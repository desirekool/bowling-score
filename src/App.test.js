import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Bowling Score Header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Bowling Score/i);
  expect(linkElement).toBeInTheDocument();
});
