mport axios from 'axios';

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080', headers: { 'Content-Type': 'application/json' }, });
src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render( <React.StrictMode> <BrowserRouter> <App /> </BrowserRouter> </React.StrictMode> );
