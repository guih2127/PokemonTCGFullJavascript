import React, { Component } from 'react'
import Card from '../components/Card'
import Select from '../components/Select'
import SearchBar from '../components/SearchBar'
import api from '../api'

import cardTypes from '../enums/CardTypeEnum'
import pokemonTypes from '../enums/PokemonTypeEnum'

class CardList extends Component {
    constructor(props) {
        super(props)

        this.typeHandler = this.typeHandler.bind(this)
        this.weaknessHandler = this.weaknessHandler.bind(this)
        this.nameHandler = this.nameHandler.bind(this)
        this.cardTypeHandler = this.cardTypeHandler.bind(this)

        this.state = {
            cards: [],
            filter: {
                cardType: "",
                type: "",
                weakness: "",
                name: ""
            },
            isLoading: false
        }
    }

    nameHandler(event) {
        console.log(this.state)
        let filter = this.state.filter
        filter.name = event.target.value

        this.setState({filter: filter})
        this.getCards()
    }

    typeHandler(event) {
        let filter = this.state.filter
        filter.type = event.target.value

        this.setState({filter: filter})
        this.getCards()
    }

    weaknessHandler(event) {
        let filter = this.state.filter
        filter.weakness = event.target.value

        this.setState({filter: filter})
        this.getCards()
    }

    cardTypeHandler(event) {
        let filter = this.state.filter
        filter.cardType = event.target.value
        filter.type = ''
        filter.weakness = ''

        console.log(this.state)

        this.setState({filter: filter})
        this.getCards()
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        this.getCards()
    }

    getCards = async () => {
        this.setState({ isLoading: true })
        await api.getAllCards(this.state.filter).then(cards => {
            this.setState({
                cards: cards.data.data,
                isLoading: false
            })
        })
    }

    render() {
        const { cards } = this.state

        return (
            <div style={{"marginTop": "10px"}}>
                <div style={{"display": "flex"}}>
                    <div style={{"marginLeft": "10px"}}>
                        <span style={{"fontWeight": "bolder" }}>Name: </span>
                        <SearchBar handler={this.nameHandler} value={this.state.filter.name} />
                    </div>
                    <div style={{"marginLeft": "10px"}}>
                        <span style={{"fontWeight": "bolder" }}>Card Type: </span>
                        <Select handler={this.cardTypeHandler} options={cardTypes} value={this.state.filter.cardType} />
                    </div>
                    {this.state.filter.cardType === "Pokémon" &&
                        <div style={{"display": "flex"}}>
                            <div style={{"marginLeft": "10px"}}>
                                <span style={{"fontWeight": "bolder" }}>Type: </span>
                                <Select handler={this.typeHandler} options={pokemonTypes} value={this.state.filter.type} />
                            </div>
                            <div style={{"marginLeft": "10px"}}>
                                <span style={{"fontWeight": "bolder" }}>Weakness: </span>
                                <Select handler={this.weaknessHandler} options={pokemonTypes} value={this.state.filter.weakness} />
                            </div>
                        </div>
                    }
                </div>
                <div style={{"display": "flex", "flexFlow": "wrap"}}>
                    {cards.map(card => 
                    <Card
                        key={card._id}
                        id={card._id} 
                        name={card.name}
                        type={card.type}
                        cardType={card.cardType}
                        attacks={card.attacks}
                        weakness={card.weakness}
                        image={card.image}
                        ability={card.ability}
                        effect={card.effect}
                    />)}
                </div>
            </div>
        )
    }
}

export default CardList