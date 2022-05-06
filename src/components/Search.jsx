import React, { Component } from "react";
import players from "./players.json";

const key = "team_name";
const arrayUniqueByKey = [
  ...new Map(players.map((item) => [item[key], item])).values(),
];

function SortArray(x, y) {
  if (x.team_name < y.team_name) {
    return -1;
  }
  if (x.team_name > y.team_name) {
    return 1;
  }
  return 0;
}

const arrayOrderByTeam = arrayUniqueByKey.sort(SortArray);

class LocalFileRead extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <form className="mx-5 mt-5 p-3 border">
        <div className="row g-3 align-items-center mb-3 d-flex justify-content-center">
          <div className="col-auto">
            <label for="inputPassword6" class="col-form-label">
              Team:
            </label>
          </div>
          <div className="col-auto me-5">
            <select className="form-select" id="inputGroupSelect01">
              <option selected>All</option>
              {arrayOrderByTeam.map((item, i) => (
                <option value={i}>{item.team_name}</option>
              ))}
            </select>
          </div>
          <div className="col-auto">
            <label for="inputPassword6" class="col-form-label">
              Keywords:
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              aria-describedby="passwordHelpInline"
            ></input>
          </div>
        </div>
        <div className="col-auto d-flex justify-content-center">
          <button type="submit" className="btn btn-lg btn-secondary mt-5">
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default LocalFileRead;