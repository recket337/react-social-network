import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

export const Nav = (props) => {
    return (
        <nav className = {s.navbar}>
        <ul className = {s.list}>
          <li className = {s.item}>
            <NavLink to = "/profile" activeClassName = {s.active}>Profile</NavLink>
          </li>
          <li className = {s.item}>
            <NavLink to = "/dialogs" activeClassName = {s.active}>Messages</NavLink>
          </li>
          <li className = {s.item}>
            <NavLink to = "/">News</NavLink>          
          </li>
          <li className = {s.item}>
            <NavLink to = "/">Music</NavLink>
          </li>
          <li className = {s.item}>
            <NavLink to = "/">Settings</NavLink>
          </li>
        </ul>
      </nav>
    )
}