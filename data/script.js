// Written By Me
// Functions For The Homepage
function start_home() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../images/home.jpg)";
    consoleText(["Welcome To NYX!", "Please click the button below to get started."], "text", ["#C3B1E1", "#C3B1E1"]);
}

function end_home() {
    // Moving Onto Next Page
    document.location.href = "scene1.html";
}

// Functions For Scene 1
function start_scene1() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../images/scene1.jpg)";
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
