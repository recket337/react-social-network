import React from 'react';
import { updateNewPostText } from '../../../redux/state';

import { Post } from './Post/Post';
import s from'./Posts.module.css';

export const Posts = (props) => {
  let postsElements = props.profileData.postsData.map( p => <Post message = { p.message } likesCount = { p.likesCount } />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    if(text) {
      props.addPost();
      props.updateNewPostText('');
    }
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className = {s.posts}>
      <h3>Posts</h3>

      <div>
        <textarea 
          className = { s.textArea } 
          onChange = { onPostChange } 
          ref = { newPostElement } 
          value = { props.profileData.newPostText }/>
      </div>

      
      <button className = { s.newPostButton } onClick = { addPost }>New post</button>

      <div className = {s.posts}>
        { postsElements }
      </div>
    </div>
  )
}