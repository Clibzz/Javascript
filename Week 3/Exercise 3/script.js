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
    'images/betonstraatsteen-6-cm-antraciet-komo.jpg',
    'images/cottage-stones-30x60x4cm-somerset-grijs-zwart-3.jpg',
    'images/cottage-stones-60x60x4cm-somerset-grijs-zwart-2.jpg'
];

var buttonIndex = 0;

function nextPic() {
    document.getElementById('slideshow').src = imagesButton[buttonIndex];
    buttonIndex++;
    console.log(buttonIndex);

    if (buttonIndex == imagesButton.length) { 
        buttonIndex = 0; 
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

