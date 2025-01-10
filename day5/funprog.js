function main(task) // task is call back function which accepts two parameters(in this ex)here and main is the higher order function
{// we cam call the main function for multiple times
    console.log(task(10,10))
}
main(function(a,b){
    return a+b
})
main(function(a,b){
    return a-b
})
main(function(a,b){
    return a*b
})
