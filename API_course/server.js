const express = require('express');//nodejs framework   
const dotenv = require('dotenv');//for .env file
const morgan = require('morgan');// for middleware
const colors = require('colors');// for pretty console.log
const fileupload = require('express-fileupload'); //for fileupload
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')
const path = require('path');

//load env variables
dotenv.config({ path: './config/config.env' });

// Connect to db
connectDB();

// load Routers
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// file upload
app.use(fileupload());

//set static folder 
app.use(express.static(path.join(__dirname, 'public')));


//body -parser
app.use(express.json());

//mount routes 
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

//errorHandler
app.use(errorHandler);

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