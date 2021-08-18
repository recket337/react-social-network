import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.css";
import { Field, reduxForm } from "redux-form";

export const Posts = (props) => {
  let postsElements = props.profileData.postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // };

  return (
    <div className={s.posts}>
      <h3>Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" className={s.textArea} />
      </div>

      <button className={s.newPostButton}>New post</button>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: "ProfileNewPostForm",
})(AddNewPostForm);
