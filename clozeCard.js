module.exports = ClozeCard;

function ClozeCard(text, cloze){
    this.fullText = text,
    this.cloze = cloze
    this.partial = text.replace(cloze, "... ")
}

var firstPrez = new ClozeCard("george washington was the first president", "george washington");

// console.log(firstPrez.partial);
// console.log(broken.partial);