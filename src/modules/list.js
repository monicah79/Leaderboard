import {getData} from "./getdata"
const li = async()=> {
    const ul = document.querySelector(".ul-li")
    ul.innerHTML = ""
    const data = await getData()
    data.sort((a, b)=> b.scores - a.scores)

    data.forEach((list)=> {
        ul.innerHTML += `<li>${list.name} : ${list.scores}  </li>`
    })
    //  console.log(data)
 }
export default li