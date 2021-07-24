import React from 'react';
import s from'./Profile.module.css';
import { Posts } from './Posts/Posts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
        <Posts postsData = { props.profile.postsData } addPost = { props.addPost } />
      </div>
    )
}