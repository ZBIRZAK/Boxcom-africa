import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header menu', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /boxcom africa/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /talk to our pr team/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /pr agency in morocco for africa/i })).toBeInTheDocument();
});
