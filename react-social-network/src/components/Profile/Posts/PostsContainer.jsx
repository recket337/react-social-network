import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import { storeContext } from "../../../storeContext";
import { Posts } from "./Posts";

export const PostsContainer = () => {
  return (
    <storeContext.Consumer>
      { (store) => {
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          };

          return <Posts
            updateNewPostText={onPostChange}
            addPost={addPost}
            profileData={store.getState().profilePage}
          />
        }
      }
    </storeContext.Consumer>
  );
};
