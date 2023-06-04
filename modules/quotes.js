const axios = require('axios');

const lordRingAPI = axios.create({ baseURL: 'https://the-one-api.dev/v2/' });

// Function to get all quotes
exports.getAll = (apiKey) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await lordRingAPI.get('quote', { headers: { Authorization: `Bearer ${apiKey}` } });
            return resolve(data);
        } catch ({ response }) { return reject(response) }
    });
}

// Function to get quotes by id
exports.getById = (quoteId, apiKey) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await lordRingAPI.get(`quote/${quoteId}`, { headers: { Authorization: `Bearer ${apiKey}` } });
            return resolve(data);
        } catch ({ response }) { return reject(response) }
    });
}