import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Menu from './components/menu';
import Main from './components/main';
import ShowCharts from './components/showCharts';
import Table from './components/table';
import Pagination from './components/pagination';
import JsonDataDisplay from './components/table';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Menu />
    <Main />
    <ShowCharts />
    <JsonDataDisplay />
    <Pagination />
  </React.StrictMode>
);

