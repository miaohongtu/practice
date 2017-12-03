let express = require("express");
let app = new express();
app.use(express.static(__dirname));
app.get("/",function(req,res,next){
    res.sendFile('index.html');
});
app.get("/upgrade",function(req,res,next){
    res.sendFile(__dirname + '/upgrade.html');
});
app.get("/submit",function(req,res,next){
    res.sendFile(__dirname + '/submit.html');
})
app.get("/toast",function(req,res,next){
    res.sendFile(__dirname + '/toast.html');
})
app.listen(8000,"192.168.43.115",function(){
    console.log("Server is opening!");
});