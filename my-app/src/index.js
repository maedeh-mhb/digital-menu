import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CategoryContextProvider } from './context/CategoryContext';
import './index.css';
import './fonts/IRANYekan/IRANYekan.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>  
    </CategoryContextProvider>
  </React.StrictMode>
);

