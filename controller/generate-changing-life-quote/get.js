let random_quote = require('../../services/random-quotes');
let text_to_image = require('../../services/text_to_image');

let get = async (req, res) => {
    let quote = await random_quote();
    let image = await text_to_image(quote.data.content);
    return res.status(200).json({
        quote: quote.data,
        img: image.data
    });
}

module.exports = get;