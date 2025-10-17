import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/lakshay pareek/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
