import React, { Component } from 'react'
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

import LanguageContext from '../contexts/LanguageContext';

export class App extends Component {
    static contextType = LanguageContext;

    render() {
        console.log(this.context)
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value={this.context.color}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    };
};

export default App;
