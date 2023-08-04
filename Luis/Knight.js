
//This is the starter file for CYOA
//Use it to develop your skills as needed
const READLINE = require("readline-sync");

let inputMsg = ""; //an empty string to hold our user inputs
let gameIsOn = true;//the game loop will depend on this being true
let ifFighting = false;//checking when the player is fighting
let currentRoom = null;//to keep track of where we are
everyRoom = [];//push any new rooms you create to this array

//******** DEFINE CLASSES *******************
class Player {
    constructor(name, items, health, Geo, attack, block, healPoints) {
        this.name = name;
        this.health = health;
        this.items = items;
        this.Geo = Geo;
        this.attack = attack;
        this.block = block;
        this.healPoints = healPoints;
    }
}
class Enemy {
    constructor(name, health, attack, Geo, block) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.Geo = Geo;
        this.block = block;

    }
}
class Room {
    constructor(name, description, objects, path) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.path = path;
    }
}
// Create a class for Room and for Player

//**********INSTANTIATE OBJECTS ***************
// Create your player
let player = new Player();
player.name = null;
player.items = [];
player.health = 100;
player.attack = 24;
player.Geo = 300;
player.block = 25;
player.healPoints = 40;

//Create some enemies
let Crawlid = new Enemy("Crawlid", 24, Math.floor(Math.random() * 6) + 4, Math.floor(Math.random() * 10) + 20, Math.floor(Math.random() * 10) + 2);
let crystalHunter = new Enemy("Crystal Hunter", 12, Math.floor(Math.random() * 4) + 12, 30);
let crystalGuardian = new Enemy("Crystal Guardian", 100, Math.floor(Math.random() * 10) + 10, 5000, 5);


// Create some rooms
let dirtMouth = new Room();
dirtMouth.name = "Dirtmouth";
dirtMouth.description = `
The last city of Hollownest
`;
dirtMouth.objects = [];
dirtMouth.path = ["Iselda's shop", "Crystal mountain"];

let crystalMountain = new Room();
crystalMountain.name = "Crystal Mountain";
crystalMountain.description = `
A place of pink crystals that look cool but are worth nothing and you see a sign that says to beware the "Crystal Guardian" whatever that guy is. 
`;
crystalMountain.objects = [];
crystalMountain.path = ["Dark room", "Dirtmouth"];

let shop = new Room();
shop.name = "Iselda's Shop";
shop.description = `
A place of trinkets and doodads that are all every different from each other
 like one of them was a pair of glasses that looked gold and a brown and black design to them with the name "ASIM" written on it 
 `;
shop.objects = ["Lantern"];
shop.path = ["Dirtmouth"];

// Crystal Guardian boss fight room
let bossRoom = new Room();
bossRoom.name = "Dark room";
bossRoom.description = `
A dark room with no lights
`;
bossRoom.objects = [];
bossRoom.path = ["Crystal mountain"];



//add the rooms to the rooms array
everyRoom.push(dirtMouth, crystalMountain, shop, bossRoom);
//************* START GAME *************************
function start() {
    //this is for testing stuff
    console.log();


    // saves the player name
    console.log("Welcome to The Demo!!");
    console.log(" ");
    console.log(":3");
    console.log(" ");

    let userName = READLINE.question(`After a long day of working at school and code next you go to get a shut eye for an hour or two. Waking up and not realizing yourself, 
you wake up confused of your surroundings you start to search around and find a sword and you pick it up because its "cool". You find yourself trying to remember how you got there but then
you can't even remember your name, your home, you don't know who you are, how did you get there,
when did you get there its all gone but your going to have to give your self a name to tell people who you are. 
Which was: `);
    player.name = userName;
    console.log(" ");
    console.log(`Ok ${player.name} was the name you came up with but in the distance you see a village with only a few lanterns and one person outside, An old man looking up at the sky.
There is also a sign "Dirtmouth the last city of Hollownest" hm interesting. (also type "help to get more commands") `);
    //begin at the bedroom
    currentRoom = dirtMouth;
    // try to theme your game to your setting

    // your game loop
    while (gameIsOn) {
        checkAnswer(promptUser());
    }
    console.log("Thank you for playing");
}
start();

function promptUser() {
    let input = READLINE.question("What do you want to do? ");
    return input;
}

function checkAnswer(input) {

    inputMsg = input;

    //GO
    if (inputMsg.includes("go")) {
        let pathArray = inputMsg.split(" ");
        let pathRoom = pathArray[1];
        let promptMsg = pathArray.splice(1).join(" ");
        if (currentRoom.path.includes(promptMsg)) {
            for (let i = 0; i < everyRoom.length; i++) {

                if (everyRoom[i].name.toLowerCase() == promptMsg.toLowerCase()) {
                    if (promptMsg == "Dark room" && !player.items.includes("Lantern")) {
                        console.log(" ");
                        console.log(`its really dark so you should probably look for a lantern`);
                    }
                    else {
                        currentRoom = everyRoom[i];
                        console.log(" ");
                        console.log("You're in a new room");
                    }

                }
            }
        } else {
            console.log("you can't go there. ");
        }

        //#region The random Crawlid fights in Dirtmouth

        //random enemies encounters when going to dirtmouth
        // if you want multiple enemies in the same place have randomChance == 2 instant of 1 && currentRoom == dirtMouth)

        let randomChance = Math.floor(Math.random() * 9);
        if ((randomChance >= 1 || randomChance <= 6) && promptMsg == "Dirtmouth") {
            console.log(`\nA Wild Crawlid Appears

The Crawlid's health: ${Crawlid.health}
The Crawlid's attack ranges from : 4 - 14
\n`);
            let userFight = READLINE.question("Do you wish to fight it? (y/n) ");
            if (userFight == "y") {
                while (Crawlid.health > 0 && player.health > 0) { //this loops until the player or the enemy dies
                    let enemyChoose = Math.floor(Math.random() * 2);
                    if (enemyChoose == 1) {
                        console.log(" ");
                        console.log("Crawlid is going to attack.");
                        console.log(" ");
                    }
                    else if (enemyChoose == 0) {
                        console.log(" ");
                        console.log("Crawlid is going to block");
                        console.log(" ");
                    }
                    let userChoose = READLINE.question("You have the first move go you want to attack, block or heal? ");

                    //#region if enemy attacked and player attacks
                    if (userChoose.includes("attack") && enemyChoose == 1) {
                        console.log(`\nCrawlid's health was: ${Crawlid.health}
Your attack was: ${player.attack}
\n`);
                        Crawlid.health = Crawlid.health - player.attack;
                        console.log(`\nCrawlid's health now: ${Crawlid.health}
                        
but the Crawlid fought back and did ${Crawlid.attack} to you\n`);
                        player.health = player.health - Crawlid.attack;
                        console.log(`your health is now: ${player.health}`);
                    }
                    //#endregion
                    //#region if enemy blocked and player attacks
                    else if (userChoose.includes("attack") && enemyChoose == 0) {
                        console.log(`\n Crawlid's health was: ${Crawlid.health}
Your attack was: ${player.attack}
but the Crawlid blocked for: ${Crawlid.block}
\n`);
                        // make sure that the enemy dose not heal because its blocking for a higher number than the player attack
                        if (Crawlid.block > player.attack) {
                            Crawlid.block = player.attack;
                        }

                        let attackValue = player.attack - Crawlid.block;
                        Crawlid.health = Crawlid.health - attackValue;

                        console.log(`\nCrawlid's health now: ${Crawlid.health}`);
                    }
                    //#endregion
                    //#region if enemy attacked and player blocks
                    else if (userChoose.includes("block") && enemyChoose == 1) {
                        console.log(`\n Crawlid's attack was: ${Crawlid.attack}
Your block was: ${player.block}
                        \n`);

                        let attackValue = Crawlid.attack - player.block;
                        if (attackValue < 0) {
                            attackValue = 0;
                        }
                        console.log(`Crawlid's attack: ${attackValue}`);
                        player.health = player.health - attackValue;
                    }
                    //#endregion
                    //#region if enemy blocked and player blocks
                    else if (userChoose.includes("block") && enemyChoose == 0) {
                        console.log(`Nothing happened because both of you blocked`);
                    }
                    else {
                        console.log(`${userChoose} is invalid.`);
                    }
                }
                //#endregion
                //#region if enemy blocked and player healed
                // else if (userChoose.includes("heal") && enemyChoose == 0) {
                //     console.log("");
                //     if (player.health == 100) {
                //         console.log("You cant heal because your already at full health but the Crawlid block so nothing happened");
                //     }
                //     else if (player.health + player.healPoints >= 100) {
                //         player.health == 100;
                //         console.log(`Your health points are full now.`);
                //     }
                //     else {
                //         player.health = player.health + player.healPoints
                //         console.log(`Crawlid blocked but you healed for ${player.healPoints}
                //     so your total health is: ${player.health}`);
                //     }

                // }
                // //#endregion
                // //#region if enemy attacked and player heals
                // else if (userChoose.includes("heal") && enemyChoose == 1) {
                //     let healValue = player.healPoints - Crawlid.attack;

                //     if (healValue < 0) {
                //         healValue = 0;
                //     }
                //     if (player.health == 100) {
                //         console.log(`You cant heal because your already are at full health so the Crawlid attacked for ${Crawlid.attack}`);
                //         console.log("");
                //         // console.log(`you healed for 0 but you took ${Crawlid.attack}`);
                //         console.log(`now you health is ${player.health}`);
                //     }
                //     else if (player.health + player.healPoints >= 100) {
                //         player.health == 100;
                //         player.health = player.health - Crawlid.attack;
                //         console.log(`Your health points were full but the Crawlid attacked for ${Crawlid.attack}.`);
                //         console.log("")
                //         console.log(`You health points are ${player.health}`)
                //     }

                //     else {

                //         console.log("");
                //         console.log(`you healed for ${player.healPoints} but you took ${Crawlid.attack} damage for a total of ${healValue} points healed`);
                //         player.health = healValue + player.health;
                //         console.log(`now your health is ${player.health}`);

                //     }
                // }
                // else {
                //     console.log(`${userChoose} is invalid.`);}

                //#endregion
            } else if (userFight == "n") {
                console.log("You Ran away");
            }

            if (player.health <= 0) {
                console.log("You were defeated by a bug, A BUG!!");
                gameIsOn = false;
            }
            if (Crawlid.health <= 0) {
                console.log(" ");
                console.log("You were victorious, YIPPPPPPPPPPPEEEEEEEEEEE!!!!!");
                console.log(`You also earned ${Crawlid.Geo} Geo`);
                Crawlid.health = 24;
                player.Geo += Crawlid.Geo;

            }
        }

       
    }

    //#region The Boss Fight
    else if (currentRoom == bossRoom && player.items.includes("Lantern")) {
        console.log(`you enter the dark room and all of a sudden you hear a loud screech like metal being scaped on concrete 
        "eeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccchhhhhhhhhhhhhhhhhhhhhh"
        then you see it the Crystal Guardian`);
        console.log(`\nThe Crystal Guardian Appears\n
    The Crystal Guardian's health: ${crystalGuardian.health}
    The Crystal Guardian's attack ranges from : 10 - 20\n`);
        let userFight = READLINE.question("Do you want to fight the Crystal Guardian (y/n beware this is your last chance to explore the world) ");
        if (userFight == "y") {

            while (crystalGuardian.health > 0 && player.health > 0) { //this loops until the player or the enemy dies
                let enemyChoose = Math.floor(Math.random() * 2);
                if (enemyChoose == 1) {
                    console.log(" ");
                    console.log("Crystal Guardian is going to attack.");
                    console.log(" ");
                }
                else if (enemyChoose == 0) {
                    console.log(" ");
                    console.log("Crystal Guardian is going to block");
                    console.log(" ");
                }
                let userChoose = READLINE.question("You have the first move go you want to attack or block? ");

                //#region if enemy attacked and player attacks
                if (userChoose.includes("attack") && enemyChoose == 1) {
                    console.log(`\n CCrystal Guardian's health was: ${crystalGuardian.health}
        Your attack was: ${player.attack}
        \n`);
                    crystalGuardian.health = crystalGuardian.health - player.attack;
                    if(crystalGuardian.health < 0 ){
                        crystalGuardian.health = 0;
                    }

                    console.log(`\nCrystal Guardian's health now: ${crystalGuardian.health}
                                
        but the Crystal Guardian fought back and did ${crystalGuardian.attack} to you\n`);
                    player.health = player.health - crystalGuardian.attack;
                    console.log(`your health is now: ${player.health}`);
                }
                //#endregion
                //#region if enemy blocked and player attacks
                else if (userChoose.includes("attack") && enemyChoose == 0) {
                    console.log(`\n Crystal Guardian's health was: ${crystalGuardian.health}
        Your attack was: ${player.attack}
        but the Crystal Guardian blocked for: ${crystalGuardian.block}
        \n`);
                    // make sure that the enemy dose not heal because its blocking for a higher number than the player attack
                    if (crystalGuardian.block > player.attack) {
                        crystalGuardian.block = player.attack;
                    }

                    let attackValue = player.attack - crystalGuardian.block;
                    crystalGuardian.health = crystalGuardian.health - attackValue;
                    if(crystalGuardian.health < 0 ){
                        crystalGuardian.health = 0;
                    }

                    console.log(`\nCrystal Guardian's health now: ${crystalGuardian.health}`);
                }
                //#endregion
                //#region if enemy attacked and player blocks
                else if (userChoose.includes("block") && enemyChoose == 1) {
                    console.log(`\n Crystal Guardian's attack was: ${crystalGuardian.attack}
        Your block was: ${player.block}
                                \n`);

                    let attackValue = crystalGuardian.attack - player.block;
                    if (attackValue < 0) {
                        attackValue = 0;
                    }
                    console.log(`Crystal Guardian's attack: ${attackValue}`);
                    player.health = player.health - attackValue;
                }
                //#endregion
                //#region if enemy blocked and player blocks
                else if (userChoose.includes("block") && enemyChoose == 0) {
                    console.log(`Nothing happened because both of you blocked`);
                }
                else {
                    console.log(`${userChoose} is invalid.`);
                }
                //#endregion
            }
            if (player.health <= 0) {
                console.log("You were defected by the Crystal Guardian which is understandable .");
            }
            //#region The ending text DON'T READ
            else if (crystalGuardian.health <= 0) {
                console.log("You were victorious");
                console.log(" ");
                console.log(`You stopped the mad Crystal Guardian from terrorizing Hollownest again, then all of a sudden you feel strange as you slowly go back to the normal world but you wonder who put you there and why did it put you in a random part of the world.`);
                console.log(`
                Thanks for playing, and thank you Sadeem for teaching us like 90% of this stuff and keeping us on track for anything we (The code next students) do.
                
                Thank you to Sarahi too for trying anytime to help us in the Javascript challenges and making the mornings better by bring the fun games that wake us up
                
                Thank you too Asim for making the background meetings with other people to get people to join code next and talking to the higher ups about some of our decisions 
                
                Same with you Nondo thank you for making the background meetings to try promote code next and get more people in so google can see that this program helps people and people want this to continue and also thank you for showing the drones :)
                
                Also last but not least, thank you Naomi for keeping the diet Coke in the fridge because some days it was a life saver and thank you for keeping the amazing field trips together and thank you for the t-shirt, long sleave, backpack, and tye dye shirt.
                
                Just thank all the people at Code Next for there support in helping us learn code and maybe even become a part of Google in the future.
                    `);
                //#endregion
                gameIsOn = false;
            }

           
        }
        else if (userFight == "n") {
            console.log("You Ran away from boss");
        }


    }
    //#endregion

    else if (inputMsg.includes("look")) {
        for (let i = 0; i < currentRoom.objects.length; i++) {
            console.log(` `);
            console.log(`Objects:`, currentRoom.objects[i]);
        }
        for (let i = 0; i < currentRoom.path.length; i++) {
            console.log(` `);
            console.log(`Paths:`, currentRoom.path[i]);
            console.log(` `);
        }

        currentRoom.objects;

    //TAKE
    } else if (inputMsg.includes("take")) {
        let itemsArray = inputMsg.split(" ");
        // let item = itemsArray[1];
        let item = itemsArray.splice(1).join(" ");
        if (currentRoom.objects.includes(item)) {

            if (inputMsg.includes("Lantern")) {
                if (player.Geo >= 20) {
                    pushItem("Lantern");
                    player.Geo = player.Geo - 20;
                    console.log("you have a Lantern");
                }
                else { console.log("You don't have the funds, you need 20 geo."); }
            }
            if (inputMsg.includes("")) {

            }
            else {
                pushItem(item);
            }

            function pushItem(item) {
                player.items.push(item);
                let indexToRemove = currentRoom.objects.indexOf(item);
                currentRoom.objects.splice(indexToRemove, 1);
            }
        }
        else {
            console.log("item not found");
        }
    //Name
    } else if (inputMsg.includes("name")) {
        console.log(`The current room you are in is: ${currentRoom.name}`);
        console.log(currentRoom.description);

    } else if (inputMsg.includes("help")) {
        console.log(`"go" -> is go to another room.                                        `);
        console.log(`"look" -> is to look around the room and see paths                      `);
        console.log(`"take" -> is to take an item`);
        console.log(`"exit" -> is to exit the game (duh)`);
        console.log(`"name" -> is to name the place your in and the description of the place.`);
        console.log(`"inventory - > is to see your inventory and your Geo(which is basically money)"`);


    } else if (inputMsg.includes("exit")) {
        gameIsOn = false;
    } else if (inputMsg.includes("inventory")) {
        console.log(`You have: ${player.Geo} Geo`);
        console.log(`Your items are: ${player.items}`);
    }
    else if (inputMsg.includes("use")) {
        let itemsArray = inputMsg.split(" ");
        let item = itemsArray.splice(1).join(" ");
        useItem(item);
        if (player.items.includes(item)) {
            console.log(`You used ${item}`);
        }
        else {
            console.log("You don't have that item.");
        }
    }


    else if (inputMsg.includes("Code Next")) {
        console.log("You found a secret have a cookie");
        player.items.push("Cookie");
    }

    else {
        console.log(`${inputMsg} is invalid`);
    }

}
//#endregion     