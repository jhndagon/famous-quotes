const MONGODB_URL = process.env.MONGODB || 'mongodb+srv://<username>:<password>@cluster0-0wx6b.mongodb.net/test?retryWrites=true&w=majority'

module.exports = MONGODB_URL;