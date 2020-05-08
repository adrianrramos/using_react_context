import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Feild extends Component {
    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {({ language }) => {
                            switch (language) {
                                case 'english':
                                    return 'Name';
                                case 'spanish':
                                    return 'Nombre';
                                case 'dutch':
                                    return 'Naam';
                                default:
                                    return 'Name';
                            }
                        }}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    };
};

export default Feild;