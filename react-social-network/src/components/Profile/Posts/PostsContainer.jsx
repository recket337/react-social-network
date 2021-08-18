import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
} from "../../../redux/profileReducer";
import { Posts } from "./Posts";

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
    // updateNewPostText: (text) => {
    //   dispatch(updateNewPostTextActionCreator(text));
    // },
  }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
