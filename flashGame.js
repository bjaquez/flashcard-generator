var basic = require("./basicCard.js");
var cloze = require("./clozeCard.js");
var inquirer = require("inquirer");
var count = 0;
var allCards = [
    new basic("What is Simba's Mother's name?", "sarabi"),
    new basic("What is Boo's real name?", "mary"),
    new basic("How many years was Genie stuck in the lamp?", "10,000"),
    new cloze("Magic mirror on the wall who is the fairest of them all?", "mirror"),
    new cloze("Mister I'll make a man out of you", "man"),
    new cloze("A whole new world, a dazzling place I never knew", "dazzling"),
    new basic("What is Pocahontas' racoon's name?", "meeko"),
    new cloze("Let it go, the cold never bothered me anyway", "cold"),
    new basic("What relationship are Elsa and Ana?", "sisters"),
    new cloze("I just can't wait to be king", "king")

]

// console.log(card1.front);

function questions (card){

inquirer.prompt([
    {
        type: "input",
        message: card.partial,
        name: "cardAnswer"
    }

        
]).then(function(answers){
    if(answers.cardAnswer === card.cloze){
        console.log("correct!");
    }
    else{
        console.log("incorrect, the correct answer is " + card.cloze);
    }
    count++;
    if(count < allCards.length){
        questions(allCards[count])
    }
    
});
};

questions(allCards[count]);
// questions(card2);