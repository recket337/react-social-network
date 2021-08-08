import React from "react";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

export const Dialogs = (props) => {
  let dialogs = props.dialogsPage;

  let messagesElements = dialogs.messagesData.map((message) => (
    <Message message={message.message} key={message.id}/>
  ));

  let dialogElements = dialogs.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let newMessageBody = dialogs.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
            defaultValue={newMessageBody}
            onChange={onNewMessageChange}
          />
          <button className={s.buttonSend} onClick={onSendMessageClick}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
