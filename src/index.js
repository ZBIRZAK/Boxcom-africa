import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Preserve old bookmarks while moving from hash routing to crawlable paths.
if (window.location.hash.startsWith('#/')) {
  const legacyRoute = window.location.hash.slice(1);
  const destination = legacyRoute === '/fr'
    ? '/'
    : legacyRoute.startsWith('/fr/')
      ? legacyRoute.slice(3)
      : legacyRoute === '/'
        ? '/en'
        : `/en${legacyRoute}`;
  window.location.replace(`${destination}${window.location.search}`);
}

const container = document.getElementById('root');
const application = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, application);
} else {
  createRoot(container).render(application);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
