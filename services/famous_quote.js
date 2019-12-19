let FamousQuote = require('../models/famous-quotes');

let SaveFamousQuote = async (quote, img) => {
    if(quote && quote !== null && img && img !== null){
        let famousQuote = new FamousQuote({
            quote: quote.content,
            image: img
        });
        return await famousQuote.save();
    }
    return null;
}

let GetFamousQuoteById = async (id) => {
    if(id){
        return await FamousQuote.findById(id);
    }
}

let DeleteFamousQuote = async (id) => {
    if(id){
        return await FamousQuote.findByIdAndDelete(id);
    }
}

module.exports = {
    SaveFamousQuote,
    GetFamousQuoteById,
    DeleteFamousQuote
};