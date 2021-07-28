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
    },
  },

  _renderEntireTree() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: this._state.profilePage.postsData.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._renderEntireTree(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._renderEntireTree(this._state);
    }
  },

  subscribe(observer) {
    this._renderEntireTree = observer;
  },
}
