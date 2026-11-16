const trayHandle = document.querySelector("#tray-handle");
const tray = document.querySelector("#tray");
const item = document.querySelector("#item");

const tooltip = document.querySelector("#tooltip");
const tooltipContainer = document.querySelector("#tooltip-container");
const tooltipPosition = document.querySelector("#tooltip-position");

const mousePosition = document.querySelector("#mouse-position");

let isMouseClicked = false;
let shiftX;
let shiftY;

item.onmouseover = function (event) {
  switch (tooltipPosition.value) {
    case "left":
      tooltip.style.display = "block";
      tooltipContainer.classList.add("tooltip-left");
      break;
    case "right":
      tooltip.style.display = "block";
      tooltipContainer.classList.add("tooltip-right");
      break;
    case "top":
      tooltip.style.display = "block";
      tooltipContainer.classList.add("tooltip-top");
      break;
    case "bottom":
      tooltip.style.display = "block";
      tooltipContainer.classList.add("tooltip-bottom");
      break;
  }
};

item.onmouseout = function () {
  switch (tooltipPosition.value) {
    case "left":
      tooltip.style.display = "none";
      tooltipContainer.classList.remove("tooltip-left");
      break;
    case "right":
      tooltip.style.display = "none";
      tooltipContainer.classList.remove("tooltip-right");
      break;
    case "top":
      tooltip.style.display = "none";
      tooltipContainer.classList.remove("tooltip-top");
      break;
    case "bottom":
      tooltip.style.display = "none";
      tooltipContainer.classList.remove("tooltip-bottom");
      break;
  }
};

item.onmousedown = function (event) {
  isMouseClicked = true;
  mousePosition.textContent = "Clicked";

  item.style.position = "absolute";
  item.style.zIndex = 1000;

  shiftX = event.clientX - item.offsetLeft;
  shiftY = event.clientY - item.offsetTop;
};

item.onmousemove = function (event) {
  if (isMouseClicked) {
    mousePosition.textContent = "Moving";

    item.style.left = event.clientX - shiftX + "px";
    item.style.top = event.clientY - shiftY + "px";
  }
};

tray.onmouseup = function (event) {
  mousePosition.textContent = "Released.";
  isMouseClicked = false;
};
