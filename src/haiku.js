// rmmmt

export default class Haiku {
constructor(poem){
    this.poem = poem;
    this.lines = 1;
    
  }


countLines(poem) {
let stringPoem = poem.split(" ");
stringPoem.forEach(word => {
  if (word === "\n"){
    this.lines +=1;
}
})
}
}