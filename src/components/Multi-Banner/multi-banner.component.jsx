import React from 'react';
import './multi-banner.styles.scss';

class MultiBanner extends React.Component {

    constructor() {
        super();

        this.state = {
            options: [
                {
                    'Colors 1': ['red', 'blue'],
                    'Colors 2': ['green', 'pink', 'yellow']
                }
            ],
            bg : 'gray'
        }
    }

    setBackground = (group) => {
        console.log(this.state.options[group]);
    }

    render() {

        let options = this.state.options ? Object.keys(this.state.options[0]) : [];
        console.log(options);
        return (
            <React.Fragment>
                <div className="mb-background" style={{background : this.state.bg}}></div>
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
