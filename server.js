const express  = require('express');

const app = express()
app.use(express.json());
app.use(express.static('public'))
const port = 3000;

app.post('/api/user', function(req, res){
    console.log("/api/user called")
    res.redirect("../submitted.html")
 } )
 
 
 
 app.listen(port, function(){
     console.log(`Example app listening on port ${port}!`)
 })
 