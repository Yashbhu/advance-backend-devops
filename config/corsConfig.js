const cors = require('cors')
const configureCors = ()=>{//app.use(cors()); // allows all

    return cors(
        //origin : which domains are allowed to access the resources
        //which orition are allowed to acess tyour api
        origin: (origin,callback)=>{
            const allowedOrigins = ['http://localhost:3000'];}
        if(!origin || allowedOrigins.indexOf(origin) !== -1){
            callback(null,true);//giving the permission
        }else{
            callback(new Error('Not allowed by CORS'));//not giving the permission
        },
        methods ;['GET', 'POST', 'PUT', 'DELETE'], //allowed methods,
        allowedHeaders: ['Content-Type', 'Authorization'], //allowed headers
        exposedHeaders: ['Content-Length', 'X-Requested-With'], //exposed headers
        credenetilas: true, //allow credentials //allowing cookies to be sent ver very important
        preflightContinue: false, //if true, the preflight request will not be sent and u controil the options meaning pre request to check if its safe or not
        maxAge: 600 //catch ur preflight requet till 10 minutes to avoid sneidng options rewuest multiple times
        optionsSucessstatus:204//defau;lt
        )//new here is used a serorr is constructor fucntion sonew created a nrew object with error.message => whats insidetthe ()
    }
    