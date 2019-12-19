const GoogleImages = require('google-images');
const { GOOGLE_API_KEY, GOOGLE_CSE_ID } = require('../config/config');

let text_to_image = async (text) => {
    let client = new GoogleImages(GOOGLE_CSE_ID, GOOGLE_API_KEY);
    return await client.search(text)
    .then(images => {
        return images;
    });
}

module.exports = text_to_image;