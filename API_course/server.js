const express = require('express');//nodejs framework   
const dotenv = require('dotenv');//for .env file
const morgan = require('morgan');// for middleware

//load env variables
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;


// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// load Routers
const bootcamps = require('./routes/bootcamps');


app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}! in ${process.env.NODE_ENV} mode `);
});