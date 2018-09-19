module.exports = BasicCard 

function BasicCard(front, back) {
    this.partial = front,
    this.cloze = back
}

var firstPrez = new BasicCard("who was the first prez", "gw");

// console.log(firstPrez.front);
// console.log(firstPrez.back);