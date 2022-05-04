import logo from "../assets/logo_160.png";
import avatar from "../assets/avatar.jpg";

function header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          <img src={logo} alt=""></img>
        </a>
        <span className="navbar-text">
          <img src={avatar} alt="" width="75" height="100%"></img>
        </span>
      </div>
    </nav>
  );
}

export default header;
