import React from "react";
import { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";

import queryString from "query-string";

const DatatablePageTest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parsed = queryString.parse(window.location.search);
  const keyword = parsed.keyword;
  const team = parsed.team;
  console.log(team);
  console.log(keyword);

  useEffect(() => {
    // List all data
    if (team === undefined && keyword === undefined) {
      fetch(`http://localhost:9999/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (team === "All" && keyword === "") {
      fetch(`http://localhost:9999/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (team !== undefined && keyword === "") {
      fetch(`http://localhost:9999/search/team/${team}`) // https://mocki.io/v1/c0e8fc0e-bbd3-42e7-a2fb-4f42c775d8c0
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (team === 'All' && keyword !== undefined) {
      fetch(`http://localhost:9999/search/keywordOnly/${keyword}`) // https://mocki.io/v1/c0e8fc0e-bbd3-42e7-a2fb-4f42c775d8c0
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (team !== 'All' && team !== undefined && keyword !== ''&& keyword !== undefined) {
      fetch(`http://localhost:9999/search/keyword/${team}/${keyword}`) // https://mocki.io/v1/c0e8fc0e-bbd3-42e7-a2fb-4f42c775d8c0
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } 
  }, []);

  const tableData = {
    columns: [
      {
        label: "Team",
        field: "Team",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Name",
        field: "Name",
        sort: "disabled",
        width: 270,
      },
      {
        label: "Games",
        field: "Games",
        sort: "asc",
        width: 200,
      },
      {
        label: "Points",
        field: "Points",
        sort: "asc",
        width: 100,
      },
      {
        label: "Rebounds",
        field: "Rebounds",
        sort: "asc",
        width: 150,
      },
      {
        label: "Assists",
        field: "Assists",
        sort: "asc",
        width: 100,
      },
      {
        label: "Steals",
        field: "Steals",
        sort: "asc",
        width: 100,
      },
      {
        label: "Blocks",
        field: "Blocks",
        sort: "asc",
        width: 100,
      },
      {
        label: "Detail",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: data,
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      small
      entriesOptions={[15, 50, 100]}
      searching={false}
      data={tableData}
    />
  );
};

export default DatatablePageTest;
