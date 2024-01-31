const express = require('express');
const cors = require('cors');
const connect = require('./db/connect');
const notFound = require('./middleware/not-Found');
const errorHandler = require('./middleware/error-Handler');
const app = express();
require('express-async-errors');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/home', require('./routes/home'));
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
app.use('/admin/create', require('./routes/admin'));
app.use('/userRides', require('./routes/userRides'));
app.use('/allRides', require('./routes/allRides'));

app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connect(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log('Server is listening on port ' + port);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
