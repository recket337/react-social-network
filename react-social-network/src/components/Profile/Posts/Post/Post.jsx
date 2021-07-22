import React from 'react';
import s from'./Post.module.css';

export const Post = (props) => {
    return (
      <div className = {s.item}>
        <div>
          { props.message }
        </div>
        <div>
          likes: { props.likesCount }
        </div>
      </div>
    )
}