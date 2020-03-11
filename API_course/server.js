const express = require('express');

const dotenv = require('dotenv');

//load env variables
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;

// load Routers
const bootcamps = require('./routes/bootcamps');

app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}! in ${process.env.NODE_ENV} mode `);
});