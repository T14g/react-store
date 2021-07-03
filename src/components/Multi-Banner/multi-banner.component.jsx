import React from 'react';
import './multi-banner.styles.scss';

class MultiBanner extends React.Component {

    constructor() {
        super();

        this.state = {
            options:
            {
                'Dark Colors': ['#000000', '#0c0c0c', '#191919'],
                'Light Colors': ['#ffffff', '#fdfbf2', '#fbf8e6'],
                'Green Tones' : ['#001900','#003300', '#004c00']
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
                <div className="mb-background" style={{ background: this.state.background }}>
                    <h2 className="title">Título</h2>
                </div>
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
