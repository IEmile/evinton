import { checkIfEmailExists,addData } from './static/functions/firebaseControl.js';
// import { checkIfEmailExists } from './static/functions/firebaseControl.js';

import express from 'express';
import ejs from 'ejs';

const app=express();


// Middleware to parse JSON
app.use(express.json()); 
// Middleware to parse URL-encoded form data (if needed)
app.use(express.urlencoded({ extended: true }));


app.set('view engine','ejs');
app.use(express.static('./static'));
app.listen(3000, ()=>{
    console.log('running on 3000');
})

// routing the web

app.get('/signin', (req,res)=>{
    res.render('signup')
})

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/auth',(req,res)=>{
    const formData=req.body;
    // console.log(formData)
    // Example of checking if an email exists
    checkIfEmailExists('users', formData.input).then(exists => {
        if (exists) {
          console.log("Email is already in use.");
          res.status(200).json(true);
        } else {
          console.log("Email is available.");
          res.status(200).json(false);
        }
      }).catch(error => {
        console.error("Error checking email: ", error);
        res.status(400).json({ message: 'Invalid form data' });
      });
})

app.post('/signup', async (req, res) => {
  const formData=req.body;
  console.log(formData)
  let docData;
  if (formData.type === "email") {
    docData = {
      email: formData.callid,
      passKey: formData.password
    };
  } else {
    docData = {
      phone: formData.callid,
      passKey: formData.password
    };
  }

  try {
    // Add document to Firestore
    await addData('users', docData);
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Failed to add user" });
  }
})

app.post('/signin',(req,res)=>{

})

