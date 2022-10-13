import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessagesStyle from './Messages.module.css'

const MessageItem = (props) => {
    return (
        <div className={MessagesStyle.messagesItem}>{props.text}</div>
    )
}


export default MessageItem;