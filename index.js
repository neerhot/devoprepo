//document.getElementById("count-el").innerText=5;
/*
function countdown()
{
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown();

let lap1=34, lap2=40, lap3=32
function addlap(){
    console.log("Sum of Lap="+ (lap1+lap2+lap3))
}

addlap();

let lapcnt=0;

function lapcount(){
    lapcnt =lapcnt+1;
    console.log(lapcnt);
}

lapcount();
lapcount();
lapcount();
*/
/*
let cnt=0;
let countEl= document.getElementById("count-el");
let saveEl= document.getElementById("save-el");

function Increment(){
  cnt++;
  countEl.innerText=cnt;

}

function logCount(){
    let countstr= cnt +"-";
    cnt=0;
    //saveEl.innerText +=countstr;
     saveEl.textContent +=countstr;
}
*/

// Calculatro implementation

let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let res = document.getElementById("Result")
function Add() {
    res.textContent="Result :"
    res.textContent += parseInt( num1.innerText) +parseInt(num2.innerText);
}
function Subtract() {
    res.textContent="Result :"
    res.textContent += num1.innerText - num2.innerText
}
function Multiplication() {
    res.textContent="Result :"
    res.textContent += num1.innerText * num2.innerText
}
function Divide() {
    debugger;
    res.textContent="Result :"
    res.textContent += num1.innerText / num2.innerText
}