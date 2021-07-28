import React from "react";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/state";

export const Dialogs = (props) => {
  let dialogs = props.store.getState().dialogsPage;

  let messagesElements = dialogs.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let dialogElements = dialogs.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let newMessageBody = dialogs.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.newMessageBlock}>
          <textarea
            className={s.textarea}
            placeholder="Enter new message"
            value={newMessageBody}
            onChange={onNewMessageChange}
          />
          <button className={s.buttonSend} onClick={onSendMessageClick}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
