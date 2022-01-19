function show_tags(list) {
    // Making Display Open
    for (var i = 0; i < list.length; i++) {
        document.getElementById(list[i]).style["display"] = "";
    }
}

function hide_tags(list) {
    // Making Display Closed
    for (var i = 0; i < list.length; i++) {
        document.getElementById(list[i]).style["display"] = "none";
    }
}

function parse_time(num) {
    var days = Math.floor(num / 1440);
    var hours = Math.floor((num % 1440) / 60);
    var minutes = num % 60;
    return "Day " + days + " " + (hours < 10 ? "0"+hours : hours) + ":" + (minutes < 10 ? "0"+minutes : minutes);
}

function reset_scene(scene) {
    // Getting Initial Values
    var health = document.getElementById("initial_health").value;
    var hunger = document.getElementById("initial_hunger").value;
    var thirst = document.getElementById("initial_thirst").value;
    var energy = document.getElementById("initial_energy").value;
    var time = document.getElementById("initial_time").value;
    var help = document.getElementById("help");
    if (help != null) help = help.value;

    // Updating URL
    var parts = document.location.href.split("/");
    parts.pop();
    var url = parts.join("/") + "/scene" + scene + ".html?";
    url += "initial_health=" + encodeURIComponent(health) + "&";
    url += "initial_hunger=" + encodeURIComponent(hunger) + "&";
    url += "initial_thirst=" + encodeURIComponent(thirst) + "&";
    url += "initial_energy=" + encodeURIComponent(energy) + "&";
    url += "initial_time=" + encodeURIComponent(time);
    if (help != null) url += "&help=" + encodeURIComponent(help);
    document.location.href = url;
}

function restart() {
    // Going Back To Home
    var parts = document.location.href.split("/");
    parts.pop();
    var url = parts.join("/") + "/home.html"
    document.location.href = url;
}

function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var ax = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function update(tag, dif, mn, mx) {
    tag.value = parseInt(tag.value) + dif;
    tag.value = Math.max(mn, parseInt(tag.value));
    tag.value = Math.min(mx, parseInt(tag.value));
}
