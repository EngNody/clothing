// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// firebase admin setup
let serviceAccount = require("./clothing-ee4f8-firebase-adminsdk-ojdu7-76bd92f7aa.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

let db = admin.firestore();

// declare static path
let staticPath = path.join(__dirname, "src")

// intializing express.js

const app = express();

// middlelewares
app.use(express.static(staticPath))
app.use(express.json())

// routes
//******* */ home route ***********
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath , "clothing.html/index.html"))
})
//******* */ sign up route *-*****
app.get("/signup", (req, res) => {
  res.sendFile(path.join(staticPath , "clothing.html/signup.html"))
})

app.post('/signup', (req, res) => {
  // console.log("ffffffffffffffffff")
  // console.log(req.body);
  // res.json('data recieved')
  // let{ myname, email, password, number, tac ,notification} = req.body;
  let{ myname, email, password, number, tac} = req.body;

// form validations
if (myname.length < 3) {
  return res.json({'alert':'name must be 3 letters long'});
}else if(!email.length){
  return res.json({'alert':'enter your email !!!'});
}else if(password.length < 8){
  return res.json({'alert':'password should be 8 letters long'});
}else if(!number.length){
  return res.json({'alert':'enter your phone number'});
}else if(!Number(number) || number.length < 10){
  return res.json({'alert':'invalid number,please enter valid one'});
}else if(!tac){
  return res.json({'alert':'you must agree to our terms and conditions'});
}

// store user in db
db.collection('users').doc(email).get()
.then(user => {
  if(user.exists){
    return res.json({'alert' : 'alert already exists'});
  }else{
// encrypt the password before storing it
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    req.body.password = hash;
    db.collection('users').doc(email).set(req.body)
    .then(data => {
      res.json({
        name : req.body.myname,
        email : req.body.email,
        seller : req.body.seller
      })
    })
  })
})
  }
})

  res.json('data recieved')
})
//******** */ 404 route ***********
// app.use( (req, res) => {
//   res.sendFile(path.join(staticPath ,"clothing.html/404.html"))
// })
// ************ orrrrrrrrrrrrrrrrrrrrrrrrr
app.get("/404", (req, res) => {
  res.sendFile(path.join(staticPath , "clothing.html","404.html"))
})
app.use((req, res) => {
  res.redirect("/404")
})
// ***************************************************
app.listen(3000, () => {
  console.log('listening on port 3000.......')
})

















console.log('serveeeeeeer')