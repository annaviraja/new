const express = require('express');

const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());

const userData = [];

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.post('/users', (req, res) => {
    console.log(req.body);
    userData.push(req.body);
    res.json({
        message : 'received'
    });
    
})



app.listen(8000, () => {
    console.log('Port is running at 8000');
});