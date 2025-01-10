let operation =(a,b,task) =>{

    console.log(task(a,b))
}   
operation(a=Number(prompt("Enter a for addition")),b=Number(prompt("Enter b for addition")),(a,b)=>{
    return a+b
}) 
operation(a=Number(prompt("Enter a for subraction")),b=Number(prompt("Enter b for subraction")),(a,b)=>{
    return a-b
})
operation(a=Number(prompt("Enter a for multiplication")),b=Number(prompt("Enter b for multiplication")),(a,b)=>{
    return a*b
})
