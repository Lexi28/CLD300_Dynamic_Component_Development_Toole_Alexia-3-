import styles from './docs.module.scss';

import { NavLink, Outlet } from 'react-router-dom';

const Docs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NavLink to="overview">Overview</NavLink>
        <NavLink to="card">Card</NavLink>
        <NavLink to="navbar">Navbar</NavLink>
        <NavLink to="button">Button</NavLink>
        <NavLink to="ratingwidget">Ratings</NavLink>
        <NavLink to="footer">Footer</NavLink>
      </div>

      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Docs;
