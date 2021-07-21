import React from 'react';
import { Header } from '../../Header/Header';
import { Post } from './Post';
import s from'./Posts.module.css';

export const Posts = (props) => {
  let postsData = [
    { id: 1, message: 'fewe', likesCount: 11},
    { id: 1, message: 'fewe', likesCount: 11},
    { id: 1, message: 'fewe', likesCount: 11},
  ]

  let postsElements = postsData.map( p => <Posts message = { p.message } likes count = { p.likesCount } />);

  return (
    <div className = {s.posts}>
      <h3>Posts</h3>

      <div>
        <textarea></textarea>
      </div>

      <div>
        <button>New post</button>
      </div>
      
      <div>
        New post
      </div>

      <div className = {s.posts}>
        { postsElements }
      </div>
    </div>
  )
}