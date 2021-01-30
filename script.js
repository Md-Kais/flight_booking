//recieve previous value;
function recievePreviousValue(id) {
    // var preValue = document.getElementById(id).value;
    // alert(preValue);
    preValue = parseInt(preValue);
    return preValue;
}
//change previous Value (new Value);
function changePreviousValue(id, VALUE) {
    document.getElementById(id).value = VALUE;
    // return preValue;
}
//increase the value(plus)
function plus(id) {
     var next = recievePreviousValue(id);
  
    next += 1;
    changePreviousValue(id, next);
    lastTotal();
}
//decrease the value(minus);
function minus(id) {
    var next = recievePreviousValue(id);
    next -= 1;
    changePreviousValue(id, next);
    lastTotal();
}
//function the Price of each product
function productPrice(id, valueOfProduct) {
    var amount = recievePreviousValue(id);
    var price = valueOfProduct * amount;
    return price;
}
//change Inner Text 
function innerTextChange(id, vALUEoFtOTAL) {
    document.getElementById(id).innerText = vALUEoFtOTAL;
}
//subtotal +tax(10% VAT) +Total
function lastTotal() {

    var subtotal = productPrice('firstClass', 150) + productPrice('economyClass', 100);
    innerTextChange('subTotal', subtotal);
    var vat = parseInt(ceil((subtotal) * 0.1));
    innerTextChange('VAT', vat);
    var total = subtotal + vat;
    innerTextChange('TOTAL', total);
}
