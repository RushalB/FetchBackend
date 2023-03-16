// Imports
const points_fn = require('./points');
const uuid = require("uuid");
const express = require("express");
const bodyParser = require('body-parser')
const server = express();


// Data stored in memory
main_data = {}


var hostname = process.env.HOSTNAME || 'localhost';
var port = 3000;

server.get("/", function (req, res) {
    res.send("Fetch-Rewards");
});


server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())
server.use(express.static(__dirname + '/'));


console.log("Simple static server listening at http://" + hostname + ":" + port);
server.listen(port);


server.post("/receipts/process", function (req, res) {
    let points = (points_fn.calcPoints(req.body))
    if (points == -1) {
        let error = new Error()
        error.statusCode = 400
        error.message = "Invalid receipt"
        throw error
    }

    let id = uuid.v4()
    main_data[id] = points



    res.type('json')
    res.send({ "id": id })
});

server.get("/receipts/:id/points", function (req, res) {
    let r_id = req.params.id
    let points = main_data[r_id]
    if (!(r_id in main_data)) {

        let error = new Error()
        error.statusCode = 404
        error.message = "Id not found"
        throw error
    }
    res.type('json')
    res.send({ "points": points })
})



server.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).send({ "message": err.message })
})
