// Exercise 2a

class Book {
    hardcover;
    title;
    pages;
    author;

    constructor(hardcover, title, pages, author) {
        this.hardcover = hardcover;
        this.title = title;
        this.pages = pages;
        this.author = author;
    }

    // Getters
    getHardcover() {
        return this.hardcover;
    }
    getTitle() {
        return this.title;
    }
    getPages() {
        return this.pages;
    }
    getAuthor() {
        return this.author;
    }

    // Setters
    setHardcover(newHardcover) {
        this.hardcover = newHardcover;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setPages(newPages) {
        this.pages = newPages;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    } 
}

class Store {
    name;
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    // Getters
    getName() {
        return this.name;
    }
    getLocation() {
        return this.location;
    }

    // Setters
    setName(newName) {
        this.name = newName;
    }
    setLocation(newLocation) {
        this.location = newLocation;
    }
}

class Customer {
    name;
    dateOfBirth;
    customerId;

    constructor(name, dateOfBirth, customerId) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.customerId = customerId;
    }

    // Getters
    getName() {
        return this.name;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    getCustomerId() {
        return this.customerId;
    }
    // Setters
    setName(newName) {
        this.name = newName;
    }
    setDateOfBirth(newDateOfBirth) {
        this.dateOfBirth = newDateOfBirth;
    }
    setCustomerId(newCustomerId) {
        this.customerId = newCustomerId;
    }
}

class Reservation {
    customerId;
    title;
    expireDate;

    constructor(customerId, title, expireDate) {
        this.customerId = customerId;
        this.title = title;
        this.expireDate = expireDate;
    }

    // Getters
    getCustomerId() {
        return this.customerId;
    }
    getTitle() {
        return this.title;
    }
    getExpireDate() {
        return this.expireDate;
    }
    // Setters
    setCustomerId(newCustomerId) {
        this.customerId = newCustomerId;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setExpireDate(newExpireDate) {
        this.expireDate = newExpireDate;
    }

}

// Exercise 2b

class Object {
    name;

    constructor(name) {
        this.name = name;
    }

    //Getters
    getName() {
        return this.name;
    }

    //Setters
    setName(newName) {
        this.name = newName;
    }

    //Methods
    sing() {
        var i = 0;
        do {
            document.write(this.name ,", doo doo doo doo doo doo<br>");
            i++;
        } while (i < 3);
        document.write(this.name ,"!<br>");
    }
}

const baby = new Object("Baby shark");
const mommy = new Object("Mommy shark");
const daddy = new Object("Daddy shark");
const grandma = new Object("Grandma shark");
const grandpa = new Object("Grandpa shark");
const hunt = new Object("Let's go hunt");
const run = new Object("Run away");
const safe = new Object("Safe at last");
const end = new Object("It's the end");

const list = [baby, mommy, daddy, grandma, grandpa, hunt, run, safe, end];

for (i = 0; i < list.length; i++) {
    list[i].sing();
}

// Exercise 2c

function checkIfPalindrome(string) {
    // Split the string into letters in an array
    const letters = string.split("");

    // Reverse the array of letters
    const reverseArray = letters.reverse();

    // Combine the reversed array of letters into a string
    const reverseWord = reverseArray.join("");

    // Check if the string (the reversed array of letters that got combined) is equal to the original string
    if (string == reverseWord) {
        console.log("This string is a palindrome");
    } else {
        console.log("This string is not a palindrome");
    }
}

// Allow the user to fill in a word to check if it's a palindrome
const string = prompt("Enter a word: ");

checkIfPalindrome(string);

// Exercise 2d
// Split string to letters, translate each letter, combine letters to string, document write
const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----", 
    "2": "..---", 
    "3": "...--", 
    "4": "....-", 
    "5": ".....", 
    "6": "-....", 
    "7": "--...", 
    "8": "---..", 
    "9": "----.", 
    "0": "-----"
} 

function getMorseCode() {
    // const str = document.getElementById("str").value;
    // const letters = str.split("");
    // console.log(letters);
    // letters.map(function(e) {
    //     const morseLetters = morseCode[e.toUpperCase()] || "";
    //     console.log(morseLetters);
    //     // let morseWord = morseLetters.join("");
    // }) 

    let charArray = document.getElementById("str").value.toUpperCase().split("");
        let morseString = "";
        charArray.forEach(element => {
            morseString += morseCode[element] + " | ";
        });
        document.getElementById("morse").innerHTML = morseString;
}









