import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders profile name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/lakshay pareek/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
