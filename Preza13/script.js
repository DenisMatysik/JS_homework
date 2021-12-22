// Preza13

//Task
function* generator(from,to){
    for (let i = from; i <= to; i++)  {
        if (i%2==0){
            yield i;
        }}}
let gen = generator(0,12)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen)
