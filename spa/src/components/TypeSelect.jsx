import React, { Component } from 'react'

const options = [
    { value: '', label: 'Any'},
    { value: 'Steel', label: 'Steel' },
    { value: 'Fire', label: 'Fire' }
]

class TypeSelect extends Component {
    render() {
        return (
            <select onChange={this.props.handler}>
                {options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        )
    }
}

export default TypeSelect