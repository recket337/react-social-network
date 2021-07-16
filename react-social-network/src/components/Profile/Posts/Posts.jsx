import React from 'react';
import { Header } from '../../Header/Header';
import { Post } from './Post';
import s from'./Posts.module.css';

export const Posts = (props) => {
    return (
      <div>
        <textarea></textarea>
        <button>New post</button>
        <div>
            New post
        </div>
        <div className = {s.posts}>
            <Post />
            <Post />
            <Post />
        </div>
      </div>
    )
}