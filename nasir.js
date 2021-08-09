/**
This function is for converting Seer to Mon.
*First Problem solve*
**/

function seerToMon(seer) {
    //check input blank or not
    if (seer >= 0) {
        const mon = seer / 40;
        return mon;
    }
    else {
        return "Invalid Input!Enter a correct number";
    }
}
const myUnit = seerToMon(2000);
console.log(myUnit);
//---------------Next please-------------//
/** Total sales finding function
** second Problem solving**
*/
/**We will use product Quantity as a perameter.Because the Qty is changeble but not the price*/
function totalSales(shirtQty, pentQty, shoeQty) {
    const perShirtPrice = 100;
    const perPentPrice = 200;
    const perShoeprice = 500;
    //Product calculation by counting Quantity.;
    const totalShirtPrice = shirtQty * perShirtPrice;
    const totalPentPrice = pentQty * perPentPrice;
    const totalShoePrice = shoeQty * perShoeprice;
    //total price calculation.
    const totalProductPrice = totalShirtPrice + totalPentPrice + totalShoePrice;
    return totalProductPrice;
}
//function declaration: and the total price will be change if we change the quantity.
const myboughtQty = totalSales(5, 3, 6);
console.log(myboughtQty);
/*------------------Next please-------------------------
-------------- Problem solving No 3 ------------------------------*/
function deliveryCost(deliveryQty) {
    //Quantity and Cost calculation:
    const deliveryCostForBelowHundred = 100;
    const deliveryCostForHundredPiece = 100 * deliveryCostForBelowHundred;
    const deliveryCostForUpperHundredToBelowTwoHundred = 80;
    const deliveryCostForTwoHundredPiece = deliveryCostForHundredPiece + (deliveryCostForBelowHundred * deliveryCostForUpperHundredToBelowTwoHundred)
    const deliveryCostForUpperTwoHundred = 50;
    // const DeliveryCostForUpperHundredToBelowTwoHundred =
    //Condition:
    if (deliveryQty > 0 && deliveryQty <= 100) {
        let deliveryCharge = deliveryQty * deliveryCostForBelowHundred;
        return deliveryCharge;
    }
    else if (deliveryQty > 100 && deliveryQty <= 200) {
        const delivered = deliveryQty - 100;
        const deliveryCharge = deliveryCostForHundredPiece + delivered * deliveryCostForUpperHundredToBelowTwoHundred;
        // console.log("Total Delivery charge is "+ deliveryCharge);
        return deliveryCharge;
    }
    else if (deliveryQty > 200) {
        let delivered = deliveryQty - 200;
        let deliveryCharge = deliveryCostForTwoHundredPiece + delivered * deliveryCostForUpperTwoHundred;
        // console.log("Total Delivery charge is "+ deliveryCharge);
        return deliveryCharge;
    }
    else {
        return "Invalid!Kindly input a valid Number"
    }
}
//function declaration:
let final = deliveryCost(250);
console.log(final);
/* ----------------------------------------------------
---------- problem solving: Problem No: 4-----------------*/
function perfectfriend(friends) {
    let bestFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length == 5) {
            return element;
        }
    }
}
let myFriends = ["Tafsir", "Rahat", "Noman", "Abdullah", "Jahid", "Robi", "Manik"];
let mainFriends = perfectfriend(myFriends);
console.log(mainFriends);