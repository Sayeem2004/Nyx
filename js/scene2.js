function start_scene2() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../img/scene2.jpg)";

    // Parsing Previous Values
    var url = document.location.href, params = (url.split('?').length <= 1 ? [] : url.split('?')[1].split('&'));
    for (var i = 0; i < params.length; i++) {
         var tmp = params[i].split('=');
         document.getElementById(tmp[0]).value = tmp[1];
    }

    // Setting Current Values
    document.getElementById("current_health").value = document.getElementById("initial_health").value;
    document.getElementById("current_hunger").value = document.getElementById("initial_hunger").value;
    document.getElementById("current_thirst").value = document.getElementById("initial_thirst").value;
    document.getElementById("current_energy").value = document.getElementById("initial_energy").value;
    document.getElementById("current_time").value = document.getElementById("initial_time").value;

    // Setting Up Variables
    var speed = 50;
    var delay = 25*speed;
    var header = document.getElementById("header");
    var story = document.getElementById("story");

    // First Message
    var text1 = "Scene 2";
    setTimeout(function(){typeEffect(header, speed, text1, "black");}, delay);
    delay += text1.length * speed + 25 * speed;
    setTimeout(function(){header.innerHTML = "";}, delay);

    // Story Board
    var text2 = "You enter the ghastly forest and observe as the seemingly healthy tree branches fall down and begin to wither up. A couple of seconds later, purple particles come flying out of the branch. These purple particles were absorbing lifeforce! But why weren’t you being affected? Before you could think of an answer, you hear a yelp of pain in the distance and start heading towards it. You find an injured wolf pinned under a fallen tree, with purple particles beginning to form around it. It appears that only heavily injured lifeforms are being affected by these particles. With that mystery explained, will you decide to help the wolf or forsake it?";
    setTimeout(function(){typeEffect(story, speed/16, text2, "black");}, delay);
    delay += text2.length * speed/16 + 25 * speed;

    // Fading In Button
    show_tags(["choice1", "choice2", "row0"]);
    var choice1 = document.getElementById("choice1");
    choice1.style["width"] = "250px";
    choice1.style["height"] = "75px";
    var choice2 = document.getElementById("choice2");
    choice2.style["width"] = "250px";
    choice2.style["height"] = "75px";
    var row0 = document.getElementById("row0");
    setTimeout(function(){fadeIn(row0);}, delay);
}

function decision_scene2(mode) {
    // Removing Buttons
    hide_tags(["choice1", "choice2", "row0"])

    // Setting Variables
    var speed = 50;
    var delay = 25*speed;
    var help = document.getElementById("help");

    // Adding Decision
    var text;
    if (mode == 0) {
        help.value = "yes";
        text = "After some effort, you manage to push the tree off the injured wolf. It hastily gets up and limps away, but it doesn't get far before collapsing. The purple particles were absorbing too much of the wolf's energy. You decide to give the wolf one of the shrooms you have been eating. After some reluctance, the wolf eats the shroom and regains its energy. The purple particles disappear, presumably seeking a more vulnerable target. Having performed a noble deed, you decide to continue on your journey following the stream of particles.";
    } else {
        help.value = "no";
        text = "You pity the wolf’s situation, but you have more pressing things to dwell on. Soon enough, the purple particles may begin sucking energy from you as well. You have to hurry taowards the destination of the particles and find a way to stop them. Without looking back, you continue on your journey following the stream of particles."
    }
    setTimeout(function(){typeEffect(help, speed/16, text, "black");}, delay);
    delay += text.length * speed/16 + 25 * speed;

    // Fading In Button
    show_tags(["button"]);
    var button = document.getElementById("button");
    button.style["width"] = "250px";
    button.style["height"] = "100px";
    setTimeout(function(){fadeIn(button);}, delay);
}

function action_scene2() {
    // Removing Button And Story
    hide_list = ["button", "story", "header", "help"];
    hide_tags(hide_list);

    // Getting Variables
    var clock = document.getElementById("current_time");

    var options = document.getElementById("options");
    var restory = document.getElementById("restory");
    var rescene = document.getElementById("rescene");
    var restart = document.getElementById("restart");

    var status = document.getElementById("status");
    var progress = document.getElementById("progress");
    var current_health = document.getElementById("current_health");
    var health_label = document.getElementById("health_label");
    var current_hunger = document.getElementById("current_hunger");
    var hunger_label = document.getElementById("hunger_label");
    var current_thirst = document.getElementById("current_thirst");
    var thirst_label = document.getElementById("thirst_label");
    var current_energy = document.getElementById("current_energy");
    var energy_label = document.getElementById("energy_label");

    var moves = document.getElementById("moves");
    var follow = document.getElementById("follow");
    var food = document.getElementById("food");
    var water = document.getElementById("water");
    var sleep = document.getElementById("sleep");
    var panic = document.getElementById("panic");

    var row1 = document.getElementById("row1");
    var row2 = document.getElementById("row2");
    var row3 = document.getElementById("row3");

    // Setting Them Open
    show_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "follow", "food", "water", "sleep", "panic"]);

    // Declaring Variables
    var speed = 50;
    var delay = 10*speed;

    // Adding Timer
    hide_tags(["initial_time"]);
    clock.innerHTML = parse_time(parseInt(clock.value));
    setTimeout(function(){fadeIn(clock);}, delay);
    delay += speed;

    // Adding Game Options
    options.style["color"] = "#17D4FE";
    setTimeout(function(){fadeIn(options);}, delay);
    delay += speed;
    restory.style["width"] = "350px";
    restory.style["height"] = "50px";
    rescene.style["width"] = "350px";
    rescene.style["height"] = "50px";
    restart.style["width"] = "350px";
    restart.style["height"] = "50px";
    setTimeout(function(){fadeIn(row1);}, delay);
    delay += speed;

    // Adding Player Status
    status.style["color"] = "#17D4FE";
    setTimeout(function(){fadeIn(status);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(progress);}, delay);
    delay += speed;
    health_label.innerHTML = "Health: " + current_health.value + "%";
    current_health.style["width"] = current_health.value + "%";
    hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
    current_hunger.style["width"] = current_hunger.value + "%";
    thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";
    current_thirst.style["width"] = current_thirst.value + "%";
    energy_label.innerHTML = "Energy: " + current_energy.value + "%";
    current_energy.style["width"] = current_energy.value + "%";

    // Adding Player Actions
    moves.style["color"] = "#17D4FE";
    setTimeout(function(){fadeIn(moves);}, delay);
    delay += speed;
    follow.style["width"] = "350px";
    food.style["width"] = "350px";
    water.style["width"] = "350px";
    sleep.style["width"] = "350px";
    panic.style["width"] = "350px";
    follow.style["height"] = "50px";
    food.style["height"] = "50px";
    water.style["height"] = "50px";
    sleep.style["height"] = "50px";
    panic.style["height"] = "50px";
    setTimeout(function(){fadeIn(row2);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(row3);}, delay);
    delay += speed;
}

function story_scene2() {
    // Bring Backing Story
    show_tags(["button", "story", "header", "help"]);

    // Setting Them Open
    hide_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "follow", "food", "water", "sleep", "panic"]);
}

function update_scene2(mode) {
    if (mode == 0) {
        follow_msgs = ["A large branch narrowly misses penetrating your head, but you continue onwards.", "A nest of baby birds falls out of a nearby tree and soon they wither away.", "You can finally see the fog starting to dissipate; the end of the forest should be near.", "You finally made your way out of the forest and you see a village nearby."];
        follow_update(follow_msgs, 2);
    }
    if (mode == 1) {
        food_msgs = ["You have found and eaten a sugon shroom.", "You have found and eaten a ligon shroom.", "You have found and eaten a gulpon shroom.", "You have found and eaten a slurbon shroom."];
        food_update(food_msgs);
    }
    if (mode == 2) {
        water_msgs = ["You have drunken water from a nearby stream.", "You have hacked away at a nearby tree and drinken the sap.", "You have opened your mouth and drunken rain water."];
        water_update(water_msgs);
    }
    if (mode == 3) {
        sleep_msgs = ["You have collapsed on the grass and taken a nap.", "You have rested in the shade of a nearby tree.", "You have slept under the blaring sun."];
        sleep_update(sleep_msgs);
    }
    if (mode == 4) {
        panic_msgs = ["You have faced your existential dread and lost.", "You have run around in a circle screaming and crying.", "You have not faced this much depression since your wife died."];
        panic_update(panic_msgs);
    }
}

function end_scene2() {
    // Getting Current Values
    var health = document.getElementById("current_health").value;
    var hunger = document.getElementById("current_hunger").value;
    var thirst = document.getElementById("current_thirst").value;
    var energy = document.getElementById("current_energy").value;
    var time = document.getElementById("current_time").value;
    var help = document.getElementById("help").value;

    // Updating URL
    var parts = document.location.href.split("/");
    parts.pop();
    var url = parts.join("/") + "/scene3.html?";
    url += "initial_health=" + encodeURIComponent(health) + "&";
    url += "initial_hunger=" + encodeURIComponent(hunger) + "&";
    url += "initial_thirst=" + encodeURIComponent(thirst) + "&";
    url += "initial_energy=" + encodeURIComponent(energy) + "&";
    url += "initial_time=" + encodeURIComponent(time) + "&";
    url += "help=" + encodeURIComponent(help);
    document.location.href = url;
}
