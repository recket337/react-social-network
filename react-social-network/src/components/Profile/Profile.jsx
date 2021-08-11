import React from "react";
import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { PostsContainer } from "./Posts/PostsContainer";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <PostsContainer/>
    </div>
  );
};
