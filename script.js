const trayHandle = document.querySelector("#tray-handle");
const tray = document.querySelector("#tray");
const item = document.querySelector("#item");

const tooltip = document.querySelector("#tooltip");
const tooltipContainer = document.querySelector("#tooltip-container");
const tooltipPosition = document.querySelector("#tooltip-position");

let isItemClicked = false;
let isTrayClicked = false;
let shiftX;
let shiftY;
let offset;

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

item.addEventListener("pointerover", () =>
  displayTooltip(tooltipPosition.value),
);
item.addEventListener("pointerout", hideTooltip);

function calculateOffset(event, el) {
  x = event.clientX - el.offsetLeft;
  y = event.clientY - el.offsetTop;

  return { x, y };
}

function translateElement(el, event, offset) {
  el.style.left = event.clientX - offset.x + "px";
  el.style.top = event.clientY - offset.y + "px";
}

item.addEventListener("pointerdown", function (event) {
  isItemClicked = true;
  offset = calculateOffset(event, item);
});

trayHandle.addEventListener("pointerdown", function (event) {
  isTrayClicked = true;
  offset = calculateOffset(event, tray);
});

window.addEventListener("pointermove", function (event) {
  if (isItemClicked) {
    translateElement(item, event, offset);
  }

  if (isTrayClicked) {
    translateElement(tray, event, offset);
  }
});

item.addEventListener("pointerup", function (event) {
  isItemClicked = false;
});

trayHandle.addEventListener("pointerup", function (event) {
  isTrayClicked = false;
});
