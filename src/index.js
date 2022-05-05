import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import './sass/index.scss';
import "./sass/style.scss";
// import reportWebVitals from './reportWebVitals';
import Header from "./components/header";
import Menu from "./components/menu";
import Search from "./components/search";
import ShowCharts from "./components/showCharts";
import Table from "./components/table";
// import DatatablePage from './components/tableTwo';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DatatablePageTest from "./components/tableTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Search />
    <ShowCharts />
    <DatatablePageTest />
  </React.StrictMode>
);
