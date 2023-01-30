const express=require('express');
const exp=express();

exp.get('/mandazi',(req,res)=>{
    /*
    above we have a call back function with 2 parameters 'req: used for request capture '
 the 'req' help us to access the request and do something with it 

'res':this enable us to out-put or to respong to something acconding to the req 

    
    */
    //here we are configuting  the route "GET" with the path /mandazi
    res.send(" reka inkupiga entomi")
})

exp.listen(3300,()=>{
    console.log('mandazi arashushye aragurwa...');
});





















































































































