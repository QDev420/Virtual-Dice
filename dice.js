function p1randomNum() {
    rNum = Math.floor((Math.random() * 6) + 1)
    return rNum
}

function p2randomNum() {
    rNum = Math.floor((Math.random() * 6) + 1)
    return rNum
}

function imageChanger(ranNum, img) {
    if (ranNum === 1) {
        document.getElementsByClassName(img)[0].src="/dice1.png"
    }
    else if (ranNum === 2) {
        document.getElementsByClassName(img)[0].src="/dice2.png"
    }
    else if (ranNum === 3) {
        document.getElementsByClassName(img)[0].src="/dice3.png"
    }
    else if (ranNum === 4) {
        document.getElementsByClassName(img)[0].src="/dice4.png"
    }
    else if (ranNum === 5) {
        document.getElementsByClassName(img)[0].src="/dice5.png"
    }
    else {
        document.getElementsByClassName(img)[0].src="/dice6.png"
    }}

img1 = "img1"
img2 = "img2"

function changeHeader(p1ranNum, p2ranNum) {
    var heading = document.querySelector('h1');
    if (p1ranNum < p2ranNum) {
        heading.textContent = "Player 2 Wins"
    } 
    else if (p1ranNum > p2ranNum) {
        heading.textContent = "Player 1 Wins"
    }
    else {
        heading.textContent = "Roll Again"
    }

}


var button = document.getElementById("myButton");

button.addEventListener("click", function() {
    p1ranNum = p1randomNum();
    p2ranNum = p2randomNum();
    imageChanger(p1ranNum, img1);
    imageChanger(p2ranNum, img2);
    changeHeader(p1ranNum, p2ranNum);
});



