import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            className={clsx(css.navLink, css.leftHalf)}
            activeclassname={css.active}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={clsx(css.navLink, css.rightHalf)}
            activeclassname={css.active}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
