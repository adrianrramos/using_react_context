import React, { Component } from 'react'
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class App extends Component {
    state = {
        language: 'english',
        color: 'primary'
    };

    onLanguageChange = (language) => {
        this.setState({ language });

        if (language === 'spanish') {
            this.setState({ color: 'negative' })
        } else {
            this.setState({ color: 'primary' })
        }
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language: 
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
                    <i className="flag mx" onClick={() => this.onLanguageChange('spanish')}/>
                </div>
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
