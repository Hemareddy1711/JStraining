let obj={
    name:"Karan",
    id:1,
    designation:"developer"
}
console.log(obj)
let obj1=JSON.stringify(obj)
console.log(obj1)
let obj2=JSON.parse(obj1)
console.log(obj2)

windows.fetch("data.json")
.then((data))=>data.json(())
.then((res))=>{
    console.log(res)
    console.log(res[0])
    console.log(res[1])
    console.log(res[0].name)


}