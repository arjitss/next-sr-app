import React from 'react';
import PropTypes from 'prop-types';

Menu.propTypes = {};

function Menu(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Speakers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sessions
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
