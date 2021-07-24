import React from 'react';

import { Post } from './Post/Post';
import s from'./Posts.module.css';

export const Posts = (props) => {
  let postsElements = props.postsData.map( p => <Post message = { p.message } likesCount = { p.likesCount } />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    if(text) {
      props.addPost(text);
      newPostElement.current.value = '';
    }
  }
  return (
    <div className = {s.posts}>
      <h3>Posts</h3>

      <div>
        <textarea className = { s.textArea } ref = { newPostElement }></textarea>
      </div>

      
      <button className = { s.newPostButton } onClick = { addPost }>New post</button>

      <div className = {s.posts}>
        { postsElements }
      </div>
    </div>
  )
}