const axios = require('axios');
let {RANDOM_API_URL} = require('../config/config');

let random_quote = async () => {
    return await axios.get(RANDOM_API_URL);
}

module.exports = random_quote;