import { NavLink } from "react-router-dom";
import cls from "./Navbar.module.css";

const Navbar = () => {
    return (
      <nav className={cls.nav}>
        <div className={cls.item} >
          <NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink>
        </div>
        <div className={cls.item} >
          <NavLink to="/dialogs" activeClassName={cls.active}>Message</NavLink>
        </div>
        <div className={cls.item}>
          <a href="#1">News</a>
        </div>
        <div className={cls.item}>
          <a href="#1">Music</a>
        </div>
        <div className={cls.item}>
          <a href="#1">Settings</a>
        </div>
      </nav>
    );
}

export default Navbar;