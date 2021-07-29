const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MASSAGE';

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({
        id: state.messagesData.length + 1,
        message: body,
      });
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
