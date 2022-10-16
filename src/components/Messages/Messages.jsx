import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessagesStyle from './Messages.module.css'

const MessageItem = (props) => {
    return (
        <div className={MessagesStyle.messagesItem}>{props.text}</div>
    )
}

const Messages = (props) => {


    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = props.state.messages.map(message => <MessageItem text={message.text} />)

    return (
        <section className={MessagesStyle.messages}>
            <div className={MessagesStyle.dialogItems}>
                {dialogsElements}
            </div>
            <div className={MessagesStyle.messagesItems}>
                {messagesElements}
            </div>
        </section>

    )
}
export default Messages;