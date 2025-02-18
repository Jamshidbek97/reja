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
app.get("/", function(req, res){
    res.end(`<h1 style = "background: red">Hello world</h1>`);
});
app.get("/gift", function(req, res){
    res.send(`<h1 style = "background: red">siz sovg'alar page sidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log("The server is running on port 3000");
    
})