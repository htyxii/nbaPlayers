import React from "react";
import JsonData from "./players.json";
function JsonDataDisplay() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.team_acronym}</td>
        <td>{info.name}</td>
        <td>{info.games_played}</td>
        <td>{info.points_per_game}</td>
        <td>{info.rebounds_per_game}</td>
        <td>{info.assists_per_game}</td>
        <td>{info.steals_per_game}</td>
        <td>{info.blocks_per_game}</td>
        <td>{info.city}</td>
      </tr>
    );
  });

  return (
    <div className="mx-5 mt-5">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Team</th>
            <th scope="col">Name</th>
            <th scope="col">Games</th>
            <th scope="col">Points</th>
            <th scope="col">Rebounds</th>
            <th scope="col">Assist</th>
            <th scope="col">Steals</th>
            <th scope="col">Blocks</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
