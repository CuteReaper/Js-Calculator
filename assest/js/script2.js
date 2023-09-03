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
let x
let numList =[]

letfnum = 0
let secnum =0

let inputlist = ""
let inputlist2 = ""


function getfunction(firstnumber , secondnumber){
;
    additionButton.addEventListener("click" ,function(){
        inputnum = document.getElementById("inputNum");
        inputnum.value = ""
        console.log("i am in function")
        getinputtwo()
        console.log("i am in calculating")
        displaynum = firstnumber + secondnumber
        console.log(displaynum)
        
    })    

    
}


// get first numbers and display

function getinput (){
    let inputlist = ""
    console.log("i am in get input one")
    for (let i = 0; i < 1; i++){
        
        oneButton.addEventListener("click" ,function(){
            numList.push(1)
            inputnum = document.getElementById("inputNum");
            inputlist= inputnum.value = numList.join("");
            console.log(inputlist)
            inputValue = document.getElementById("inputNum");
            inputValue.value = inputlist
            fnum = inputlist
        
        })
        twoButton.addEventListener("click" ,function(){
            // console.log(2)
            // twochange = document.getElementById("inputNum");
            // twochange.value = 2;
            numList.push(2)
            // console.log(numList)

            inputnum = document.getElementById("inputNum");
            // var arrayOfNumbers = numList.map(Number);
            // console.log(arrayOfNumbers)
            inputlist= inputnum.value = numList.join("");
            console.log(inputlist)
        
            inputValue = document.getElementById("inputNum");
            inputValue.value = inputlist
            fnum = inputlist
        
        })
        threeButton.addEventListener("click" ,function(){
            console.log(3)
            // threechange = document.getElementById("inputNum");
            // three = threechange.value = 3;
            // fnumlist =+ three 
            numList.push(3)
        
        inputnum = document.getElementById("inputNum");
        // var arrayOfNumbers = numList.map(Number);
        // console.log(arrayOfNumbers)
        inputlist= inputnum.value = numList.join("");
        console.log(inputlist)

        inputValue = document.getElementById("inputNum");
        inputValue.value = inputlist
        fnum = inputlist
        })

        fourButton.addEventListener("click" ,function(){
            numList.push(4)
            inputnum = document.getElementById("inputNum");
            inputlist= inputnum.value = numList.join("");
            console.log(inputlist)
            inputValue = document.getElementById("inputNum");
            inputValue.value = inputlist
            fnum = inputlist
        
        })
        fiveButton.addEventListener("click" ,function(){
            numList.push(5)
            inputnum = document.getElementById("inputNum");
            inputlist= inputnum.value = numList.join("");
            console.log(inputlist)
            inputValue = document.getElementById("inputNum");
            inputValue.value = inputlist
            fnum = inputlist
        
        })
        sixButton.addEventListener("click" ,function(){
            numList.push(6)
            inputnum = document.getElementById("inputNum");
            inputlist= inputnum.value = numList.join("");
            
            inputValue = document.getElementById("inputNum");
            inputValue.value = inputlist
            fnum = inputlist
        
        })
        sevenButton.addEventListener("click" ,function(){
            numList.push(7)
            inputnum = document.getElementById("inputNum");
            inputlist= inputnum.value = numList.join("");
            console.log(inputlist)
            inputValue = document.getElementById("inputNum");
            inputValue.value = inputlist
            fnum = inputlist
        
        })
        eightButton.addEventListener("click" ,function(){
            numList.push(8)
            inputnum = document.getElementById("inputNum");
            inputlist= inputnum.value = numList.join("");
            console.log(inputlist)
            inputValue = document.getElementById("inputNum");
            inputValue.value = inputlist
            fnum = inputlist
        
        })
        nineButton.addEventListener("click" ,function(){
            numList.push(9)
            inputnum = document.getElementById("inputNum");
            inputlist= inputnum.value = numList.join("");
            console.log(inputlist)
            inputValue = document.getElementById("inputNum");
            inputValue.value = inputlist
            fnum = inputlist
        })
        
        
    }
    getfunction(inputlist , inputlist2)
    return inputlist
    
}



// get second number and display

function getinputtwo (){
    let inputlist2 = ""
    console.log("i am in get input two")
    for (let i = 0; i < 1; i++){
        
        oneButton.addEventListener("click" ,function(){
            numList.push(1)
            inputnum = document.getElementById("inputNum");
            inputlist2= inputnum.value = numList.join("");
            console.log(inputlist2)
            inputValue2 = document.getElementById("inputNum");
            inputValue2.value = inputlist2
            secnum = inputlist2
        
        })
        twoButton.addEventListener("click" ,function(){
            // console.log(2)
            // twochange = document.getElementById("inputNum");
            // twochange.value = 2;
            numList.push(2)
            // console.log(numList)

            inputnum = document.getElementById("inputNum");
            // var arrayOfNumbers = numList.map(Number);
            // console.log(arrayOfNumbers)
            inputlist2= inputnum.value = numList.join("");
            console.log(inputlist2)
        
            inputValue2 = document.getElementById("inputNum");
            inputValue2.value = inputlist2
            secnum = inputlist2
        
        })
        threeButton.addEventListener("click" ,function(){
            console.log(3)
            // threechange = document.getElementById("inputNum");
            // three = threechange.value = 3;
            // fnumlist =+ three 
            numList.push(3)
        
        inputnum = document.getElementById("inputNum");
        // var arrayOfNumbers = numList.map(Number);
        // console.log(arrayOfNumbers)
        inputlist2= inputnum.value = numList.join("");
        console.log(inputlist2)

        inputValue2 = document.getElementById("inputNum");
        inputValue2.value = inputlist2
        secnum = inputlist2
        })

        fourButton.addEventListener("click" ,function(){
            numList.push(4)
            inputnum = document.getElementById("inputNum");
            inputlist2= inputnum.value = numList.join("");
            console.log(inputlist2)
            inputValue2 = document.getElementById("inputNum");
            inputValue2.value = inputlist2
            secnum = inputlist2
        
        })
        fiveButton.addEventListener("click" ,function(){
            numList.push(5)
            inputnum = document.getElementById("inputNum");
            inputlist2= inputnum.value = numList.join("");
            console.log(inputlist2)
            inputValue2 = document.getElementById("inputNum");
            inputValue2.value = inputlist2
            secnum = inputlist2
        
        })
        sixButton.addEventListener("click" ,function(){
            numList.push(6)
            inputnum = document.getElementById("inputNum");
            inputlist2= inputnum.value = numList.join("");
            
            inputValue2 = document.getElementById("inputNum");
            inputValue2.value = inputlist2
            secnum = inputlist2
        
        })
        sevenButton.addEventListener("click" ,function(){
            numList.push(7)
            inputnum = document.getElementById("inputNum");
            inputlist2= inputnum.value = numList.join("");
            console.log(inputlist2)
            inputValue2 = document.getElementById("inputNum");
            inputValue2.value = inputlist2
            secnum = inputlist2
        
        })
        eightButton.addEventListener("click" ,function(){
            numList.push(8)
            inputnum = document.getElementById("inputNum");
            inputlist2= inputnum.value = numList.join("");
            console.log(inputlist2)
            inputValue2 = document.getElementById("inputNum");
            inputValue2.value = inputlist2
            secnum = inputlist2
        
        })
        nineButton.addEventListener("click" ,function(){
            numList.push(9)
            inputnum = document.getElementById("inputNum");
            inputlist2= inputnum.value = numList.join("");
            console.log(inputlist2)
            inputValue2 = document.getElementById("inputNum");
            inputValue2.value = inputlist2
            secnum = inputlist2
        })
        
        
    }
    return inputlist2
}

// get function


getinput()

// let firstnum = inputlist
// let secondnum = inputlist2
// parseInt(displaynum) = firstnum + secondnum
// console.log(displaynum)
// // getinput()
// getfunction(firstnum , secondnum)