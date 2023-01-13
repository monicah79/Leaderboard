import './style.css';
import li from './modules/list.js'
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

form.addEventListener("click", async (e)=> {
    e.preventDefault()
    const name = document.querySelector(".name-data")
    const scores = document.querySelector(".score-data")
    if (name.value && scores.value){
        const obj = {
            name: name.value,
            scores : scores.value
        }
        // console.log(obj)
       await postData(obj.name, obj.scores)
    }
})

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

const postData = async (name, scores)=>
fetch (url,{
    method: "POST",
    headers:{
        "Content-type": "application/json; charset=UTF-8",
    },
    body : JSON.stringify({
        name : `${name}`,
        scores : `${scores}`
    })
})
.then((response) => response.json())
.then((data) => data.result)
console.log(data)

const refreshBtn = document.querySelector(".btn-refresh")
refreshBtn.addEventListener ("click", li)
li()