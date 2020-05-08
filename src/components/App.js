import React, { Component } from 'react'
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

export class App extends Component {
    state = {
        language: 'english',
        color: 'primary'
    };

    onLanguageChange = (language) => {
        this.setState({ language });

        language === 'spanish' ? this.setState({ color: 'negative' }) : this.setState({ color: 'primary' });
    };

    render() {
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    };
};

export default App;
