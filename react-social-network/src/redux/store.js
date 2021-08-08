import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._renderEntireTree(this._state);
  },

  subscribe(observer) {
    this._renderEntireTree = observer;
  },
};

store.dispatch = store.dispatch.bind(store);
