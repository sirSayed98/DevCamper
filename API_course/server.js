const express = require('express');//nodejs framework   
const dotenv = require('dotenv');//for .env file
const morgan = require('morgan');// for middleware
const colors = require('colors');// for pretty console.log
const fileupload = require('express-fileupload'); //for fileupload
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db')
const path = require('path');
//security
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

//load env variables
dotenv.config({ path: './config/config.env' });

// Connect to db
connectDB();

// load Routers
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth')
const reviews = require('./routes/reviews')
const users = require('./routes/users');


const app = express();
const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// File uploading
app.use(fileupload());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 100
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());


// file upload
app.use(fileupload());

//set static folder 
app.use(express.static(path.join(__dirname, 'public')));


//body-parser
app.use(express.json());

//cookie_parser
app.use(cookieParser());
//mount routes 
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/reviews', reviews);


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