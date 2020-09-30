let blocks = document.querySelectorAll(".block");
let bigBlock = document.querySelector(".blocks");
let blocksArray = Array.from(blocks);

let handler = (e) => {
  e.target.remove();
  let newElement = document.createElement("div");
  newElement.classList.add(e.target.classList[0]);
  newElement.classList.add(e.target.classList[1]);
  newElement.addEventListener("click", handler);
  newElement.addEventListener("mousedown", moveHandler);
  bigBlock.prepend(newElement);
};

let moveHandler = (e) => {
  
};

blocksArray.forEach((block) => {
  block.addEventListener("click", handler);
  block.addEventListener("mousedown", moveHandler);
});
