const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'fewe', likesCount: 11 },
    { id: 2, message: 'fewe', likesCount: 11 },
    { id: 3, message: 'fewe', likesCount: 11 },
  ],
  newPostText: '',
};

export const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    default:
      return state;
  }
};

//need break every case, but return is here

export const addPostActionCreator = () => ({ type: ADD_POST }); // SYNTAX

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
