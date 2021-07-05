import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <input onChange={this.props.handler} />
        )
    }
}

export default SearchBar