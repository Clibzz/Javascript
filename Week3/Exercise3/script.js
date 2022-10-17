// Exercise 3a
const quotes = [
    "Beter laat dan nooit",
    "Tijd is geld",
    "Jong geleerd is oud gedaan",
    "De appel valt niet ver van de boom",
];

function randomQuote() {
    const j = Math.floor(Math.random() * (quotes.length));
    console.log(j);
    document.getElementById("quote").innerHTML = quotes[j];
}


// Exercise 3b 
var imagesButton = [ 
    'images/1.gif', 
    'images/2.gif', 
    'images/3.gif',
    'images/4.gif'
]; 

var nextIndex = 1;
console.log(nextIndex);

function nextPic() { 
    if (nextIndex == imagesButton.length) {
        nextIndex = 0;
    }
    document.getElementById('slideshow').src = imagesButton[nextIndex]; 
    nextIndex++; 
    console.log(nextIndex); 
} 

function prevPic() {
    if (nextIndex == 1) {
        document.getElementById('slideshow').src = imagesButton[3];
        nextIndex = imagesButton.length;
        console.log(nextIndex);
    } else {
        nextIndex--;
        document.getElementById('slideshow').src = imagesButton[nextIndex - 1];
        console.log(nextIndex);
    }
}


//Exercise 3c
var imagesTimer = [
    'images/betonstraatsteen-6-cm-antraciet-komo.jpg',
    'images/cottage-stones-30x60x4cm-somerset-grijs-zwart-3.jpg',
    'images/cottage-stones-60x60x4cm-somerset-grijs-zwart-2.jpg'
];

var curIndex = 0;
var imgDuration = 2000;

function slideShowTimer() {
    document.getElementById('slideshowtimer').src = imagesTimer[curIndex];
    curIndex++;

    // Reset the curIndex when the last picture of the array has been shown
    if (curIndex == imagesTimer.length) { 
        curIndex = 0; 
    }
    // Set the amount of time a picture is shown
    setTimeout("slideShowTimer()", imgDuration);
}
slideShowTimer();

