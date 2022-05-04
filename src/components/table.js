import React from "react";
// import './App.css';
class Test extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://mocki.io/v1/c0e8fc0e-bbd3-42e7-a2fb-4f42c775d8c0")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    const DisplayData = items.map((item) => {
      return (
        <tr>
          <td>{item.team_acronym}</td>
          <td>{item.name}</td>
          <td>{item.games_played}</td>
          <td>{item.points_per_game}</td>
          <td>{item.rebounds_per_game}</td>
          <td>{item.assists_per_game}</td>
          <td>{item.steals_per_game}</td>
          <td>{item.blocks_per_game}</td>
          <td>{item.city}</td>
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
}

export default Test;
