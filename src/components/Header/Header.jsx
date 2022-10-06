import React from 'react';
import HeaderStyle from './Header.module.css'

const Header = () => {
    return (
        <header className={HeaderStyle.header}>
            <img className={HeaderStyle.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt='facebook' />
        </header>
    )
}

export default Header;