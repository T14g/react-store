import React from 'react';
import './multi-banner.styles.scss';

class MultiBanner extends React.Component {

    constructor() {
        super();

        this.state = {
            options:
                [
                    {
                        title: 'Dark Colors',
                        textColor: 'clear',
                        colors: ['#000000', '#0c0c0c', '#191919']
                    },
                    {
                        title: 'Light Colors',
                        textColor: 'dark',
                        colors: ['#ffffff', '#fdfbf2', '#fbf8e6']
                    },
                    {
                        title: 'Green Tones',
                        textColor: 'clear',
                        colors: ['#001900', '#003300', '#004c00']
                    }
                ]
            ,
            background: 'gray',
            textColor: 'clear',
            title: 'Título'
        }
    }

    generateRandom = (len) => Math.floor(Math.random() * len);

    updateState = (key) => {

        let colors = this.state.options[key]['colors'];
        let textColor = this.state.options[key]['textColor'];
        let index = this.generateRandom(colors.length);
        let title = this.state.options[key]['title'];

        this.setState({ background: colors[index], textColor: textColor, title: title });

    }

    componentDidMount() {
        let rand = this.generateRandom(this.state.options.length);
        this.updateState(rand);
    }

    render() {

        let options = this.state.options ? this.state.options : [];

        return (
            <React.Fragment>
                <div className="mb-background" style={{ background: this.state.background }}>
                    <h2 className={`title ${this.state.textColor}`}>{this.state.title}</h2>
                </div>
                <div className="options-container">
                    {
                        options.map((opt, index) =>
                            <button className={`${this.state.textColor}`} key={index} onClick={() => this.updateState(index)}>{opt.title}</button>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default MultiBanner;
