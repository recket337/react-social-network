import React from "react";
import s from "./Users.module.css";
import userImage from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
// import * as axios from "axios";
import { usersAPI } from "../../api/api";

export const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={`${s.pagination} ${
                props.currentPage === p && s.selectedPage
              }`}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userImage}
                  className={s.avatar}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingInProgress(true,u.id);
                    usersAPI.deleteUserUnfollow(u.id).then((response) => {
                      if (response.data.resultCode == 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingInProgress(false, u.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingInProgress(true, u.id);
                    usersAPI.postUserFollow(u.id).then((response) => {
                      if (response.data.resultCode == 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingInProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
