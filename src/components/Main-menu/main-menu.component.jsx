import React from 'react';
import './main-menu.styles.scss';

const MainMenu = () => {

    return (
        <ul className="main-menu">
            <li className="menu-item">Home</li>
            <li className="menu-item">Baralhos</li>
            <li className="menu-item">Cordas</li>
            <li className="menu-item">Outros</li>
            <li className="menu-item">Contato</li>
        </ul>
    );
}

export default MainMenu;