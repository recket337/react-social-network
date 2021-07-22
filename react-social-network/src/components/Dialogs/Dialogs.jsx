import React from 'react';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'

export const Dialogs = (props) => {

    let messagesElements = props.messagesData
        .map( message => <Message message = { message.message }/> );

    let dialogElements = props.dialogsData
        .map( dialog => <DialogItem name = { dialog.name } id = { dialog.id } /> );

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                { dialogElements }
            </div>
            <div className = {s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}