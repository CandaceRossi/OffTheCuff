const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const baseApiRouter = require('./api-router');


// const corsOptions = {
//     origin: "http://localhost:4500"
// };

// app.use(cors(corsOptions));

//parse request content type - application/json 
// app.use(bodyParser.json());
// app.use(express.json());

//parse requests of content type - apllicaiton/x-www.form-unlearncoded
app.use(bodyParser.urlencoded({extended: true}));

// const db = require("./models");
//const db = require("./be/models"); ???

app.use('/api', baseApiRouter);

app.get("/", (req, res) => {
    res.json({message: "Welcome to the Off The Cuff Application"})
});

module.exports = app;