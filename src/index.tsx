import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css';
import AppRouter from './routes';

//const currentComponent = window.location.pathname === '/' ? <Start/> : <Menu/>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRouter /* Renderiza oq está em routes */ />
  </React.StrictMode>
);