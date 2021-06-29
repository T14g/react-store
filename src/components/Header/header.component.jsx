import React from 'react';
import './header.styles.scss';

import MainMenu from '../Main-menu/main-menu.component';

class Header extends React.Component {

    constructor(){
        super();

        this.state = {title: ''};
    }

    componentDidMount() {
        fetch("https://t14g.com/magento/rest/V1/t14g/store/info")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({title: result});
                }
            )
    }

    render() {
        let title = this.state.title;
        
        return (
            <div className="header">
                <div className="container">
                    
                    <span className="store-name">
                    {title}
                    </span>

                    <MainMenu />
                </div>
            </div>
        )
    }
}

export default Header;