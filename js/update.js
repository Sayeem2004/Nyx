function follow_update(msgs, scene) {
    // Updating Time
    var time_add = getRandomInt(240, 301);
    var clock = document.getElementById("current_time");
    update(clock, time_add, 0, 1000000000);
    clock.innerHTML = parse_time(parseInt(clock.value));

    // Updating Health, Food, Thirst, Energy
    var health = document.getElementById("current_health");
    var hunger = document.getElementById("current_hunger");
    var thirst = document.getElementById("current_thirst");
    var energy = document.getElementById("current_energy");
    var health_label = document.getElementById("health_label");
    var hunger_label = document.getElementById("hunger_label");
    var thirst_label = document.getElementById("thirst_label");
    var energy_label = document.getElementById("energy_label");
    update(energy, -1*getRandomInt(8, 16), 0, 100);
    current_energy.style["width"] = current_energy.value + "%";
    energy_label.innerHTML = "Energy: " + current_energy.value + "%";
    update(hunger, -1*getRandomInt(8, 16), 0, 100);
    current_hunger.style["width"] = current_hunger.value + "%";
    hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
    update(thirst, -1*getRandomInt(8, 16), 0, 100);
    current_thirst.style["width"] = current_thirst.value + "%";
    thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";

    // Updating Warnings
    var warning = document.getElementById("warning");
    warning.style["color"] = "red";
    warning.style["font-size"] = "20px";
    warning.innerHTML = "";
    if (energy.value == 0) {
        update(health, -1*getRandomInt(3, 6), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme tiredness.";
    }
    if (hunger.value == 0) {
        update(health, -1*getRandomInt(3, 11), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme hunger."
    }
    if (thirst.value == 0) {
        update(health, -1*getRandomInt(3, 16), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme thirst.";
    }
    if (health.value == 0) {
        start_death(1);
    }

    // Health Regeneration
    if (energy.value > 70 && hunger.value >= 70 && thirst.value >= 70) {
        update(health, getRandomInt(10, 21), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You have gained health from being satiated.";
    }

    // Updating Response Count
    var response = document.getElementById("response");
    response.style["color"] = "#17D4FE";
    var count = document.getElementById("follow_count");
    var cnt = parseInt(count.value)
    response.innerHTML = msgs[Math.min(cnt, msgs.length-1)]
    if (cnt >= msgs.length) {
        if (scene == 1) end_scene1();
        if (scene == 2) end_scene2();
    }
    count.value = cnt+1;
}

function food_update(msgs) {
    // Variables
    var health = document.getElementById("current_health");
    var hunger = document.getElementById("current_hunger");
    var thirst = document.getElementById("current_thirst");
    var energy = document.getElementById("current_energy");
    var health_label = document.getElementById("health_label");
    var hunger_label = document.getElementById("hunger_label");
    var thirst_label = document.getElementById("thirst_label");
    var energy_label = document.getElementById("energy_label");

    // Preventing Spam
    var count = document.getElementById("food_count");
    var cnt = parseInt(count.value);
    count.value = cnt+1;
    var warning = document.getElementById("warning");
    warning.style["color"] = "red";
    warning.style["font-size"] = "20px";
    warning.innerHTML = "";
    if (cnt >= 20) {
        warning.innerHTML = "This place seems to have run out of food.";
        update(energy, -1*getRandomInt(3, 9), 0, 100);
        current_energy.style["width"] = current_energy.value + "%";
        energy_label.innerHTML = "Energy: " + current_energy.value + "%";
        update(hunger, -1*getRandomInt(3, 9), 0, 100);
        current_hunger.style["width"] = current_hunger.value + "%";
        hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
        update(thirst, -1*getRandomInt(3, 9), 0, 100);
        current_thirst.style["width"] = current_thirst.value + "%";
        thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";
    } else {
        // Updating Health, Food, Thirst, Energy
        update(energy, -1*getRandomInt(3, 9), 0, 100);
        current_energy.style["width"] = current_energy.value + "%";
        energy_label.innerHTML = "Energy: " + current_energy.value + "%";
        update(hunger, getRandomInt(25, 51), 0, 100);
        current_hunger.style["width"] = current_hunger.value + "%";
        hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
        update(thirst, -1*getRandomInt(3, 9), 0, 100);
        current_thirst.style["width"] = current_thirst.value + "%";
        thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";
    }

    // Updating Time
    var time_add = getRandomInt(30, 76);
    var clock = document.getElementById("current_time");
    update(clock, time_add, 0, 1000000000);
    clock.innerHTML = parse_time(parseInt(clock.value));

    // Updating Warnings
    if (energy.value == 0) {
        update(health, -1*getRandomInt(3, 6), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme tiredness.";
    }
    if (hunger.value == 0) {
        update(health, -1*getRandomInt(3, 11), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme hunger."
    }
    if (thirst.value == 0) {
        update(health, -1*getRandomInt(3, 16), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme thirst.";
    }
    if (health.value == 0) {
        start_death(1);
    }

    // Health Regeneration
    if (energy.value > 70 && hunger.value >= 70 && thirst.value >= 70) {
        update(health, getRandomInt(10, 21), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You have gained health from being satiated.";
    }

    // Updating Response Count
    var response = document.getElementById("response");
    response.style["color"] = "#17D4FE";
    if (cnt < 20) {
        response.innerHTML = msgs[getRandomInt(0, msgs.length)];
    } else {
        response.innerHTML = "";
    }
}

function water_update(msgs) {
    // Variables
    var health = document.getElementById("current_health");
    var hunger = document.getElementById("current_hunger");
    var thirst = document.getElementById("current_thirst");
    var energy = document.getElementById("current_energy");
    var health_label = document.getElementById("health_label");
    var hunger_label = document.getElementById("hunger_label");
    var thirst_label = document.getElementById("thirst_label");
    var energy_label = document.getElementById("energy_label");

    // Preventing Spam
    var count = document.getElementById("water_count");
    var cnt = parseInt(count.value);
    count.value = cnt+1;
    var warning = document.getElementById("warning");
    warning.style["color"] = "red";
    warning.style["font-size"] = "20px";
    warning.innerHTML = "";
    if (cnt >= 20) {
        warning.innerHTML = "This place seems to have run out of water.";
        update(energy, -1*getRandomInt(3, 9), 0, 100);
        current_energy.style["width"] = current_energy.value + "%";
        energy_label.innerHTML = "Energy: " + current_energy.value + "%";
        update(hunger, -1*getRandomInt(3, 9), 0, 100);
        current_hunger.style["width"] = current_hunger.value + "%";
        hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
        update(thirst, -1*getRandomInt(3, 9), 0, 100);
        current_thirst.style["width"] = current_thirst.value + "%";
        thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";
    } else {
        // Updating Health, Food, Thirst, Energy
        update(energy, -1*getRandomInt(3, 9), 0, 100);
        current_energy.style["width"] = current_energy.value + "%";
        energy_label.innerHTML = "Energy: " + current_energy.value + "%";
        update(hunger, -1*getRandomInt(3, 9), 0, 100);
        current_hunger.style["width"] = current_hunger.value + "%";
        hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
        update(thirst, getRandomInt(25, 51), 0, 100);
        current_thirst.style["width"] = current_thirst.value + "%";
        thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";
    }

    // Updating Time
    var time_add = getRandomInt(30, 76);
    var clock = document.getElementById("current_time");
    update(clock, time_add, 0, 1000000000);
    clock.innerHTML = parse_time(parseInt(clock.value));

    // Updating Warnings
    if (energy.value == 0) {
        update(health, -1*getRandomInt(3, 6), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme tiredness.";
    }
    if (hunger.value == 0) {
        update(health, -1*getRandomInt(3, 11), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme hunger."
    }
    if (thirst.value == 0) {
        update(health, -1*getRandomInt(3, 16), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme thirst.";
    }
    if (health.value == 0) {
        start_death(1);
    }

    // Health Regeneration
    if (energy.value > 70 && hunger.value >= 70 && thirst.value >= 70) {
        update(health, getRandomInt(10, 21), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You have gained health from being satiated.";
    }

    // Updating Response Count
    var response = document.getElementById("response");
    response.style["color"] = "#17D4FE";
    if (cnt < 20) {
        response.innerHTML = msgs[getRandomInt(0, msgs.length)];
    } else {
        response.innerHTML = "";
    }
}

function sleep_update(msgs) {
    // Variables
    var health = document.getElementById("current_health");
    var hunger = document.getElementById("current_hunger");
    var thirst = document.getElementById("current_thirst");
    var energy = document.getElementById("current_energy");
    var health_label = document.getElementById("health_label");
    var hunger_label = document.getElementById("hunger_label");
    var thirst_label = document.getElementById("thirst_label");
    var energy_label = document.getElementById("energy_label");

    // Preventing Spam
    var count = document.getElementById("sleep_count");
    var cnt = parseInt(count.value);
    count.value = cnt+1;
    var warning = document.getElementById("warning");
    warning.style["color"] = "red";
    warning.style["font-size"] = "20px";
    warning.innerHTML = "";
    if (cnt >= 20) {
        warning.innerHTML = "You are too energetic to sleep.";
        update(energy, -1*getRandomInt(3, 9), 0, 100);
        current_energy.style["width"] = current_energy.value + "%";
        energy_label.innerHTML = "Energy: " + current_energy.value + "%";
        update(hunger, -1*getRandomInt(3, 9), 0, 100);
        current_hunger.style["width"] = current_hunger.value + "%";
        hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
        update(thirst, -1*getRandomInt(3, 9), 0, 100);
        current_thirst.style["width"] = current_thirst.value + "%";
        thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";
    } else {
        // Updating Health, Food, Thirst, Energy
        update(energy, getRandomInt(50, 101), 0, 100);
        current_energy.style["width"] = current_energy.value + "%";
        energy_label.innerHTML = "Energy: " + current_energy.value + "%";
        update(hunger, -1*getRandomInt(3, 9), 0, 100);
        current_hunger.style["width"] = current_hunger.value + "%";
        hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
        update(thirst, -1*getRandomInt(3, 9), 0, 100);
        current_thirst.style["width"] = current_thirst.value + "%";
        thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";
    }

    // Updating Time
    var time_add = getRandomInt(360, 481);
    var clock = document.getElementById("current_time");
    update(clock, time_add, 0, 1000000000);
    clock.innerHTML = parse_time(parseInt(clock.value));

    // Updating Warnings
    if (energy.value == 0) {
        update(health, -1*getRandomInt(3, 6), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme tiredness.";
    }
    if (hunger.value == 0) {
        update(health, -1*getRandomInt(3, 11), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme hunger."
    }
    if (thirst.value == 0) {
        update(health, -1*getRandomInt(3, 16), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme thirst.";
    }
    if (health.value == 0) {
        start_death(1);
    }

    // Health Regeneration
    if (energy.value > 70 && hunger.value >= 70 && thirst.value >= 70) {
        update(health, getRandomInt(10, 21), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You have gained health from being satiated.";
    }

    // Updating Response Count
    var response = document.getElementById("response");
    response.style["color"] = "#17D4FE";
    if (cnt < 20) {
        response.innerHTML = msgs[getRandomInt(0, msgs.length)];
    } else {
        response.innerHTML = "";
    }
}

function panic_update(msgs) {
    // Variables
    var health = document.getElementById("current_health");
    var hunger = document.getElementById("current_hunger");
    var thirst = document.getElementById("current_thirst");
    var energy = document.getElementById("current_energy");
    var health_label = document.getElementById("health_label");
    var hunger_label = document.getElementById("hunger_label");
    var thirst_label = document.getElementById("thirst_label");
    var energy_label = document.getElementById("energy_label");

    // Preventing Spam
    var count = document.getElementById("panic_count");
    var cnt = parseInt(count.value);
    count.value = cnt+1;
    var warning = document.getElementById("warning");
    warning.style["color"] = "red";
    warning.style["font-size"] = "20px";
    warning.innerHTML = "";

    // Updating Health, Food, Thirst, Energy
    update(energy, -1*getRandomInt(8, 16), 0, 100);
    current_energy.style["width"] = current_energy.value + "%";
    energy_label.innerHTML = "Energy: " + current_energy.value + "%";
    update(hunger, -1*getRandomInt(8, 16), 0, 100);
    current_hunger.style["width"] = current_hunger.value + "%";
    hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
    update(thirst, -1*getRandomInt(8, 16), 0, 100);
    current_thirst.style["width"] = current_thirst.value + "%";
    thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";


    // Updating Time
    var time_add = getRandomInt(30, 61);
    var clock = document.getElementById("current_time");
    update(clock, time_add, 0, 1000000000);
    clock.innerHTML = parse_time(parseInt(clock.value));

    // Updating Warnings
    if (energy.value == 0) {
        update(health, -1*getRandomInt(3, 6), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme tiredness.";
    }
    if (hunger.value == 0) {
        update(health, -1*getRandomInt(3, 11), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme hunger."
    }
    if (thirst.value == 0) {
        update(health, -1*getRandomInt(3, 16), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You lost health from extreme thirst.";
    }
    if (health.value == 0) {
        start_death(1);
    }

    // Health Regeneration
    if (energy.value > 70 && hunger.value >= 70 && thirst.value >= 70) {
        update(health, getRandomInt(10, 21), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        health_label.innerHTML = "Health: " + current_health.value + "%";
        warning.innerHTML += "You have gained health from being satiated.";
    }

    // Updating Response Count
    var response = document.getElementById("response");
    response.style["color"] = "#17D4FE";
    response.innerHTML = msgs[getRandomInt(0, msgs.length)];
}
