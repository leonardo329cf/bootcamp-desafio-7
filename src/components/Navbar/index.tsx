import './styles.css';
import 'bootstrap/js/src/collapse.js'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-nav main-nav">
      <div className="container-fluid main-container-fluid">
        <a href="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse main-menu-collapse" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName='active' exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName='active'>
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
