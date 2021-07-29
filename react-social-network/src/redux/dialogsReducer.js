const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({
        id: state.messagesData.length + 1,
        message: body,
      });
      return state;
    default:
      return state;
  }
};

export const updateNewMessageBodyActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE }); // SYNTAX
