const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let famousQuoteShema = new Schema({
    quote: { type: String },
    image: { type: String }
});

famousQuoteShema.method('transform', () => {
    var obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;
    return obj;
});

module.exports = mongoose.model('FamousQuote', famousQuoteShema);