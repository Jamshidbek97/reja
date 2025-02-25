console.log("web server starting...");
const express = require("express");

const fs = require("fs");
const db = require("./server").db();
// mongodb connection

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    user = JSON.parse(data);
  }
});

//app
const app = express();
// 1 express kirish code
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//2 sessions code
//3 views code
app.set("views", "./views");
app.set("view engine", "ejs");

//4 routing code
//form in harid has action sending it to /create-item
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  // console.log(new_reja);

  db.collection("plans").insertOne({
    reja: new_reja
  }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("some error occured");
    } else {
      res.end("data inserted successfully");
    };
  });

});

///main page rendering harid.ejs in views
app.get("/", (req, res) => {
  console.log("user entered /");

  db.collection("plans").find().toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("some error occured");
    } else {
      console.log(data);
      res.render("reja", {
        items: data
      });
    }
  });
});

//// author page route
app.get("/author", (req, res) => {
  res.render("author", {
    user: user
  });
});

module.exports = app;