import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ReactGA from 'react-ga4';
import { Analytics } from '@vercel/analytics/react';

ReactGA.initialize('G-XBE3PVRF3W');
ReactGA.send('pageview');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
      <Analytics />
  </StrictMode>,
)
