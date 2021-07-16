import React from 'react';
import s from './Nav.module.css';

export const Nav = (props) => {
    return (
        <nav className = {s.navbar}>
        <ul>
          <li className = {s.item}>
            <a>Profile</a>
          </li>
          <li className = {s.item}>
            <a>Messages</a>
          </li>
          <li className = {s.item}>
            <a>News</a>
          </li>
          <li className = {s.item}>
            <a>Music</a>
          </li>
          <li className = {s.item}>
            <a>Settings</a>
          </li>
        </ul>
      </nav>
    )
}