let myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png") {
        myImage.setAttribute("src", "images/action-words.png");

    } else {
        myImage.setAttribute("src", "images/firefox.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Enter your name here and see what I can do:");
    if (!myName) {
        setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Mozilla is awsome, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is Fun, ' + storedName;
  }

myButton.onclick = () => {
    setUserName();
};