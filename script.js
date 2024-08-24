const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

async function getAllPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        headers : headers
    })
    const result = await response.json()
    console.log(result,"response await")
    result.forEach((item)=>{
        const ul = document.querySelector("ul")
        ul.insertAdjacentHTML("beforeend",`
            <li>
            <p>${item.title}<p>
            <p>${item.body}<p>
            <button>Comentários</button>
            </li>
            `)
    })
}
getAllPosts()

let id = 0
const btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    localStorage.setItem("postID",28)
    window.location.href = "/post"
})

const post_content = {
    body
    : 
    "teste1 \nteste2\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
    ,
    title
    : 
    "post",
    userId
    : 9}

async function getApi(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        headers:headers,
        method:"POST",
        body: JSON.stringify(post_content)
    })
    
    const result = await response.json()
    console.log(result,"response await")
}
getApi()