const READLINE = require("readline-sync");


//Global variables
let inputMsg = ""; 
let gameOn = true;
let end;
let Prompts = ["inspect", "walk to", "inventory", "use", "help", "choose", "get me out!", "path"];



//Room variables
let currentRoom = null; 
let rooms = [];
let items = [];

//Classes for Room, Player, Monster and Npc

class Room {
    constructor(name, description,objects,path,monsters,npc) {
      this.name = name;
      this.description = description;
      this.objects = objects;
      this.path = path;
      this.monsters = monsters;
      this.npc = npc
    }
  }


class Player {
    constructor(name, hp, spd, shoes, items) {
        this.name = name;
        this.hp = hp;
        this.spd = spd;
        this.shoes = shoes;
        this.items = items;
    }
}


class monster {
    constructor(name, hp, type, art) {
        this.name = name;
        this.hp = hp;
        this.type = type;
        this.art = art;
    }
}


class npc {
    constructor(name, words) {
        this.name = name;
        this.words = words;

    }
}

//Making all characters
let player = new Player(); 
player.name = []; 
player.items = [];
player.spd = 5;
let hasShoes = false;


let Monster = new monster();
Monster.name = "Lurker";
Monster.type = [];


let Npc = new npc();
Npc.name = "Nurse";
Npc.words = [];



//Making all rooms
let Room_121 = new Room();
Room_121.name = "Room 121";
Room_121.description = "A dark dirty room with a window and a single bed covered in an unknown substance.";
Room_121.path = ["Inner Hallway"];
Room_121.objects = ["Flashlight"];


let Inner_Hallway = new Room();
Inner_Hallway.name = "Inner Hallway";
Inner_Hallway.description = "A dimly lit hallway filled with the smell of blood. There seems to be something twitching on a stretcher in the corner."
Inner_Hallway.path = ["Room 121", "Room 120", "Room 122"];
Inner_Hallway.objects = ["Bloody Pistol"];



let Room_122 = new Room();
Room_122.name = "Room 122";
Room_122.description = "Something seems off in here"
Room_122.path = [];
Room_122.objects = [];


let Room_120 = new Room();
Room_120.name = "Room 120";
Room_120.description = "This room is mostly empty except for broken glass and a weird looking box"
Room_120.path = ["Inner Hallway", "Main Hallway"];
Room_120.objects = ["Health Pack"];


let Main_Hallway = new Room();
Main_Hallway.name = "Main Hallway";
Main_Hallway.description = "What a surprise its another hallway! Theres a weird looking lady talking to herself a bit of a ways down";
Main_Hallway.path = ["Room 120", "Strange Hole", "Stairs"];
Main_Hallway.objects = ["Needle", "Shotgun"];

let Strange_Hole = new Room();
Strange_Hole.name = "Strange Hole";
Strange_Hole.description = "A dark hole, you can't really see down it";
Strange_Hole.path = [];
Strange_Hole.objects = []


let Stairs = new Room();
Stairs.name = "Stairs";
Stairs.description = "There are two flights of stairs one leading to the upper floor and one leading to the first floor ";
Stairs.path = ["Upper Floor", "First Floor", "Main Hallway"];
Stairs.objects = [];


let Upper_Floor = new Room();
Upper_Floor.name = "Upper Floor";
Upper_Floor.description = [];
Upper_Floor.path = [];
Upper_Floor.objects = [];

let First_Floor = new Room();
First_Floor.name = "First Floor";
First_Floor.description = "Yay a even bigger room. I see the exit ahead of me, I just have to reach it!"
First_Floor.path = ["Stairs", "True Exit"];
First_Floor.objects = [];


rooms.push(Room_121,Inner_Hallway,Room_120,Room_122,Main_Hallway,Strange_Hole,Stairs,Upper_Floor,First_Floor);






// **************GAME START***************
function start() {
  console.log("\n🎚 Wake up, your terrifying adventure starts now.\n");
  let playerName = READLINE.question("State your name: ");
  player.name = playerName;
  console.log(`\n🎚 Good luck, ${player.name}`);
  // Begin at the bedroom
  currentRoom = Room_121;

  console.log(`\n🎚 You wake up in a random hospital bed. 
  You feel tired and you don't know what happened,
  You check the sign by the door and see that you are in Room 121 of the hospital. 
  You don't know how you got here but you want to get out`);

  // Your game loop
  while (gameOn) {
    checkAnswer(promptUser());
  }
  console.log("\n🎚 Too scared to continue?");
}

function promptUser() {
  let question = READLINE.question("\n🎚 Choose your fate: ");
  return question;
}

function checkAnswer(input) {
  inputMsg = input;

  // GO
  if (inputMsg.includes("go")) {
    let msgArray = inputMsg.split(" ");
    let pathRoom = msgArray.slice(1).join(" ");

    if (currentRoom.path.includes(pathRoom)) {
      for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].name.toLowerCase() == pathRoom.toLowerCase()) {
          currentRoom = rooms[i];
          console.log(`\n🎚 You are now in ${currentRoom.name}`);
          break;
        }
      }
      if (pathRoom == "Room 122"){
        console.log(`\n🎚 You open the door and instantly feel somethings wrong. 
  You slowly walk in and hear creaking noises all across the room. 
  Suddenly four mutant like creatures jump out at you and rip your body apart limb from limb leaving only bones 
  (☠YOU ARE DEAD☠)`);
        gameOn = false;
    }
    
    else if (pathRoom == "Upper Floor"){
        console.log(`\n🎚 As you started heading up the stairs you start to feel lightheaded and fall. 
  You hit your head and crack your skull open 
  (☠YOU ARE DEAD☠)`);
        gameOn = false;

    }
    else if (pathRoom == "Strange Hole"){
      console.log(`\n🎚 You jump down the hole thinking there might be something down there. 
  You fall for what feels like hours and after a while you realize that you probably wont make it to the bottom 
  (☠YOU ARE DEAD☠)`);
      gameOn = false;
    }
    } else {
      console.log("\n🎚 Unknown entities are stopping you from inputting this command");
    }

    // LOOK
  } else if (inputMsg.includes("search")) {
    console.log("\n🎚 Objects in the room:");
    for (let i = 0; i < currentRoom.objects.length; i++) {
      console.log(currentRoom.objects[i]);
    }
    console.log("\n🎚 Available paths:");
    for (let i = 0; i < currentRoom.path.length; i++) {
      console.log(currentRoom.path[i]);
    }

    // TAKE
  } else if (inputMsg.includes("take")) {
    let itemsArray = inputMsg.split(" ");
    let item = itemsArray[1];

    if (currentRoom.objects.includes(item)) {
      
      player.items.push(item);
      let indexToRemove = currentRoom.objects.indexOf(item);
      currentRoom.objects.splice(indexToRemove, 1);
      console.log(`\n🎚 You have taken the ${item}.`);
    } else {
      console.log("\n🎚 Item not found.");
    }

    // Name
  } else if (inputMsg.includes("look")) {
    console.log(`${currentRoom.name}: ${currentRoom.description}`);
  } else if (inputMsg.includes("help")) {
    console.log(`\n🎚These are your commands:
   look -> Shows what room you are in and what it looks like
   search -> Shows other paths and objects in room
   go -> Travel to the next location
   take -> put object in Inventory
   inventory -> shows all objects in your inventory
   use -> use object
   get me out! -> be a baby and leave the game
    `);
  } else if (inputMsg === "get me out!") {
    gameOn = false;
  } 
  
    //Inventory
   else if (inputMsg.includes("inventory")){
    for (let i = 0; i < player.items.length; i++)
    console.log(player.items[i]);
  }

    //Use
  else if (inputMsg.includes("Use")){
    console.log(`You used ${player.items[null]}`)
  }
  else {
    console.log(`${inputMsg} is invalid`);
  }

}

start();