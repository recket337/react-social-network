import React from 'react';

import { Post } from './Post/Post';
import s from'./Posts.module.css';

export const Posts = (props) => {

  let postsElements = props.postsData.map( p => <Post message = { p.message } likesCount = { p.likesCount } />);

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