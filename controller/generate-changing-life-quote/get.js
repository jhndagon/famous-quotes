let random_quote = require('../../services/random_quotes');
let text_to_image = require('../../services/text_to_image');
const {SaveFamousQuote} = require('../../services/famous_quote');

let get = async (req, res) => {
    let quote = await random_quote();
    let images = await text_to_image(quote.data.content);

    SaveFamousQuote(quote.data, images[1].url).then( famouseQuote => {
        return res.status(200).json(famouseQuote);
    }).catch(err=> {
        return res.status(200).json(err);
    });    
}

module.exports = get;
