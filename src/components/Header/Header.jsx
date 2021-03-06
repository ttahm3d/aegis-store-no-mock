import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} shadow`}>
      <div className="main-container">
        <nav className={`${styles.navbar} flex align-center flex-gap-2`}>
          <div className={styles.logo}>
            <Link to="/">
              <h2>Aegis Store</h2>
            </Link>
          </div>
          <div className="nav-items flex align-center flex-gap-1">
            <ul className="nav-list flex align-center style-none flex-gap-1">
              <li className="nav-list-item">
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="nav-list-item">
                <a className="btn btn-accent" href="login.html">
                  Login
                </a>
              </li>
            </ul>
            <button className="btnToggle">
              <i className="fas fa-moon"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
