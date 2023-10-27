var fullName = document.getElementById(fullname);
var city = document.getElementById(city);
var locate = document.getElementById(address);
var cell = document.getElementById(phone);

function sendInfo(){
    var all = fullName + city + locate + cell;
    console.log(all);
}