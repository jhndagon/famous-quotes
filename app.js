const express = require('express');
const app = express();

const mongoose = require('mongoose');

const routes = require('./routes/index');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', routes);


// mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
//     if (err) throw err;
//     console.log('Base de datos online.');
// });

app.listen(process.env.PORT | 5000, () => {
    console.log('Escuchando puerto: ', process.env.PORT | 5000);
});