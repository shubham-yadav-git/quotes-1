const gis = require('g-i-s');
gis("Dr. Rajendra Prashad",(error, result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(JSON.stringify(result[0],null," "));
    }
})



