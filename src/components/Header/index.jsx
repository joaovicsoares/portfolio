function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
          DevJoao
          </a>
          <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      sobre
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Projetos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;