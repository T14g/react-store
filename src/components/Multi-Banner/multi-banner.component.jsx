import React from 'react';
import './multi-banner.styles.scss';

class MultiBanner extends React.Component {

    constructor() {
        super();

        this.state = {
            options:
            {
                'Colors 1': ['red', 'blue'],
                'Colors 2': ['green', 'pink', 'yellow']
            }
            ,
            background: 'gray'
        }
    }

    setBackground = (key) => {

        let colors = this.state.options[key];
        let index = Math.floor(Math.random() * (colors.length));
        this.setState({ background: colors[index] });

    }

    render() {

        let options = this.state.options ? Object.keys(this.state.options) : [];
        console.log(options);
        return (
            <React.Fragment>
                <div className="mb-background" style={{ background: this.state.background }}></div>
                <div>
                    {
                        options.map((opt, index) =>
                            <button key={index} onClick={() => this.setBackground(opt)}>{opt}</button>
                        )
                    }
                </div>
            </React.Fragment>


        )
    }

}

export default MultiBanner;
