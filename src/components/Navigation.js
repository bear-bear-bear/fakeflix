/* modules */
import React from 'react';
import { Link } from 'react-router-dom';

/* css */
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
