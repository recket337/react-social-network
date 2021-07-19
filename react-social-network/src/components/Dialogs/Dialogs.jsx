import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

export const Dialogs = (props) => {
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className = {s.item + ' ' + s.active}>
                    <NavLink to = "/dialogs/1">Andrew</NavLink>
                </div>
                <div className = {s.item}>
                    <NavLink to = "/dialogs/2">Andrew</NavLink>
                </div>
                <div className = {s.item}>
                    <NavLink to = "/dialogs/3">Andrew</NavLink>
                </div>
                <div className = {s.item}>
                    <NavLink to = "/dialogs/4">Andrew</NavLink>
                </div>
            </div>
            <div className = {s.messages}>
                <div className = {s.message}>fewewf</div>
                <div className = {s.message}>fewewf</div>
                <div className = {s.message}>fewewf</div>
                <div className = {s.message}>fewewf</div>
            </div>
        </div>
    )
}