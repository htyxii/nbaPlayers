import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/style.scss";
// import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import Menu from "./components/Menu";
import ShowCharts from "./components/ShowCharts";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Search from "./components/Search";

import DatatablePage from "./components/DatatablePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Search />
    <ShowCharts />
    {/* <TableNew /> */}
    {/* <DatatablePageTest /> */}
    <DatatablePage />
  </React.StrictMode>
);
