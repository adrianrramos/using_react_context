import React, { Component } from 'react'

export class LanguageSelector extends Component {
    render() {
        return (
            <div>
                Select a language: 
                <i className="flag us" onClick={() => this.props.onLanguageChange('english')}/>
                <i className="flag nl" onClick={() => this.props.onLanguageChange('dutch')}/>
                <i className="flag mx" onClick={() => this.props.onLanguageChange('spanish')}/>
            </div>
        )
    }
}

export default LanguageSelector;