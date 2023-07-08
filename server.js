// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// declare static path
let staticPath = path.join(__dirname, "src")

// intializing express.js

const app = express();

// middlelewares
app.use(express.static(staticPath))

// routes
//******* */ home route ***********
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath , "clothing.html", "index.html"))
})
//******* */ sign up route *-*****
app.get("/signup", (req, res) => {
  res.sendFile(path.join(staticPath , "clothing.html", "signup.html"))
})
//******** */ 404 route ***********
// app.use( (req, res) => {
//   res.sendFile(path.join(staticPath ,"clothing.html", "404.html"))
// })
// ************ orrrrrrrrrrrrrrrrrrrrrrrrr
app.get("/404", (req, res) => {
  res.sendFile(path.join(staticPath , "clothing.html", "404.html"))
})
app.use((req, res) => {
  res.redirect("/404")
})
// ***************************************************
app.listen(3000, () => {
  console.log('listening on port 3000.......')
})


