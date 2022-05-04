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
import DatatablePage from './components/tableTwo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Menu />
    <Main />
    <ShowCharts />
    <DatatablePage />
    {/* <Pagination /> */}
  </React.StrictMode>
);

