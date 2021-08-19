import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? <div>{ props.login } - <button onClick={props.logout}>Log Out</button></div> : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
