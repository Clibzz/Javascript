// Exercise 4a

// Convert the inserted string to an integer
const number = parseInt(prompt("Enter the amount of numbers you'd like to get:"));
let n1 = 0, n2 = 1, nextNumber;


console.log("De rij van Fibonacci");
for (let i = 1; i <= number; i++) {
    console.log(n1);
    // Add the 2 previous numbers to get the new number
    nextNumber = n1 + n2;
    // Change n1 to the new n1 (which is the old n2)
    n1 = n2;
    // Set n2 to the new number
    n2 = nextNumber;
}

// Exercise 4b
var price = 50;

function getLeftOver() {
    const value = document.getElementById("money").value; 
    const money = parseInt(value);  
    const acceptedAmounts = [5, 10, 25];

    if (price > 0) {
        // Check if the amount of money from the input field is in the array of accepted amounts of money
        if (acceptedAmounts.indexOf(money) !== -1) {
            if (money == 5) {
                price = price - money;
                if (price > 0) {
                    console.log("The remaining amount of money needed is ", price, "cents");
                } else {
                    document.getElementById("label").innerHTML = "The waterbottle has been paid for succesfully!";
                }
            } else if (money == 10) {
                price = price - money;
                if (price > 0) {
                    console.log("The remaining amount of money needed is ", price, "cents");
                } else {
                    document.getElementById("label").innerHTML = "The waterbottle has been paid for succesfully!";
                }
            } else if (money == 25) {
                price = price - money;
                if (price > 0) {
                    console.log("The remaining amount of money needed is ", price, "cents");
                } else {
                    document.getElementById("label").innerHTML = "The waterbottle has been paid for succesfully!";
                }
            } 
        } else {
            // Change the label when an invalid amount of money has been entered
            document.getElementById("label").innerHTML = "Please enter a valid amount of money, you can only insert 5, 10 or 25 cents";
        }
    }
    if (price == 0) {
        // Set the input field to read only when the water bottle has been paid for
        document.getElementById("money").readOnly = true;
        document.getElementById("label").innerHTML = "The waterbottle has been paid for succesfully";

        // Remove button when the waterbottle has been bought
        var button = document.getElementById("button");
        button.parentNode.removeChild(button);

    }
    if (price < 0) {
        // Log the amount of change in the console and set the input field to read only when the water bottle has been paid for
        console.log("The amount of change is ", price * -1, "cents");
        document.getElementById("money").readOnly = true;

        // Remove button when the waterbottle has been bought
        var button = document.getElementById("button");
        button.parentNode.removeChild(button);
    }
}

// Exercise 4c

function removeVowels() {
    const str = document.getElementById("str").value; 
    console.log(str);

    const noVowels = str.replace(/[aeiouAEIOU]/g, "");
    console.log(noVowels);
}
