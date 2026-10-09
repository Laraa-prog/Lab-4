let selectedDoor = "";
let selectedAction = "";

let redDoor = document.getElementById("red-door");
let blueDoor = document.getElementById("blue-door");
let greenDoor = document.getElementById("green-door");

let enterButton = document.getElementById("enter-button");
let runButton = document.getElementById("run-button");

function showResult() {
    if (selectedDoor === "") {
        document.getElementById("result").innerHTML = "Please pick a door first.";
    } else if (selectedDoor === "red" && selectedAction === "enter") {
        document.getElementById("result").innerHTML = "You opened the red door and found a zombie!";
    } else if (selectedDoor === "blue" && selectedAction === "enter") {
        document.getElementById("result").innerHTML = "You opened the blue door and found a skeleton!";
    } else if (selectedDoor === "green" && selectedAction === "enter") {
        document.getElementById("result").innerHTML = "You opened the green door and found a hidden path that leads to an underground tunnel!";
    } else if (selectedAction === "run") {
        document.getElementById("result").innerHTML = "You ran away safely!";
    } else {
        document.getElementById("result").innerHTML = "You selected the " + selectedDoor + " door. Now choose whether to enter or run away.";
    
    }

}

redDoor.addEventListener("click", function () {
    selectedDoor = "red";
    selectedAction = "";
    showResult();
});

blueDoor.addEventListener("click", function () {
    selectedDoor = "blue";
    selectedAction = "";
    showResult();
});

greenDoor.addEventListener("click", function () {
    selectedDoor = "green";
    selectedAction = "";
    showResult();
});

enterButton.addEventListener("click", function () {
    selectedAction = "enter";
    showResult();
});

runButton.addEventListener("click", function () {
    selectedAction = "run";
    showResult();
});

