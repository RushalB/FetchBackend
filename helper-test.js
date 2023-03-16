
const helper = require('./points');
const uuid = require("uuid");
const { calcPoints } = require('./points');

trial_receipt1 = {
    "retailer": "Walgreens",
    "purchaseDate": "2022-01-02",
    "purchaseTime": "08:13",
    "total": "2.65",
    "items": [
        { "shortDescription": "Pepsi - 12-oz", "price": "1.25" },
        { "shortDescription": "Dasani", "price": "1.40" }
    ]
},
    trial_receipt2 = {
        "retailer": "Target",
        "purchaseDate": "2022-01-02",
        "purchaseTime": "13:13",
        "total": "1.25",
        "items": [
            { "shortDescription": "Pepsi - 12-oz", "price": "1.25" }
        ]
    },
    trial_receipt3 = {
        "retailer": "Target",
        "purchaseDate": "2022-01-01",
        "purchaseTime": "13:01",
        "items": [
            {
                "shortDescription": "Mountain Dew 12PK",
                "price": "6.49"
            }, {
                "shortDescription": "Emils Cheese Pizza",
                "price": "12.25"
            }, {
                "shortDescription": "Knorr Creamy Chicken",
                "price": "1.26"
            }, {
                "shortDescription": "Doritos Nacho Cheese",
                "price": "3.35"
            }, {
                "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
                "price": "12.00"
            }
        ],
        "total": "35.35"
    },
    trial_receipt4 = {
        "retailer": "M&M Corner Market",
        "purchaseDate": "2022-03-20",
        "purchaseTime": "14:33",
        "items": [
            {
                "shortDescription": "Gatorade",
                "price": "2.25"
            }, {
                "shortDescription": "Gatorade",
                "price": "2.25"
            }, {
                "shortDescription": "Gatorade",
                "price": "2.25"
            }, {
                "shortDescription": "Gatorade",
                "price": "2.25"
            }
        ],
        "total": "9.00"
    }


rec ={
    "retailer": "````",
    "purchaseDate": "2022-02-02",
    "purchaseTime": "16:00",
    "total": "12.23",
    "items": [{
        "shortDescription": "Gatorade",
        "price": "2.25"
    }] 
}
let pts = calcPoints(rec)
console.log(pts);








// main_data = [  { id: '38bed5a5-58b2-4fcc-86b9-b6fc7e79180e', points: 0 },
// { id: '496e544a-7cf9-4f99-b6b4-f32c326300d5', points: 1 },
// { id: '259d9cc7-b85e-4fba-87a6-ff1f6cf46778', points: 2 },
// { id: '6c15cdd7-c5b8-4d8f-9400-0dced8b421be', points: 3 } ]
// for (let i = 0; i < 4; i++) {
//     main_data.push({ "id": uuid.v4(), "points": i+3 })
// }
// console.log(main_data);

// let valid = helper.getPoints('496e544a-7cf9-4f99-b6b4-f32c326300d5',main_data)
// let invalid=helper.getPoints('496e544a-7cf9-4f99-qwe4-f32c326300d5',main_data)
// id = ''
// let valid1=helper.getPoints(id,main_data)
// console.log(valid,invalid,valid1);