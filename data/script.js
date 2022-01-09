// Functions For The Homepage
function start_home() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../images/home.jpg)";
    document.getElementById("box").style["background-color"] = "#8f57ba";
    document.getElementById("text").style["color"] = "white";
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style["background-color"] = "#8f57ba";
        buttons[i].style["color"] = "white";
    }
}

function end_home() {
    // Moving Onto Next Page
    document.location.href = "scene1.html";
}

// Functions For Scene 1
function start_scene1() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../images/scene1.png)";
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style["background-color"] = "#307342";
    }
    var texts = document.getElementsByTagName("p");
    for (var i = 0; i < texts.length; i++) {
        texts[i].style["color"] = "white";
    }
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style["background-color"] = "#307342";
        buttons[i].style["color"] = "white";
    }
}

function update_scene1(type) {
    // Getting Elements
    var health = document.getElementById("health");
    var hunger = document.getElementById("hunger");
    var thirst = document.getElementById("thirst");
    var sleep = document.getElementById("sleep");

    // Eating
    if (type == 0) {

    }
}
