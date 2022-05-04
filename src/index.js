import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Header from './header';
import Menu from './menu';
import Main from './main';
import ShowCharts from './showCharts';
import Table from './table';
import Pagination from './pagination';
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
    <Table />
    <Pagination />
  </React.StrictMode>
);

