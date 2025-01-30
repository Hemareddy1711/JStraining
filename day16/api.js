let demo=async() =>{
   let data= await window.fetch("country.json")
   console.log(data)
   let res=await data.json()
   console.log(res)
   res.map((x) => {
    console.log(x.country)
    document.getElementById("select")
    console.log(select)
    select.innerHTML+=`<Option value=${x.country}>${x.country}</Option>`
    let demo1=document.getElementById("demo1")
    console.log(demo1)
    demo1.innerHTML+=`<Option value=${x.country}>${x.country}</Option>`
   })
}
demo()