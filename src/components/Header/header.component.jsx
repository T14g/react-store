import React from 'react';
import './header.styles.scss';

import MainMenu from '../Main-menu/main-menu.component';

class Header extends React.Component {

    constructor() {
        super();

        this.state = { title: '', menuItems: [] };
    }

    componentDidMount() {
        fetch("https://t14g.com/magento/rest/V1/t14g/store/info")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ title: result });
                }
            )

        fetch("https://t14g.com/magento/rest/all/V1/categories?rootCategoryId=3&depth=1")
            .then(res => res.json())
            .then(
                (result) => {
                    let items = result.children_data;
                    this.setState({ menuItems: items });
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

                    <MainMenu items={this.state.menuItems} />
                </div>
            </div>
        )
    }
}

export default Header;