import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogsReducer";
import { storeContext } from "../../storeContext";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = () => {

  return (
    <storeContext.Consumer>
      { (store) => {
          let sendMessage = () => {
            store.dispatch(sendMessageActionCreator());
          };

          let newMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyActionCreator(body));
          };

          return <Dialogs
            newMessageChange={newMessageChange}
            sendMessage={sendMessage}
            dialogsPage={store.getState().dialogsPage}
          />
        }
      }
    </storeContext.Consumer>
  );
};
