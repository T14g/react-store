import React from 'react';
import './main-menu.styles.scss';

const MainMenu = ({ items = [] }) => {

    return (
        <ul className="main-menu">
            {
                items.map((item, index) => {
                    return (
                        <li key={index} className="menu-item">{item.name}</li>
                    )
                })
            }
        </ul>
    );
}

export default MainMenu;