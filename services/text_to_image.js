const axios = require('axios');
let {IMG_API_URL} = require('../config/config');

let text_to_image = async (text) => {
    return await axios.get(`${IMG_API_URL}?text=${text}&font=arial&fcolor=000000&size=20&bcolor=FFFFFF&type=png`);
}

module.exports = text_to_image;