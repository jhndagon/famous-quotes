let FamousQuote = require('../models/famous-quotes');

let SaveFamouseQuote = (quote, img) => {
    if(quote && quote !== null && img && img !== null){
        let famousQuote = new FamousQuote({
            quote: quote.content,
            image: img
        });
        return famousQuote.save()
                    .then(famousQuote => famousQuote)
                    .catch(err => err);
    }
    return null;
}

module.exports = SaveFamouseQuote;