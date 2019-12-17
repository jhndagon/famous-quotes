let get = (req, res) => {
    return res.status(200).json({
        saludo: 'hola mundo'
    });
}

module.exports = get