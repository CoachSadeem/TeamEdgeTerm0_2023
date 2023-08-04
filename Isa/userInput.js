
const READLINE = require("readline-sync"); //needed to get input

console.log("\nWelcome to the Yu-Gi-Oh Vrains random generator");
console.log("First pick a number between 1-20. This will decide what character you are.");
console.log("Then I'll need you to pick a number between 1-20 to decide what your ACE card is!");

//Gets values for generator
let firstNumber = READLINE.question("\nChoose your first Number ");
let secondNumber = READLINE.question("Choose your second Number ");
console.log();

// creates values for generator
let Number_1 ="";
let Number_2 ="";
//
if (firstNumber == "1"){
    Number_1 = "Blue Maiden/Sky";
}
else if (firstNumber == "2"){
    Number_1 = "Bohman";
}
else if (firstNumber == "3"){
    Number_1 = "A.I./Dark Ignis";
}
else if (firstNumber == "4"){
    Number_1 = "Lighning/Light Ignis";
}
else if (firstNumber == "5"){
    Number_1 = "Akira";
}
else if (firstNumber == "6"){
    Number_1 = "Ghost Gal/Emily";
}
else if (firstNumber == "7"){
    Number_1 = "Earth/Earth Ignis";
}
else if (firstNumber == "8"){
    Number_1 = "The Gore/George Gore";
}
else if (firstNumber == "9"){
    Number_1 = "The Shepherd";
}
else if (firstNumber == "10"){
    Number_1 = "Soul Burner/Theodore Hamilton";
}
else if (firstNumber == "11"){
    Number_1 = "Playmaker/Yusaku Fujiki";
}
else if (firstNumber == "12"){
    Number_1 = "Aqua/Water Ignis";
}
else if (firstNumber == "13"){
    Number_1 = "Varis";
}
else if (firstNumber == "14"){
    Number_1 = "Specter";
}
else if (firstNumber == "15"){
    Number_1 = "Flame/Fire Ignis";
}
else if (firstNumber == "16"){
    Number_1 = "Kolter";
}
else if (firstNumber == "17"){
    Number_1 = "Windy";
}
else if (firstNumber == "18"){
    Number_1 = "Joey Wheeler";
}
else if (firstNumber == "19"){
    Number_1 = "Seto Kaiba";
}
else if (firstNumber == "20"){
    Number_1 = "Yusei Fudo";
}
else if (firstNumber == "21"){
    Number_1 = "Yuma Tsukumo";
}
else if (firstNumber == "22"){
    Number_1 = "Reginald Kastle";
}
else if (firstNumber == "23"){
    Number_1 = "Kite Tenjo";
}
else if (firstNumber == "24"){
    Number_1 = "Yuya Sakaki";
}
else if (firstNumber == "25"){
    Number_1 = "Yuto";
}
else if (firstNumber == "26"){
    Number_1 = "Yugo";
}
else if (firstNumber == "27"){
    Number_1 = "Yuri";
}
else if (firstNumber == "Jaiden Yuki"){
    Number_1 = "Jaiden Yuki";
}
else {
    Number_1 = "Yugi Moto";
}

//Second Number Generator

if (secondNumber == "1"){
    Number_2 = "Trickstar Holly Angel";
}
else if (secondNumber == "2"){
    Number_2 = "Chimera Hydradrive Dragrid";
}
else if (secondNumber == "3"){
    Number_2 = "Dark Tempelar @Ignister";
}
else if (secondNumber == "4"){
    Number_2 = "Armatos Legio Magnus Dux";
}
else if (secondNumber == "5"){
    Number_2 = "Tindangle Acute Cerberus";
}
else if (secondNumber == "6"){
    Number_2 = "Altergeist Memorygant";
}
else if (secondNumber == "7"){
    Number_2 = "G Golem Invalid Dolmen";
}
else if (secondNumber == "8"){
    Number_2 = "Gouki Master Ogre";
}
else if (secondNumber == "9"){
    Number_2 = "Battledrone General";
}
else if (secondNumber == "10"){
    Number_2 = "Salamangreat Heatleo";
}
else if (secondNumber == "11"){
    Number_2 = "Decode Talker";
}
else if (secondNumber == "12"){
    Number_2 = "Marincess Crystal Heart";
}
else if (secondNumber == "13"){
    Number_2 = "Borreload Dragon";
}
else if (secondNumber == "14"){
    Number_2 = "Sunavalon Dryatrentiay";
}
else if (secondNumber == "15"){
    Number_2 = "Fire Pheonix @Ignister";
}
else if (secondNumber == "16"){
    Number_2 = "Codebreaker Virus Berserker";
}
else if (secondNumber == "17"){
    Number_2 = "Stormrider Bahamut Bomber";
}
else if (secondNumber == "18"){
    Number_2 = "Red Eyes B. Dragon";
}
else if (secondNumber == "19"){
    Number_2 = "Blue Eyes White Dragon";
}
else if (secondNumber == "20"){
    Number_2 = "Stardust Dragon";
}
else if( secondNumber == "21"){
    Number_2 = "Number 39: Utopia"
}
else if( secondNumber == "22"){
    Number_2 = "Number 32: Shark Drake"
}
else if( secondNumber == "23"){
    Number_2 = "Number 40: Galaxy Eyes Prime Photon Dragon"
}
else if( secondNumber == "24"){
    Number_2 = "Odd-Eyes Pendulum Dragon"
}
else if( secondNumber == "25"){
    Number_2 = "Dark Rebellion XYZ Dragon"
}
else if( secondNumber == "26"){
    Number_2 = "Clear Wing Synchro Dragon"
}
else if( secondNumber == "27"){
    Number_2 = "Starving Venom Fusion Dragon"
}
else if (secondNumber == "Get your game on"){
    Number_2 = "Elemental Hero Neos";
}
else {
    Number_2 = "The Dark Magician";
}
console.log(`Congrats your character is: ${Number_1} and your ACE monster is ${Number_2}!`)
