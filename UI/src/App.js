import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Admin from './Admin';



export default function App() {
  return (
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  );
}


