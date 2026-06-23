import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { DarkProvider } from './contexts/theme/DarkProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkProvider>
  </StrictMode>
);
