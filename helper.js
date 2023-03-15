//find a better name for the file
module.exports = {

trial_receipt1 : {
    "retailer": "Walgreens",
    "purchaseDate": "2022-01-02",
    "purchaseTime": "08:13",
    "total": "2.65",
    "items": [
        { "shortDescription": "Pepsi - 12-oz", "price": "1.25" },
        { "shortDescription": "Dasani", "price": "1.40" }
    ]
},
trial_receipt2 : {
    "retailer": "Target",
    "purchaseDate": "2022-01-02",
    "purchaseTime": "13:13",
    "total": "1.25",
    "items": [
        { "shortDescription": "Pepsi - 12-oz", "price": "1.25" }
    ]
},
trial_receipt3 :{
    "retailer": "Target",
    "purchaseDate": "2022-01-01",
    "purchaseTime": "13:01",
    "items": [
      {
        "shortDescription": "Mountain Dew 12PK",
        "price": "6.49"
      },{
        "shortDescription": "Emils Cheese Pizza",
        "price": "12.25"
      },{
        "shortDescription": "Knorr Creamy Chicken",
        "price": "1.26"
      },{
        "shortDescription": "Doritos Nacho Cheese",
        "price": "3.35"
      },{
        "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
        "price": "12.00"
      }
    ],
    "total": "35.35"
  },
  trial_receipt4 :{
    "retailer": "M&M Corner Market",
    "purchaseDate": "2022-03-20",
    "purchaseTime": "14:33",
    "items": [
      {
        "shortDescription": "Gatorade",
        "price": "2.25"
      },{
        "shortDescription": "Gatorade",
        "price": "2.25"
      },{
        "shortDescription": "Gatorade",
        "price": "2.25"
      },{
        "shortDescription": "Gatorade",
        "price": "2.25"
      }
    ],
    "total": "9.00"
  },

  calcPoints :function (receipt) {
    
    let points = 0

    //     One point for every alphanumeric character in the retailer name.
    //use regex to get only alphanumeric chars--if too complex make a function
    //https://stackoverflow.com/questions/7349312/how-to-count-the-number-of-letters-in-a-random-string
    if (receipt.retailer!=null){
        var clean = (receipt.retailer).replace(/[^0-9A-Z]+/gi,"");
        console.log(clean,"alphanumeric",clean.length);
        points += clean.length
    }
    else{
        return -1
    }
    // 50 points if the total is a round dollar amount with no cents.
    var total = Number(receipt.total)
    var n = Number(Math.floor(total))
    var num = total - n
    var result = Math.round((num + Number.EPSILON) * 100) / 100

    if (result == 0) {
        console.log("no cents",50);
        points += 50
    }

    // 25 points if the total is a multiple of 0.25.
    if ((result * 100) % 25 == 0) {
        console.log("multiple of 0.25",25);
        points += 25
    }



    // 5 points for every two items on the receipt.
    if (receipt.items!=null){
        let num_items = (receipt.items.length)
        console.log("5 for 2",5* (num_items/2 >> 0));
        points += 5* (num_items/2 >> 0);
    }
    else{
        return -1
    }
    
    // If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned.
    if (receipt.items!=null){
    let items = (receipt.items)
        for (let i = 0; i < items.length; i++) {
            let description = (items[i].shortDescription).trim();
            if (description.length % 3==0){
                
                console.log("trimmed",(Math.ceil((items[i].price * 2)/10)));
                points += (Math.ceil((items[i].price * 2)/10))
            }
            
        }
    }
    else{
        return -1
    }



    // 6 points if the day in the purchase date is odd.

    if (receipt.items!=null)
    {
        let purchase_date = receipt.purchaseDate
        // console.log(parseInt(purchase_date.substring(8)));
        if (parseInt(purchase_date.substring(8)) % 2 != 0){
            console.log("Date",10);
            points +=6
        }
    }
    else{
        return -1
    }

    // 10 points if the time of purchase is after 2:00pm and before 4:00pm.
    if (receipt.items!=null)
    {
        let purchase_time = receipt.purchaseTime
        console.log((purchase_time.substring(0,2)));
        if (parseInt(purchase_time.substring(0,2)) >= 14 
            && parseInt(purchase_time.substring(0,2)) < 16 ){
            console.log("Time",10);
            points +=10
        }
    }
    else{
        return -1
    }
    return points
},
getPoints:function (id,main_data) {

    var result = main_data.filter(obj => {
        return obj.id === id
    })
    if(result[0] === undefined){
        return -1;
    }
    return (result[0]).points

}

}