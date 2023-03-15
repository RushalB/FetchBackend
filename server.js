// Imports
const utils = require('./helper');
const uuid = require("uuid");



// Data stored in memory
main_data = []




var express = require("express");
var bodyParser = require('body-parser')
var server = express();
const helper = require('./helper');

var hostname = process.env.HOSTNAME || 'localhost';
var port = 3000;

server.get("/", function (req, res) {
    res.send("Hello");
});


server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())
server.use(express.static(__dirname + '/'));


console.log("Simple static server listening at http://" + hostname + ":" + port);
server.listen(port);


server.post("/receipts/process", function (req, res) {
    let points = (utils.calcPoints(req.body))
    if (points == -1) {
        let error = new Error()
        error.statusCode = 400
        error.message = "Recipt Data is not Valid"
        throw error
    }

    let id = uuid.v4()
    main_data.push({ "id": id, "points": points })
    console.log(main_data);
    res.type('json')
    res.send({ "id": id })
});

server.get("/receipts/:id/points", function (req, res) {

    let points = helper.getPoints(req.params.id,main_data)
    if (points == -1) {
        let error = new Error()
        error.statusCode = 404
        error.message = "User doesn't Exist"
        throw error
    }
    res.type('json')
    res.send({ "points": points })
})



server.use((err, req, res, next) => {
    return res.status(err.statusCode).send({ "message": err.message })
})
