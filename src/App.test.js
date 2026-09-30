import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header menu', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  expect(screen.getByRole('link', { name: /boxcom africa/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
  expect(screen.getByRole('link', { name: 'All Services' })).toHaveAttribute('href', '/services');
  expect(screen.getByRole('link', { name: 'Voir cette page en français' })).toHaveAttribute('href', '/fr');
  expect(screen.getByRole('link', { name: /talk to our pr team/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /pr agency in morocco for africa/i })).toBeInTheDocument();
});
