let random_quote = require('../../services/random_quotes');
let text_to_image = require('../../services/text_to_image');
const SaveFamouseQuote = require('../../services/famous_quote');

let get = async (req, res) => {
    let quote = await random_quote();
    let image = await text_to_image(quote.data.content);
    SaveFamouseQuote(quote.data, image.data).then( famouseQuote => {
        return res.status(200).json(famouseQuote);
    }).catch(err=> {
        return res.status(200).json(err);
    });
    
    
}

module.exports = get;