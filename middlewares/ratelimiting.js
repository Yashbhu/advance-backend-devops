const rateLimit = require('express-rate-limit');
const { headers } = require('next/headers');

const createRateLimiter = (maxrequest,time) =>{
    return rateLimit({
        max : maxrequests,
        windowMs :time,//timeperiod jcheck docs fot this again

        message : 'too many '
        standardHeaders:true, //enable rate limit headers
        legacyHeaders:false,
    
    })
}

module.exports = {createRateLimiter}