import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from'./menu.module.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink exact activeClassName={styles.myActive} className="navbar-brand" to="/">Login</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact activeClassName={styles.myActive} className="nav-link" aria-current="page" to="/">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName={styles.myActive} className="nav-link" to="/list">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName={styles.myActive} className="nav-link" to="/create">Create</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    )
}

export default Navbar
