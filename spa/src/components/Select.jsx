import React, { Component } from 'react'

class Select extends Component {
    render() {
        return (
            <select onChange={this.props.handler}>
                {this.props.options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        )
    }
}

export default Select