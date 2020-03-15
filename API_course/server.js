const express = require('express');//nodejs framework   
const dotenv = require('dotenv');//for .env file
const morgan = require('morgan');// for middleware
const colors = require('colors');// for middleware
const connectDB = require('./config/db')


//load env variables
dotenv.config({ path: './config/config.env' });

// Connect to db
connectDB();

// load Routers
const bootcamps = require('./routes/bootcamps');

const app = express();
const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//body -parser

app.use(express.json());
//mount routes 
app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}! in ${process.env.NODE_ENV} mode `.bgRed.white);
});

//handle unhandled promise rejections
process.on('unhandledRejections', (err, promise) => {
    console.log('--------------------------------------------------');
    console.log(`Eroor: ${err.message}`.red.bold);
    console.log('--------------------------------------------------');
    //close server && exit process
    server.close(() => process.exit(1));
})