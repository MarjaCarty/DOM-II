// Your code goes here
//variables and selectors
const html = document.querySelector("html");
const body = document.querySelector("body");
const navLink = document.querySelectorAll(".nav-link");
const h1 = document.createElement("h1");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".btn");
const container = document.querySelector(".container");

//transitioning on load and click
const handleBodyEvent = () => {
  body.style.opacity = "0";
  body.style.position = "absolute";
  html.style.backgroundColor = "#d99f00";
  h1.textContent = "The wheels on the bus go round and round";
  h1.style.textAlign = "center";
  h1.style.paddingTop = "20%";
  html.prepend(h1);
};

const handleClickEvent = () => {
  html.style.backgroundColor = "transparent";
  html.style.transition = "2s";
  body.style.opacity = "1";
  body.style.position = "static";
  body.style.transition = "2s";
  h1.style.display = "none";
};

window.addEventListener("load", handleBodyEvent);

window.addEventListener("click", handleClickEvent);

//nav items
navLink.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.color = "#d99f00";
    item.style.transition = "1s";
  });
});

navLink.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    item.style.color = "black";
    item.style.transition = "1s";
  });
});

//fade images on doubleclick
images.forEach((img) => {
  img.addEventListener("dblclick", () => {
    img.style.opacity = 0;
    img.style.transition = "2s";
  });
});

//change button color on resize
window.addEventListener("resize", () => {
  buttons.forEach((btn) => {
    btn.style.backgroundColor = "#d99f00";
    btn.style.transition = "1s";
  });
});

//alert on copy
window.addEventListener("copy", () => {
  alert("Stop stealing from me!");
});

//background change on keydown
window.addEventListener("keydown", () => {
  body.style.backgroundColor = "skyblue";
});

//image fade on dragstart
images.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.style.opacity = 0;
    item.style.transition = "2s";
  });
});

//background change on wheel event
window.addEventListener("wheel", () => {
  body.style.backgroundColor = "pink";
  body.style.transition = "1s";
});
