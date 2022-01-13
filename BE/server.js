const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8001"
};

app.use(cors(corsOptions));

//parse request content type - application/json 
app.use(bodyParser.json());

//parse requests of content type - apllicaiton/x-www.form-unlearncoded
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./models");
//const db = require("./be/models"); ???


app.get("/", (req, res) => {
    res.json({message: "Welcome to the Off The Cuff Application"})
});

