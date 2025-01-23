var a=10
let b=20
function parent(){
    var a="hello"
    let b="hii"
    console.log(a)
    console.log(b)
    console.log(this.a) // 10 is printed as it in global scope
    console.log(this.b) //undefined, we cannot access local scope using this keyword
}
parent()
