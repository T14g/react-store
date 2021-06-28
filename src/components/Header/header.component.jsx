import React from 'react';
import './header.styles.scss';

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
        console.log('rendered');
        
        return (
            <div className="header">
                {title}
            </div>
        )
    }
}

export default Header;