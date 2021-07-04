const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Attack = new Schema(
    {
        name: { type: String, required: true },
        effect: { type: String, required: true },
        cost: { type: String, required: true },
        damage: { type: Number, required: true }
    }
)

const Ability = new Schema(
    {
        name: { type: String, required: true },
        effect: { type: String, required: true }
    }
)

const Card = new Schema(
    {
        name: { type: String, required: true },
        cardType: { type: String, enum: ['Pokémon', 'Trainer', 'Energy'], required: true },
        type: { 
            type: String, 
            enum: ['Fire', 'Water', 'Dark', 'Grass', 'Psychic', 'Steel', 'Electric', 'Fighting'],
            required: false 
        },
        weakness: {
            type: String, 
            enum: ['Fire', 'Water', 'Dark', 'Grass', 'Psychic', 'Steel', 'Electric', 'Fighting'],
            required: false 
        },
        ability: { 
            type: Ability,
            required: false
        },
        attacks: { type: [Attack], required: false },
        evolveFrom: { type: String, required: false },
        image: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('cards', Card)