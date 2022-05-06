function header() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-dark p-2">
      <a className="navbar-brand" href=".">
        <li className="breadcrumb-item active pl-5 text-warning" aria-current="page">
          Player List
        </li>
        </a>
      </ol>
    </nav>
  );
}

export default header;
