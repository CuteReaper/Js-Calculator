let piButton = document.getElementById("piButton")
let powerButton = document.getElementById("powerButton")
let persentageButton = document.getElementById("persentageButton")
let devideButton = document.getElementById("devideButton")
let sevenButton = document.getElementById("sevenButton")
let eightButton = document.getElementById("eightButton")
let nineButton = document.getElementById("nineButton")
let multiButton = document.getElementById("multiButton")
let fourButton = document.getElementById("fourButton")
let fiveButton = document.getElementById("fiveButton")
let sixButton = document.getElementById("sixButton")
let additionButton = document.getElementById("additionButton")
let oneButton = document.getElementById("oneButton")
let twoButton = document.getElementById("twoButton")
let threeButton = document.getElementById("threeButton")
let equalButton = document.getElementById("equalButton")
let dotButton = document.getElementById("dotButton")
let zeroButton = document.getElementById("zeroButton")
let delButton = document.getElementById("delButton")
let fnumlist 


piButton.addEventListener("click" ,function(){
    console.log(Math.PI)

    pichange = document.getElementById("inputNum");
    pichange.value =  parseFloat(Math.PI).toFixed(2);

})
powerButton.addEventListener("click" ,function(){
    powerfirst = document.getElementById("inputNum")

    console.log(powerfirst.value*2)
    powerchange = document.getElementById("inputNum");
    powerchange.value =  parseFloat(Math.PI).toFixed(2);

})
persentageButton.addEventListener("click" ,function(){
    console.log((200/100)*5)
    persentagechange = document.getElementById("inputNum");
    persentagechange.value =  parseFloat(Math.PI).toFixed(2);

})
devideButton.addEventListener("click" ,function(){
    console.log(100/2)
    pichange = document.getElementById("inputNum");
    pichange.value =  parseFloat(Math.PI).toFixed(2);

})
sevenButton.addEventListener("click" ,function(){
    console.log(7)
    sevenchange = document.getElementById("inputNum");
    sevenchange.value = 7 ;

})
eightButton.addEventListener("click" ,function(){
    console.log(8)
    eightchange = document.getElementById("inputNum");
    eightchange.value =  8;

})
nineButton.addEventListener("click" ,function(){
    console.log(9)
    ninechange = document.getElementById("inputNum");
    ninechange.value =  9;

})
multiButton.addEventListener("click" ,function(){
    console.log(2*2)
    multichange = document.getElementById("inputNum");
    multichange.value =  parseFloat(Math.PI).toFixed(2);

})
fourButton.addEventListener("click" ,function(){
    console.log(4)
    fourchange = document.getElementById("inputNum");
    fourchange.value =  4;

})
fiveButton.addEventListener("click" ,function(){
    console.log(5)
    fivechange = document.getElementById("inputNum");
    fivechange.value =  5;

})
sixButton.addEventListener("click" ,function(){
    console.log(6)
    sixchange = document.getElementById("inputNum");
    sixchange.value =  6;

})
additionButton.addEventListener("click" ,function(){
    console.log(1+1)
    pichange = document.getElementById("inputNum");
    pichange.value =  parseFloat(Math.PI).toFixed(2);

})
oneButton.addEventListener("click" ,function(){
    console.log(1)
    onechange = document.getElementById("inputNum");
    onechange.value =  1;

})
twoButton.addEventListener("click" ,function(){
    console.log(2)
    twochange = document.getElementById("inputNum");
    two = wochange.value =  2;
    fnumlist =+ two

})
threeButton.addEventListener("click" ,function(){
    console.log(3)
    threechange = document.getElementById("inputNum");
    three = threechange.value = 3;
    fnumlist =+ three 

})

console.log(fnumlist)

dotButton.addEventListener("click" ,function(){
    console.log(".")
    pichange = document.getElementById("inputNum");
    pichange.value =  parseFloat(Math.PI).toFixed(2);

})
zeroButton.addEventListener("click" ,function(){
    console.log(0)
    pichange = document.getElementById("inputNum");
    pichange.value =  0;

})
delButton.addEventListener("click" ,function(){
    console.log("del")
    pichange = document.getElementById("inputNum");
    pichange.value =  parseFloat(Math.PI).toFixed(2);
})


equalButton.addEventListener("click" ,function(){

    console.log("=")

    fnum = document.getElementById("inputNum");
    fnum.value =  parseFloat(Math.PI).toFixed(2);
    

    function calculator (firstNum , func , secNum){


    }

})
