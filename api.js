var request=require("request");

request('http://www.google.com',function(error,response,body){
    if(!error)
    {
        console.log(error + "SOMETHING WRENT WRONG");
    }
    else if(response.statusCode == 200)
    {
        console.log(body)
    }
    
})