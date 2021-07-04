import React, { Component } from 'react'
import Card from '../components/Card'
import api from '../api'

class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getAllCards().then(cards => {
            this.setState({
                cards: cards.data.data,
                isLoading: false
            })
        })
    }

    render() {
        const { cards } = this.state
        console.log('TCL: CardsList -> render -> cards', cards)

        return (
            <div style={{"padding": "20px", "display": "flex"}}>
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
        )
    }
}

export default CardList