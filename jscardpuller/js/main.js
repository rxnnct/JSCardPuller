"use strict";

let numberOfNumbers;
let arrayOfNumbers;
let resultString;

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function printArrayOfNumbers() {
	resultString = arrayOfNumbers.slice(1).join(" ");
    document.getElementById("list-of-numbers").textContent = resultString;
}

document.getElementById("generate-list-of-numbers").onclick = function (){
    numberOfNumbers = document.getElementById("input").value;
    resultString = "";
    arrayOfNumbers = [];
    for (let i = 0; i <= numberOfNumbers; i++) {
        arrayOfNumbers.push(i);
    }
    document.getElementById("last-pulled-number").textContent = "Last number: ";
    printArrayOfNumbers();
}

document.getElementById("pull-number").onclick = function (){
    if (arrayOfNumbers.length - 1) {
        resultString = "";
        let randomNumber = randomInteger(1, arrayOfNumbers.length - 1);
        let lastNumber = arrayOfNumbers[randomNumber];
        arrayOfNumbers.splice(randomNumber, 1);
        document.getElementById("last-pulled-number").textContent = "Last number: " + lastNumber;
        printArrayOfNumbers();
    } else {
        document.getElementById("last-pulled-number").textContent = "Empty";
    }
}
