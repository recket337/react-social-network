import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className = {s.item + ' ' + s.active}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props) => {
    return (
        <div className = {s.dialog}>{props.message}</div> 
    )
}

export const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Andrew'},
        { id: 2, name: 'Dick'},
        { id: 3, name: 'John'},
        { id: 4, name: 'Jason'},
    ]

    let messagesData = [
        { id: 1, message: 'fewe'},
        { id: 2, message: 'fewe'},
        { id: 3, message: 'fewe'},
        { id: 4, message: 'fewe'},
    ]

    let messagesElements = messagesData
        .map( message => <Message message = { message.message }/> );

    let dialogElements = dialogsData
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