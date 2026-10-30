const trayHandle = document.getElementById("tray-handle");
const tray = document.getElementById("tray");
const item = document.getElementById("item");

const tooltip = document.getElementById("tooltip");
const tooltipContainer = document.getElementById("tooltip-container");
const tooltipPosition = document.getElementById("tooltip-position");


item.addEventListener("mouseover", (e) => {
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
})

item.addEventListener("mouseleave", (e) => {
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
})
