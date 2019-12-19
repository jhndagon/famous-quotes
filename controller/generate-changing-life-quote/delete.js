const { DeleteFamousQuote } = require('../../services/famous_quote');

let deleteById = async (req, res) => {
    let id = req.params.id
    if(id){
        await DeleteFamousQuote(id)
            .then( famousQuote => {
                return res.status(200).json(famousQuote);
            })
            .catch(err => {
                return res.status(200).json(err);
            })
    }
}

module.exports = deleteById;