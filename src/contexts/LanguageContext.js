import React, { Component } from 'react';

const Context = React.createContext(); 

class LanguageStore extends Component {
    state = { 
        language: 'english',
        color: 'primary' 
    }

    onLanguageChage = (language) => {
        this.setState({ language })

        language === 'spanish' ? this.setState({ color: 'negative' }) : this.setState({ color: 'primary' });
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChage }}>
            </Context.Provider>
        );
    }
}

export default Context;