function parent()
{
    function child1()
    {
        console.log("Iam child1")
    }
    function child2()
    {
        console.log("Iam child2")
    }
    return [child1,child2]
}
parent()[0]()
parent()[1]()