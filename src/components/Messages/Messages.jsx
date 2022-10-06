import React from 'react';
import { NavLink } from 'react-router-dom';
import MessagesStyle from './Messages.module.css'

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

const MessageItem = (props) => {
    return (
        <div className={MessagesStyle.messagesItem}>{props.text}</div>
    )
}

const Messages = () => {
    let dialogs = [
        { id: 1, name: 'Valerii' },
        { id: 2, name: 'Serhii' },
        { id: 3, name: 'Alexander' }
    ]

    let messages = [
        {id: 1, text: 'Hello!'},
        {id: 2, text: 'That\'s nice!!!'},
        {id: 3,  text: 'How r u doin?'}
    ]

    let dialogsElements = dialogs.
    map( dialog =>  <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElemetns = messages.
    map(message => <MessageItem text={message.text}></MessageItem>)

return (
    <section className={MessagesStyle.messages}>
        <div className={MessagesStyle.dialogItems}>
            {dialogsElements}
        </div>
        <div className={MessagesStyle.messagesItems}>
            {messagesElemetns}
        </div>
    </section>

)
}
export default Messages;