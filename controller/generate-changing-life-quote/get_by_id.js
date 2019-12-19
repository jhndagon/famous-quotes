const { GetFamousQuoteById } = require('../../services/famous_quote');

let getById = async (req, res) => {
    let id = req.params.id
    if(id){
        await GetFamousQuoteById(id)
            .then( famousQuote => {
                return res.status(200).json(famousQuote);
            })
            .catch(err => {
                return res.status(200).json(err);
            })
    }
}

module.exports = getById;