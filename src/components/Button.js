import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {
    renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => {
                        switch ({ language }) {
                            case 'english':
                                return 'Submit';
                            case 'spanish':
                                return 'Someter';
                            case 'dutch':
                                return 'Voorleggen';
                            default:
                                return 'Submit';
                        }
                    }}
                </LanguageContext.Consumer>
            </button>
        );
    };

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    };
};

export default Button;