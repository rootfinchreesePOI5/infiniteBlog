import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { NewsProvider } from './Context/NewsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NewsProvider>
    
    <App />
  </NewsProvider>
  </BrowserRouter>,
);