import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllCards = (filter) => api.get(`/cards`, {
    params: {
        name: filter.name,
        type: filter.type,
        weakness: filter.weakness
    }
})

const apis = {
    getAllCards
}

export default apis