const express=require('express');
const ejs=require('ejs')
const app=express();


app.set('view engine','ejs');
app.use(express.static('./static'));
app.listen(3000, ()=>{
    console.log('running on 3000');
})

// routing the web

app.get('/signin', (req,res)=>{
    res.render('signup')
})
app.post('/signin',(req,res)=>{

})
app.get('/',(req,res)=>{
    res.render('index');
})
// app.get()