import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header menu', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  expect(screen.getByRole('link', { name: /boxcom africa/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Études de cas' })).toHaveAttribute('href', '/en/projects');
  expect(screen.getByRole('link', { name: 'Tous les services' })).toHaveAttribute('href', '/services');
  expect(screen.getByRole('link', { name: 'View this page in English' })).toHaveAttribute('href', '/en');
  expect(screen.getByRole('link', { name: /parler à notre équipe rp/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /agence rp au maroc tournée vers l’Afrique/i })).toBeInTheDocument();
});

test('shows the crisis need selector on an attributed contact page', () => {
  window.history.replaceState({}, '', '/contact?from=crisis');
  window.scrollTo = jest.fn();
  const { unmount } = render(<App />);

  expect(screen.getByRole('combobox', { name: 'Votre besoin *' })).toBeRequired();
  expect(screen.getByRole('option', { name: 'Préparer un plan de crise' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Situation urgente' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Autre' })).toBeInTheDocument();

  unmount();
  window.history.replaceState({}, '', '/');
});
