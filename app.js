const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("welcome");
})

app.listen(9090, (err)=>{
    console.log("Listening to port 9090");
})