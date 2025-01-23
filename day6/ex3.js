function parent()
{
    function child1()
    {
        console.log("Iam child1")
        function child1_1()
        {
            console.log("iam child3")
        }
        return child1_1
    }
    function child2()
    {
        console.log("Iam child2")
    }
    return [child1,child2]
}
parent()[0]()()
parent()[1]()