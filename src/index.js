import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePage from './pages/SinglePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='product/:id' element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>


  </React.StrictMode >
);
