const express = require('express');
const router = express.router()
const {asyncHandler,APIError} =require('../middleware/errorhandeling')
const item =[{
    id:1,
    name:'product1,'
},
{
    id:2,
    name:'product2,'
},{
    id:3,
    name:'product3,'
},{
    id:4,
    name:'product4,'
},
]

router.get('/items',asyncHandler(async(req,res)=>{
    res.json(items);
}))

router.post('/items',asynchandler(req,res)=>{
    if(req.body.name){
        throw new APIerror('item, name is reuqieer',400)
    }
    const newItem = {
        id:items.length+1,
    name:req.body.name}
    items.push(newitem)
    res.status(201).json(newItem)
})

module.exports = router ;