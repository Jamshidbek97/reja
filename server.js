console.log("Web serverni boshlash");
const express = require('express');
const app = express();
const http = require('http');

// 1 starting codes
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 session codes

// 3    views
app.set("views", "views");
app.set("view engine", "ejs");

// 4 rooting codes
app.post("/create-item", (req, res) =>{
    console.log(req.body);
    res.json({test: "success"});
    
});

app.get("/", function(req, res){
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log("The server is running on port 3000");
    
})