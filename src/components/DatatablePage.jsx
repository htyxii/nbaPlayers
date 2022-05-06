import React from "react";
import { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePageTest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9999/all`) // https://mocki.io/v1/c0e8fc0e-bbd3-42e7-a2fb-4f42c775d8c0
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
