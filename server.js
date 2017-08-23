var express = require("express"),
    bodyParser = require("body-parser"),
    http=require("http"),
    app,
    port=process.env.PORT ||3000
    app = express();

http.createServer(app).listen(port);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/client"));

app.route('/')
    .get(function(req,res)
            {
                res.send(vehicle.html);
            });


console.log("listening to port:"+port);