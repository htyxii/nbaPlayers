import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/style.scss";
// import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Search from "./components/Search";
import Chart from "./components/Chart";
import DatatablePage from "./components/DatatablePage";



import 'bootstrap-css-only/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Search />
    <Chart />
    <DatatablePage />
  </React.StrictMode>
);
