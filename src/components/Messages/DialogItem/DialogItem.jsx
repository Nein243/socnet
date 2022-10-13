import React from 'react';
import { NavLink } from 'react-router-dom';
import MessagesStyle from '../Messages.module.css'

const messagesLink = function () {
    return (
        msgData => msgData.isActive ? MessagesStyle.active : MessagesStyle.link
    )
}



const DialogItem = (props) => {

    const path = "/messages/" + props.id;

    return (
        <div className={MessagesStyle.dialogItem}>
            <NavLink className={messagesLink()} to={path}>{props.name}</NavLink>
        </div>
    )
}





export default DialogItem;