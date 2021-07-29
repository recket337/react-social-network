import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';

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
      newMessageBody: '',
    },
    sidebar: {},
  },

  _renderEntireTree() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this.getState().profilePage = profileReducer(
      this.getState().profilePage,
      action
    );
    this.getState().dialogsPage = dialogsReducer(
      this.getState().dialogsPage,
      action
    );
    this.getState().sidebar = sidebarReducer(this.getState().sidebar, action);

    this._renderEntireTree(this._state);
  },

  subscribe(observer) {
    this._renderEntireTree = observer;
  },
};
