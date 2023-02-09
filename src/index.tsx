import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Main/Home';
import Footer from './components/Main/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <Footer />
  </React.StrictMode>
);