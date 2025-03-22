function resetLights() {
    document.querySelector('.one').style.backgroundColor = "rgb(90, 20, 20)"; // Dimmed red
    document.querySelector('.two').style.backgroundColor = "rgb(90, 90, 20)"; // Dimmed yellow
    document.querySelector('.three').style.backgroundColor = "rgb(20, 90, 20)"; // Dimmed green
}

function red_light() {
    resetLights();
    document.querySelector('.one').style.backgroundColor = "red";
}

function yellow_light() {
    resetLights();
    document.querySelector('.two').style.backgroundColor = "yellow";
}

function green_light() {
    resetLights();
    document.querySelector('.three').style.backgroundColor = "green";
}
