function start_ending() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../img/ending.jpg)";

    // Setting Up Variables
    var speed = 50;
    var delay = 25*speed;
    var header = document.getElementById("header");
    var story = document.getElementById("story");
    var ending = document.getElementById("ending");
    var end = document.getElementById("end");

    // First Message
    header.style["width"] = "250px";
    var text1 = "Ending";
    setTimeout(function(){typeEffect(header, speed, text1, "");}, delay);
    delay += text1.length * speed + 25 * speed;
    setTimeout(function(){header.innerHTML = "";}, delay);

    // Story Board
    var text2 = "You finally enter the eye of the storm and see a large ship floating a bit above the ground with a vast number of particles streaming into it. Suddenly, a large beam shoots from the ship, and you are transported inside to a control room. You walk around the grand control room, and suddenly, a hologram starts up. After observing it for a bit, you finally grasped what happened. You are an interstellar miner who goes to resource rich planets, absorbs all the resources present, and delivers it to the home planet. The purple particles were a tool for collecting all the resources of a planet, and you are the one who released them. You are the one who caused all of the suffering you have seen. You are merely doing this for your survival under a slave contract, but even still, how could you cause all of this destruction to happen? Now with your memory back, you have two options: make up for your actions by saving the planet and wrecking the ship or disregard the suffering once more and let the planet be destroyed. What do you prefer to do?";
    setTimeout(function(){typeEffect(story, speed/16, text2, "");}, delay);
    delay += text2.length * speed/16 + 25 * speed;

    // Fading In Button
    show_tags(["choice1", "choice2", "row0"]);
    var choice1 = document.getElementById("choice1");
    choice1.style["width"] = "250px";
    choice1.style["height"] = "75px";
    choice1.style["font-size"] = "20px";
    var choice2 = document.getElementById("choice2");
    choice2.style["width"] = "250px";
    choice2.style["height"] = "75px";
    choice2.style["font-size"] = "20px";
    var row0 = document.getElementById("row0");
    setTimeout(function(){fadeIn(row0);}, delay);
}

function decision_ending(mode) {
    // Removing Buttons
    hide_tags(["choice1", "choice2", "row0"])

    // Setting Variables
    var speed = 50;
    var delay = 25*speed;
    var ending = document.getElementById("ending");
    var end = document.getElementById("end");

    // Adding Decision
    var text1, text2;
    if (mode == 0) {
        text1 = "You have decided to make up for your actions by destroying the ship. Despite knowing this would make you trapped on this planet forever, you continue with your choice. You press the \"self-destruct\" button and quickly teleport far away from the ship. You look back to witness an explosion occur, and soon afterward, the purple particles begin to spread out and return the life force that they had collected. Naturally, the beings that were already dead didn’t come back, but at least from now on, no one else would be harmed by them. You look satisfied with your work and start to head towards the wilderness that will be your new home.";
        text2 = "You Won";
    } else {
        text1 = "You have decided to disregard the suffering once more and start the journey back home. You signal the home planet and inform them that you have completed your mission. You then go to your living quarters and begin relaxing and trying to ignore the drastic sights you have seen on the planet. Suddenly, a video message pops up in front of you. It's from your boss, so you decide to answer it. He explains that you were getting too close to your release date and that he would have to get rid of you. Before you can respond, a red light flashes, and your head flies from your shoulders. The ship then flies up into orbit, throws out your dead body, and disappears into the depths of space.";
        text2 = "You Lost";
    }
    setTimeout(function(){typeEffect(ending, speed/16, text1, "");}, delay);
    delay += text1.length * speed/16 + 25 * speed;

    // End Result
    end.style["width"] = "250px";
    setTimeout(function(){typeEffect(end, speed, text2, "");}, delay);
    delay += text2.length * speed + 25 * speed;

    // Adding Game Options
    var rescene = document.getElementById("rescene");
    var restart = document.getElementById("restart");
    var row1 = document.getElementById("row1");
    show_tags(["rescene", "restart"]);
    rescene.style["width"] = "350px";
    rescene.style["height"] = "50px";
    rescene.style["font-size"] = "20px";
    restart.style["width"] = "350px";
    restart.style["height"] = "50px";
    restart.style["font-size"] = "20px";
    setTimeout(function(){fadeIn(row1);}, delay);
}
