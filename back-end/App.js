const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// app.get('/',(rq,rs,n)=>{
//    rs.json('success');
// })

mongoose.connect('mongodb://localhost:27017/shiromeda', { 
    useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => { 
        app.listen(8081, ()=>{
            console.log('server 8081 is start!! ');
        });
    }).catch(err => console.error(err));