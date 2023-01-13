import './style.css';
const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OibSRTp1TXHUwSe4RmPD/scores/"

// const getId = () => {
//     fetch(url, {
//         method: "POST",
//         headers:{
//             "Content-type": "application/json; charset=UTF-8",
//         },
//         body : JSON.stringify({
//           name: "moniq's game",
//         })
        
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// }
// gameId : OibSRTp1TXHUwSe4RmPD
// getId()

const form = document.querySelector(".data-form")

form.addEventListener("click", ((e)=>{
    e.preventDefault()
    const name = document.querySelector(".name-data")
    const scores = document.querySelector(".score-data")
    if (name.value && scores.value){
        const obj = {
            name: name.value,
            scores : scores.value
        }
        // console.log(obj)
        postData(obj.name, obj.scores)
    }
}))

// const postData = async (obj)=>{
//     fetch (url,{
//     method: "POST",
//     headers:{
//         "Content-type": "application/json; charset=UTF-8",
//     },
//     body : JSON.stringify(obj)
//   })

// }
// .then(response) => response.json())

const postData = async (obj)=>
fetch (url,{
    method: "POST",
    headers:{
        "Content-type": "application/json; charset=UTF-8",
    },
    body : JSON.stringify(obj)
})
.then((response) => response.json())
.then((data) => data.result)


const getData = async () => {
    const response = await fetch (url)
    const data = await response.json()
    console.log(data)
    return data.result
}

 const li = async()=> {
    const ul = document.querySelector(".ul-li")
    ul.innerHTML = ""
    const data = await getData()
    data.sort((a, b)=> b.scores - a.scores)

    data.forEach((list)=> {
        ul.innerHTML += `<li>${list.name} : ${list.scores}  </li>`
    })
     console.log(data)
 }
 
const refreshBtn = document.querySelector(".btn-refresh")
refreshBtn.addEventListener ("click", li)
li()