import React from "react";
import { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePageTest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://mocki.io/v1/c0e8fc0e-bbd3-42e7-a2fb-4f42c775d8c0`)
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

  const dataT = {
    columns: [
      {
        label: "Team",
        field: "team_acronym",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "disabled",
        width: 270,
      },
      {
        label: "Games",
        field: "games_played",
        sort: "asc",
        width: 200,
      },
      {
        label: "Points",
        field: "points_per_game",
        sort: "asc",
        width: 100,
      },
      {
        label: "Rebounds",
        field: "rebounds_per_game",
        sort: "asc",
        width: 150,
      },
      {
        label: "Assists",
        field: "assists_per_game",
        sort: "asc",
        width: 100,
      },
      {
        label: "Steals",
        field: "steals_per_game",
        sort: "asc",
        width: 100,
      },
      {
        label: "Blocks",
        field: "blocks_per_game",
        sort: "asc",
        width: 100,
      },
      {
        label: "Detail",
        field: "name",
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
      data={dataT}
    />
  );
};

export default DatatablePageTest;
