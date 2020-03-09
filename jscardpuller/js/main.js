function generateArrayOfNumbers() {
    numberOfNumbers = document.getElementById("input").value;
    resultString = "";
    arrayOfNumbers = [];
    for (var i = 0; i <= numberOfNumbers; i++) {
        arrayOfNumbers.push(i);
    }
    document.getElementById("number").innerHTML = "Last number: ";
    printArrayOfNumbers();
}

function pullNumber() {
    if (arrayOfNumbers.length - 1) {
        resultString = "";
        var number = randomInteger(1, arrayOfNumbers.length - 1);
        var lastNumber = arrayOfNumbers[number];
        arrayOfNumbers.splice(number, 1);
        document.getElementById("number").innerHTML = "Last number: " + lastNumber;
        printArrayOfNumbers();
    } else {
        document.getElementById("number").innerHTML = "Empty"
    }
}

function printArrayOfNumbers(){
    for (var i = 1; i <= arrayOfNumbers.length - 1; i++) {
        resultString = resultString + " " + arrayOfNumbers[i];
    }
    document.getElementById("list").innerHTML = resultString;
}

function randomInteger(min, max) {
    var randomNumber = min + Math.random() * (max + 1 - min);
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}
