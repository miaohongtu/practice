let express = require("express");
var bodyParser = require("body-parser");
let app = new express();
app.use(bodyParser.urlencoded());
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
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post("/ha",urlencodedParser,function(req,res,next){
    console.log(req.body);
    res.send("henhao");
});
app.listen(8000,"192.168.43.115",function(){
    console.log("Server is opening!");
});