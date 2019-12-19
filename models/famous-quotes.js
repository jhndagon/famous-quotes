const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let famousQuoteShema = new Schema({
    quote: { type: String },
    image: { type: String }
}, { versionKey: false });

module.exports = mongoose.model('FamousQuote', famousQuoteShema);