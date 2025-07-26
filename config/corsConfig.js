const cors = require('cors');

// Define a function to configure CORS
const configureCors = () => {
    return cors({
        // origin: defines which domains are allowed to access your resources
        origin: (origin, callback) => {
            const allowedOrigins = ['http://localhost:3000']; // Allowed domains (frontend dev usually on localhost)

            // If no origin or the origin is in allowed list, allow the request
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true); // Allow request
            } else {
                // If not allowed, return an error
                callback(new Error('Not allowed by CORS')); // Deny request
            }
        },

        // Allowed HTTP methods
        methods: ['GET', 'POST', 'PUT', 'DELETE'],

        // Allowed headers client can send in request
        allowedHeaders: ['Content-Type', 'Authorization'],

        // Headers exposed to the browser (client can read these)
        exposedHeaders: ['Content-Length', 'X-Requested-With'],

        // Allow sending credentials like cookies, Authorization headers, etc.
        credentials: true,

        // If true, skip automatic OPTIONS (preflight) response, and let you handle it manually
        preflightContinue: false,

        // Cache the preflight (OPTIONS) response for 600 seconds = 10 minutes
        maxAge: 600,

        // HTTP status code to return for successful OPTIONS request
        optionsSuccessStatus: 204
    });
};

// Export the function using named export style (can be extended with more exports later)
module.exports = { configureCors };
