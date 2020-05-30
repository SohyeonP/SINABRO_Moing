
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');

app.get('./html/', function(req,res){
    res.render('main');
})

app.listen(port, () => console.log(`Example app listing on port ${port}`))