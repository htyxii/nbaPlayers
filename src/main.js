function main() {
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
            <option value="1">LA Lakers</option>
            <option value="2">GS Warriors</option>
            <option value="3">NY Knicks</option>
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

export default main;
