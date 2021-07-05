import React, { Component } from 'react'
import Card from '../components/Card'
import TypeSelect from '../components/TypeSelect'
import SearchBar from '../components/SearchBar'
import api from '../api'

class CardList extends Component {
    constructor(props) {
        super(props)

        this.typeHandler = this.typeHandler.bind(this)
        this.weaknessHandler = this.weaknessHandler.bind(this)
        this.nameHandler = this.nameHandler.bind(this)

        this.state = {
            cards: [],
            filter: {
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
                        <span style={{"fontWeight": "bolder" }}>Name: </span><SearchBar handler={this.nameHandler} value={this.state.filter.name} />
                    </div>
                    <div style={{"marginLeft": "10px"}}>
                        <span style={{"fontWeight": "bolder" }}>Type: </span><TypeSelect handler={this.typeHandler} value={this.state.filter.type} />
                    </div>
                    <div style={{"marginLeft": "10px"}}>
                        <span style={{"fontWeight": "bolder" }}>Weakness: </span><TypeSelect handler={this.weaknessHandler} value={this.state.filter.weakness} />
                    </div>
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
                    />)}
                </div>
            </div>
        )
    }
}

export default CardList