require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { configureCors } = require('./config/corsConfig');
const {createRateLimiter} = require('./middlewares/ratelimiting')
 const app = express();
 const {globalErrorHandler} = require('./middlewares/errorHandler');
 
const itemsroutes = require('./routes/items-routes')
 const {urlversioning} = require('./middlewares/apiversioning');
 const PORT = process.env.PORT || 3000
app.use(requestlogger())
app.use(addtimstamp());

app.use(createRateLimiter(120,12*60*1000))//120 requests for per 12 minutes
app.use(urlversioning('v1')); 

app.use('/api/v1',itemroutes)//get the url prefxi api/v1//items
 app.use(configureCors()); // Use the CORS configuration 
 //bana dia hai and use krlia
app.use(globalErrorHandler); // Global error handler to catch errors from all routes

 app.use(express.json());//only for parsing application/json
 app.listen(PORT,() => {
     console.log(`Server is running on port ${PORT}`);
 });



