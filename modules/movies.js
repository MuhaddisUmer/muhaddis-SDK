require('dotenv').config();
const axios = require('axios');

const lordRingAPI = axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
    headers: { Authorization: `Bearer ${process['env']['API_KEY']}` }
});

exports.getAll = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await lordRingAPI.get('movie');
            return resolve(data);
        } catch ({ response }) { return reject(response) }
    });
}

exports.getById = (movieId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await lordRingAPI.get(`movie/${movieId}`);
            return resolve(data);
        } catch ({ response }) { return reject(response) }
    });
}

exports.getQuote = (movieId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await lordRingAPI.get(`movie/${movieId}/quote`);
            return resolve(data);
        } catch ({ response }) { return reject(response) }
    });
}