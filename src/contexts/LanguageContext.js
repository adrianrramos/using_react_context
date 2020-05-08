import React, { Component } from 'react';

const Context = React.createContext('english'); 

export class LanguageStore extends Component {
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
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    };
}

export default Context;