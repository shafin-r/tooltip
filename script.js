const trayHandle = document.querySelector("#tray-handle");
const tray = document.querySelector("#tray");
const item = document.querySelector("#item");

const tooltip = document.querySelector("#tooltip");
const tooltipContainer = document.querySelector("#tooltip-container");
const tooltipPosition = document.querySelector("#tooltip-position");

const mousePosition = document.querySelector("#mouse-position");

let isItemClicked = false;
let isTrayClicked = false;
let shiftX;
let shiftY;

const displayTooltip = (alignment) => {
  switch (alignment) {
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

const hideTooltip = () => {
  tooltip.style.display = "none";
  tooltipContainer.classList.remove(
    "tooltip-left",
    "tooltip-right",
    "tooltip-top",
    "tooltip-bottom",
  );
};

item.onmouseover = () => displayTooltip(tooltipPosition.value);
item.onmouseout = hideTooltip;

item.onmousedown = function (event) {
  isItemClicked = true;

  item.style.position = "absolute";
  item.style.zIndex = 1000;

  shiftX = event.clientX - item.offsetLeft;
  shiftY = event.clientY - item.offsetTop;
};

trayHandle.onmousedown = function (event) {
  isTrayClicked = true;

  tray.style.position = "absolute";
  tray.style.zIndex = 1000;

  shiftX = event.clientX - tray.offsetLeft;
  shiftY = event.clientY - tray.offsetTop;
};

window.onmousemove = function (event) {
  if (isItemClicked) {
    item.style.left = event.clientX - shiftX + "px";
    item.style.top = event.clientY - shiftY + "px";
  }

  if (isTrayClicked) {
    tray.style.left = event.clientX - shiftX + "px";
    tray.style.top = event.clientY - shiftY + "px";
  }
};

item.onmouseup = function () {
  isItemClicked = false;
};
tray.onmouseup = function () {
  isTrayClicked = false;
};
