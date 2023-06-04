require('dotenv').config();
const axios = require('axios');

const lordRingAPI = axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
    headers: { Authorization: `Bearer ${process['env']['API_KEY']}` }
});

// Function to get all movies
exports.getAll = (apiKey) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await lordRingAPI.get('movie', {headers: { Authorization: `Bearer ${apiKey}` }});
            return resolve(data);
        } catch ({ response }) { return reject(response) }
    });
}

// Function to get a movie by id
exports.getById = (movieId, apiKey) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await lordRingAPI.get(`movie/${movieId}`, {headers: { Authorization: `Bearer ${apiKey}` }});
            return resolve(data);
        } catch ({ response }) { return reject(response) }
    });
}

// Function to get quote of a movie by id
exports.getQuote = (movieId, apiKey) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await lordRingAPI.get(`movie/${movieId}/quote`, {headers: { Authorization: `Bearer ${apiKey}` }});
            return resolve(data);
        } catch ({ response }) { return reject(response) }
    });
}