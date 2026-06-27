let body = document.querySelector("body")
let para = document.querySelector("p");
let lightButton = document.querySelector(".light-btn");
let darkButton = document.querySelector(".dark-btn");
let heading1 = document.querySelector("h1");
let heading2 = document.querySelector("h2");

// Light Mode
lightButton.addEventListener("click", () => {
    body.style.backgroundColor = "white";
    para.style.color = "black";
    heading1.style.color = "black"
    heading2.style.color = "black"
})

// Dark Mode
darkButton.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    para.style.color = "white";
    heading1.style.color = "white"
    heading2.style.color = "white"
})

