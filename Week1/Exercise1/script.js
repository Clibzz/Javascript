// Exercise 1a
document.getElementById("a").innerHTML = "Hello World";

// Exercise 1b
let number = 3;
let number2 = 7;
 
document.getElementById("addition").innerHTML = number + ' + ' + number2 + ' = ' + (number + number2);
document.getElementById("substraction").innerHTML = number + ' - ' + number2 + ' = ' + (number - number2);
document.getElementById("product").innerHTML = number + ' * ' + number2 + ' = ' + (number * number2);
document.getElementById("division").innerHTML = number + ' / ' + number2 + ' = ' + (number / number2);

// Exercise 1c
function getJoules() {
    let c2 = Math.pow(300000000, 2);
    let m = document.getElementById("kilograms").value;
    let e = m * c2;
    document.getElementById("joules").innerHTML = e;
};

// Exercise 1d
let groceries = "Banana, tomato, potato, milk, cheese, bread, jam, butter, eggs, ham";
document.getElementById("groceries").innerHTML = groceries;
    
