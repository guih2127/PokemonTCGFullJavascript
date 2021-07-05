const Card = require('../models/card-model')

getCards = async (request, response) => {
    let {type, weakness, name} = request.query
    let query = {}

    if (type != null && type != "")
        query.type = type
    
    if (weakness != null && weakness != "")
        query.weakness = weakness

    if (name != null && name != "") {
        var regex = new RegExp(name, "i")
        query.name = regex
    }
    
    await Card.find(query, (error, cards) => {
        if (error) {
            return response.status(400).json({ success: false, error: error });
        }
        return response.status(200).json({ success: true, data: cards })
    }).catch(error => console.log(error))
}

createCard = async (request, response) => {
    const body = request.body

    if (!body) {
        return response.status(400).json({ success: false, error: "You must provide a card." })
    }

    const card = new Card(body)

    if (!card) {
        return response.status(400).json({ success: false, error: err })
    }

    card
        .save()
        .then(() => {
            return response.status(201).json({
                success: true,
                id: card._id,
                message: "Card created."
            })
        })
        .catch(error => {
            return response.status(400).json({
                error,
                message: "Card not created."
            })
        })
}

module.exports = {
    getCards,
    createCard
}