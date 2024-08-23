
const local = localStorage.getItem("senha")
//console.log(local,"local")
const carrinho = [{
    id:"1",preco:"200"
}]
localStorage.setItem("senha2","teste")

const carrinhoJson = JSON.stringify(carrinho)

localStorage.setItem("carrinho",carrinhoJson)
const carrinhoLocal = localStorage.getItem("carrinho")

//console.log(carrinhoLocal,"carrinhoLocal")
const carrinhoLocalJson = JSON.parse(carrinhoLocal)
//console.log(carrinhoLocalJson,"localjson")


const idInterval = setInterval(()=>{
    //console.log("interval")
    
},1000)
//console.log(idInterval,"id interval")
setTimeout(()=>{
    localStorage.clear()
    //console.log("limpar o storage")
    clearInterval(idInterval)
},5000)

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((result)=>result.json())
// .then((json)=>{
//     //console.log(json)
//     if(json.id){
//         document.b
//     }
    
//     }
// )
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
const novoPreco = {
    body
    : 
    "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
    ,
    title
    : 
    "sint soluta et vel magnam aut ut sed qui",
    userId
    : 
    9}
async function getApi(){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        headers:headers,
        method:"POST",
        body: JSON.stringify(novoPreco)
    })
    
    const result = await response.json()
    //console.log(result,"response await")
    getAllPosts()
}
getApi()
async function getAllPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        headers:headers,
    })
    const result = await response.json()
    console.log(result,"response await")
    result.forEach((item)=>{
        document.body.insertAdjacentHTML("beforeend",`
            <li>
            <p>${item.title}<p>
            <button>Ver mais</button>
            </li>
            `)
    })
} 
let id = 0
const btn = document.querySelector("button")
btn.addEventListener("click",()=>{

    localStorage.setItem("postID",28)
    window.location.href = "/post"
})
