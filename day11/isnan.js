function main(m,n)
{
    new Promise((resolve,reject) => {
        setTimeout(() => {
            if(isNaN(m) || isNaN(n))
            {
                return reject()
            }
            for(let i=m;i<=n;i++)
                {
                    console.log(i)
                }
                return resolve()   
        },5000)
    })
    .then(() => console.log("promise is resolved"))
    .catch(() => console.log("error occures"))
}
main(1,"10a")