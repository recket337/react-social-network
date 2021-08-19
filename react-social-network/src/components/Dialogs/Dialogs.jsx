import React from "react";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import { maxLengthCreator, required } from "../../utils/validators";


export const Dialogs = (props) => {
  let dialogs = props.dialogsPage;

  let messagesElements = dialogs.messagesData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let dialogElements = dialogs.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let newMessageBody = dialogs.newMessageBody;

  // let onSendMessageClick = () => {
  //   props.sendMessage();
  // };

  // let onNewMessageChange = (e) => {
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  // };

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength = maxLengthCreator(30);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit } className={s.newMessageBlock}>
      <Field
        component={Textarea}
        validate={[required, maxLength]}
        name="newMessageBody"
        className={s.textarea}
        placeholder="Enter new message"
        // defaultValue={newMessageBody}
        // onChange={onNewMessageChange}
      />
      <button className={s.buttonSend}>
        Send Message
      </button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm);
