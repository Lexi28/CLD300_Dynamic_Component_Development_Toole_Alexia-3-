import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';

const Navbar = () => {
  console.log('Navbar rendered'); 
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/docs">Docs</NavLink>
    </nav>
  );
};

export default Navbar;
