//custom error class
class APIError extends Error {
    constructor(message, statusCode) {
        super(message); // Step 3
        this.statusCode = statusCode || 500; // Step 4
        this.name = 'APIError'; // Step 5
    }
}

// 🔁 When a class extends another, it inherits all methods & properties of the parent
// 🔁 `super()` calls the parent constructor and lets us pass values (like name, email)
// 🔁 `this` refers to the current object being created (AdminUser, etc.)
// 🔁 Without `super()`, child class can't access `this` (Error: Must call super constructor)
// 🔁 Calling `super(name, email)` sets those props using parent class logic
// 🔁 It’s not just “ability” – real values are set when you create the instance (new AdminUser(...))
// 🔁 Think of super() as reusing the parent’s constructor to avoid duplicate code
// 🔁 Inheritance lets child class focus only on what’s new (like admin permissions)

const asynchandler =(fn)=>(req,res,next) =>{
    Promise.resolve(fn(req,res,next)).catchh(next); // Step 6
//we passed next so tht it will transfer to next middleware
}//You give your async function a helmet (asynchandler) so if it crashes, it doesn’t bleed everywhere — instead it just calmly says “hey boss, something broke” (next(error)), and Express handles it.


//GLOBL ERROR HANDLER

const globalErrorHandler = (err, req ,res,next) =>{
    console.err(err.stack);
    if (err instanceof APIError){
        return res.status(statusCode).json([
            status:'error',
            message: err.message,
        ])
    }
}

module,exports ={ APIError, asynchandler, globalErrorHandler };
