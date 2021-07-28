const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MASSAGE';

export let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'fewe', likesCount: 11 },
        { id: 2, message: 'fewe', likesCount: 11 },
        { id: 3, message: 'fewe', likesCount: 11 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Dick' },
        { id: 3, name: 'John' },
        { id: 4, name: 'Jason' },
      ],
      messagesData: [
        { id: 1, message: 'fewe' },
        { id: 2, message: 'fewe' },
        { id: 3, message: 'fewe' },
        { id: 4, message: 'fewe' },
      ],
      newMessageBody: "",
    },
  },

  _renderEntireTree() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.postsData.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._renderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._renderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._renderEntireTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messagesData.push({
        id: this._state.dialogsPage.messagesData.length + 1,
        message: body,
      })
      this._renderEntireTree(this._state);
    }
  },

  subscribe(observer) {
    this._renderEntireTree = observer;
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST }); // SYNTAX

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const updateNewMessageBodyActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE }); // SYNTAX

