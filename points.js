module.exports = {



  calcPoints: function (receipt) {
    // if (receipt === undefined){
    //   return -1
    // }

    let points = 0

    //     One point for every alphanumeric character in the retailer name.
    //use regex to get only alphanumeric chars--if too complex make a function
    if (receipt.retailer != null) {
      var clean = (receipt.retailer).replace(/[^0-9A-Z]+/gi, "");
      points += clean.length
    }
    else {
      return -1
    }
    // 50 points if the total is a round dollar amount with no cents.
    if (receipt.total != "") {
      var total = Number(receipt.total)
      if (isNaN(total)){
        return -1
      }
      var n = Number(Math.floor(total))
      var num = total - n
      var result = Math.round((num + Number.EPSILON) * 100) / 100

      if (result == 0) {
        points += 50
      }

      // 25 points if the total is a multiple of 0.25.
      if ((result * 100) % 25 == 0) {
        points += 25
      }
    }
    
    else {
      return -1
    }



    // 5 points for every two items on the receipt.
    if (receipt.items != null) {
      let num_items = (receipt.items.length)
      points += 5 * (num_items / 2 >> 0);
    }
    else {
      return -1
    }

    // If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned.
    if (receipt.items != null) {
      let items = (receipt.items)
      for (let i = 0; i < items.length; i++) {
        let description = (items[i].shortDescription).trim();
        if (description.length % 3 == 0) {
          points += (Math.ceil((items[i].price * 2) / 10))
        }

      }
    }
    else {
      return -1
    }



    // 6 points if the day in the purchase date is odd.

    if (receipt.purchaseDate != "") {
      let purchase_date = receipt.purchaseDate
      let day = parseInt(purchase_date.substring(8))
      if(isNaN(day)){
        return -1
      }
      if (day % 2 != 0) {
        points += 6
      }
    }
    else {
      return -1
    }

    // 10 points if the time of purchase is after 2:00pm and before 4:00pm.
    if (receipt.purchaseTime != "") {
      let purchase_time = receipt.purchaseTime
      let time =parseInt(purchase_time.substring(0, 2))
      if (isNaN(time)){
        return -1
      }
      if (time >= 14 && time < 16) {
        points += 10
      }
    }
    else {
      return -1
    }
    return points
  }

}