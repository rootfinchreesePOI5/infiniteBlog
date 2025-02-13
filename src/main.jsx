import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './Context/AppContext.jsx';
import NewsProvider from './Context/NewsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppProvider>
    <NewsProvider>
    <App />
    </NewsProvider>
  </AppProvider>
  </BrowserRouter>,
);