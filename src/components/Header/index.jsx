const Header = () => {
  return (
    <header className="header">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-end">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="search"
              aria-label="search"
            />
            <button className="btn btn-outline-success" type="submit">
              search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
