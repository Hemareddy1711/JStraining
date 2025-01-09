var a=10 
console.log(a)
//--Let-local scope/script scope (by default let, const)
let b=20
console.log(b)
//--Const and let- local/script scope
const c=30
console.log(c)
//block scope
{
    var m=20 // identifier m is declared by variable m so it comes undrr global scope
    console.log(m);

    let n="hello"  // only n & o comes under block 
    console.log(n)

    const o=30; 
    console.log(o);
}
console.log("stop")