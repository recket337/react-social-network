import React from "react";
import { connect } from "react-redux";
import {
  updateNewPostTextActionCreator,
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
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
